import { AlchemyProvider } from "alchemy-sdk";
import { Event, utils } from "ethers";
import range from "lodash.range";
import chunk from "lodash.chunk";

import { borrowerOperationsContract } from "./borrowerOperations";
import { lqtyStakingContract } from "../stake/lqtyStaking";
import { formatEther } from "ethers/lib/utils";

export interface BorrowEventData {
  block: number;
  txHash: string;
  timestamp: number;
  borrower: string;
  lusdFeePaid: string;
  totalLqtyStaked: string;
}

export async function scrapeBorrowEvents(
  startBlock: number,
  provider: AlchemyProvider
) {
  const lusdBorrowingFeePaidEvents = await queryLUSDBorrowingFeePaidEvents(
    startBlock,
    provider
  );

  // grab the event data we care about
  return makeBorrowEvents(lusdBorrowingFeePaidEvents, provider);
}

async function queryLUSDBorrowingFeePaidEvents(
  startBlock: number,
  provider: AlchemyProvider
) {
  const latestBlock = await provider.getBlockNumber();
  console.log("The latest block number is", latestBlock);

  // creates a list of block intervals
  const blockRanges = chunk(range(startBlock, latestBlock + 1, 50_000), 2);
  const lastBlockRange = blockRanges[blockRanges.length - 1];
  const lastBlockRangeEnd = lastBlockRange[1];
  if (lastBlockRangeEnd && lastBlockRangeEnd < latestBlock) {
    blockRanges.push([lastBlockRangeEnd, latestBlock]);
  }

  console.log(
    `Requesting LUSDBorrowingFeePaid events (${blockRanges.length} requests)`
  );

  const borrowerOperations = borrowerOperationsContract.connect(provider);

  const feePaidEvents: Event[] = [];
  let requestCounter = 1;
  for (const [startBlock, endBlock = latestBlock] of blockRanges) {
    console.log(
      `LUSDBorrowingFeePaid request:  ${requestCounter} of ${blockRanges.length}`
    );
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
    requestCounter++;
  }

  return feePaidEvents;
}

async function makeBorrowEvents(
  lusdBorrowingFeePaidEvents: Event[],
  provider: AlchemyProvider
) {
  const borrowEvents: BorrowEventData[] = [];
  let requestCounter = 1;
  for (const event of lusdBorrowingFeePaidEvents) {
    console.log(
      `getBorrowEventData request: ${requestCounter} of ${lusdBorrowingFeePaidEvents.length}`
    );
    const eventData = await getBorrowEventData(provider, event);
    borrowEvents.push(eventData);
    requestCounter++;
  }

  console.log(`${borrowEvents.length} borrow events created!`);

  return borrowEvents;
}

async function getBorrowEventData(
  provider: AlchemyProvider,
  event: Event
): Promise<BorrowEventData> {
  const { blockNumber, transactionHash } = event;
  const { timestamp } = await provider.getBlock(blockNumber);

  // useful for calculating your % of the staking pool at the time of the event
  const lqtyStaking = lqtyStakingContract.connect(provider);
  const totalLQTYStaked = await lqtyStaking["totalLQTYStaked"]({
    blockTag: blockNumber,
  });

  return {
    block: blockNumber,
    txHash: transactionHash,
    timestamp,
    borrower: event.args?.[0],
    lusdFeePaid: formatEther(event.args?.[1]),
    totalLqtyStaked: formatEther(totalLQTYStaked),
  };
}

function isNonZeroFeeEvent(event: Event) {
  return event.args?.[1].gt(0);
}
