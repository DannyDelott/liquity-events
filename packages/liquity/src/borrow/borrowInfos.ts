import { AlchemyProvider } from "alchemy-sdk";

import {
  borrowerOperationsABI,
  BORROWER_OPERATIONS_ADDRESS,
  LUSDBorrowingFeePaidEvent,
} from "src/contracts/borrowerOperations";
import { lqtyStakingContract } from "src/contracts/lqtyStaking";
import { formatEther } from "ethers/lib/utils";
import { fetchPrice } from "src/defillama";
import { LUSD_TOKEN_ADDRESS } from "src/lusdToken";
import { makeEventInfos } from "src/makeEventInfos";

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
  const latestBlock = await provider.getBlockNumber();

  return makeEventInfos<
    typeof borrowerOperationsABI,
    "LUSDBorrowingFeePaid",
    BorrowInfo
  >({
    contractABI: borrowerOperationsABI,
    contractAddress: BORROWER_OPERATIONS_ADDRESS,
    startBlock,
    endBlock: latestBlock,
    eventName: "LUSDBorrowingFeePaid",
    filterArgs: [null],
    eventPredicate: (event) => isNonZeroFeeEvent(event),
    provider,
    mapEventToEventInfo: (event) => mapEventToBorrowInfo(event, provider),
  });
}

async function mapEventToBorrowInfo(
  lusdBorrowingFeePaidEvent: LUSDBorrowingFeePaidEvent,
  provider: AlchemyProvider
): Promise<BorrowInfo> {
  const { blockNumber, transactionHash } = lusdBorrowingFeePaidEvent;
  const { timestamp } = await provider.getBlock(blockNumber);

  // the totalLQTYStaked is useful for calculating your pool share at the time
  // of the event
  const lqtyStaking = lqtyStakingContract.connect(provider);
  const totalLQTYStaked = await lqtyStaking["totalLQTYStaked"]({
    blockTag: blockNumber,
  });

  const lusdFee = formatEther(lusdBorrowingFeePaidEvent.args[1]);
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
    borrower: lusdBorrowingFeePaidEvent.args[0],
    lusdFee,
    lusdFeeUSD,
    totalLqtyStaked: formatEther(totalLQTYStaked),
  };
}

function isNonZeroFeeEvent(event: LUSDBorrowingFeePaidEvent) {
  return event.args[1].gt(0);
}
