import { AlchemyProvider } from "alchemy-sdk";
import { Event } from "ethers";

import { borrowerOperationsContract } from "src/contracts/borrowerOperations";
import { lqtyStakingContract } from "src/contracts/lqtyStaking";
import { formatEther } from "ethers/lib/utils";
import { fetchPrice } from "src/defillama";
import { LUSD_TOKEN_ADDRESS } from "src/lusdToken";
import { createBlockIntervals } from "src/base/blocks";

export const BORROW_INFOS_URL =
  "https://liquity.s3.amazonaws.com/borrowInfos.json";

export interface BorrowInfo {
  block: number;
  txHash: string;
  timestamp: number;
  borrower: string;
  lusdFee: string;
  lusdFeeUSD: string;
  totalLqtyStaked: string;
}

export async function fetchBorrowInfos(
  startBlock: number,
  provider: AlchemyProvider
): Promise<BorrowInfo[]> {
  // Grab the raw events
  const lusdBorrowingFeePaidEvents = await queryLUSDBorrowingFeePaidEvents(
    startBlock,
    provider
  );

  // map the events to their borrow infos
  return makeBorrowInfos(lusdBorrowingFeePaidEvents, provider);
}

async function queryLUSDBorrowingFeePaidEvents(
  startBlock: number,
  provider: AlchemyProvider
) {
  const latestBlock = await provider.getBlockNumber();

  const blockIntervals = createBlockIntervals(startBlock, latestBlock);

  const borrowerOperations = borrowerOperationsContract.connect(provider);

  const feePaidEvents: Event[] = [];
  for (const [startBlock, endBlock] of blockIntervals) {
    const rawEvents = await borrowerOperations.queryFilter(
      borrowerOperations.filters["LUSDBorrowingFeePaid"](null, null),
      startBlock,
      endBlock
    );

    // We only care about events w/ real fee amounts attached to them
    const eventsWithNonZeroFee = rawEvents.filter((event) =>
      isNonZeroFeeEvent(event)
    );

    feePaidEvents.push(...eventsWithNonZeroFee);
  }
  console.log(
    `LUSDBorrowingFeePaid: ${feePaidEvents.length} events (startBlock #${startBlock}, endBlock #${latestBlock})`
  );

  return feePaidEvents;
}

async function makeBorrowInfos(
  lusdBorrowingFeePaidEvents: Event[],
  provider: AlchemyProvider
) {
  const numEvents = lusdBorrowingFeePaidEvents.length;
  const borrowInfos: BorrowInfo[] = [];
  let counter = 1;
  for (const lusdBorrowingFeePaidEvent of lusdBorrowingFeePaidEvents) {
    const borrowInfo = await fetchBorrowInfoForEvent(
      provider,
      lusdBorrowingFeePaidEvent
    );
    console.log(`(${counter} of ${numEvents}): Fee $${borrowInfo.lusdFee}`);

    borrowInfos.push(borrowInfo);

    counter++;
  }

  return borrowInfos;
}

async function fetchBorrowInfoForEvent(
  provider: AlchemyProvider,
  lusdBorrowingFeePaidEvent: Event
): Promise<BorrowInfo> {
  const { blockNumber, transactionHash } = lusdBorrowingFeePaidEvent;
  const { timestamp } = await provider.getBlock(blockNumber);

  // the totalLQTYStaked is useful for calculating your pool share at the time
  // of the event
  const lqtyStaking = lqtyStakingContract.connect(provider);
  const totalLQTYStaked = await lqtyStaking["totalLQTYStaked"]({
    blockTag: blockNumber,
  });

  const lusdFee = formatEther(lusdBorrowingFeePaidEvent.args?.[1]);
  const priceResult = await fetchPrice(LUSD_TOKEN_ADDRESS, timestamp);

  // default to 1:1 since lusd is a stable coin
  let lusdFeeUSD = lusdFee;

  // but we may have a more accurate price since it can be off-peg by small
  // amounts
  if (priceResult) {
    lusdFeeUSD = `${+lusdFee * priceResult.price}`;
  }

  return {
    block: blockNumber,
    txHash: transactionHash,
    timestamp,
    borrower: lusdBorrowingFeePaidEvent.args?.[0],
    lusdFee,
    lusdFeeUSD,
    totalLqtyStaked: formatEther(totalLQTYStaked),
  };
}

function isNonZeroFeeEvent(event: Event) {
  return event.args?.[1].gt(0);
}
