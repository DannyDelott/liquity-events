import { AlchemyProvider } from "alchemy-sdk";
import { Event } from "ethers";
import range from "lodash.range";
import chunk from "lodash.chunk";

import { formatEther } from "ethers/lib/utils";
import { troveOperationsContract } from "src/contracts/troveOperations";

export const REDEMPTION_INFOS_URL =
  "https://liquity.s3.amazonaws.com/redemptionInfos.json";

export interface RedemptionInfo {
  block: number;
  txHash: string;
  timestamp: number;
  redeemer: string;
  ethFee: string;
  ethSent: string;
}

export async function fetchRedemptionInfos(
  startBlock: number,
  provider: AlchemyProvider
): Promise<RedemptionInfo[]> {
  // Grab the raw events
  const redemptionEvents = await queryRedemptionEvents(startBlock, provider);

  // map the events to their redeem infos
  return makeRedemptionInfos(redemptionEvents, provider);
}

async function queryRedemptionEvents(
  startBlock: number,
  provider: AlchemyProvider
) {
  const latestBlock = await provider.getBlockNumber();

  // creates a list of block intervals
  const blockRanges = chunk(range(startBlock, latestBlock + 1, 50_000), 2);
  // Add an additional interval that extends to the latest block
  const lastBlockRange = blockRanges[blockRanges.length - 1];
  const lastBlockRangeEnd = lastBlockRange[1];
  if (lastBlockRangeEnd && lastBlockRangeEnd < latestBlock) {
    blockRanges.push([lastBlockRangeEnd, latestBlock]);
  }

  const troveOperations = troveOperationsContract.connect(provider);

  const redemptionEvents: Event[] = [];
  for (const [startBlock, endBlock = latestBlock] of blockRanges) {
    const rawEvents = await troveOperations.queryFilter(
      troveOperations.filters["Redemption"](),
      startBlock,
      endBlock
    );

    redemptionEvents.push(...rawEvents);
  }
  console.log(
    `Redemption: ${redemptionEvents.length} events (startBlock #${startBlock}, endBlock #${latestBlock})`
  );

  return redemptionEvents;
}

async function makeRedemptionInfos(
  redemptionEvents: Event[],
  provider: AlchemyProvider
) {
  const numEvents = redemptionEvents.length;
  const redemptionInfos: RedemptionInfo[] = [];
  let counter = 1;
  for (const redeemEvent of redemptionEvents) {
    const redemptionInfo = await fetchRedemptionInfoForEvent(
      provider,
      redeemEvent
    );
    console.log(`(${counter} of ${numEvents}): Fee ${redemptionInfo.ethFee}`);

    redemptionInfos.push(redemptionInfo);

    counter++;
  }

  return redemptionInfos;
}

async function fetchRedemptionInfoForEvent(
  provider: AlchemyProvider,
  redemptionEvent: Event
): Promise<RedemptionInfo> {
  const { blockNumber, transactionHash } = redemptionEvent;
  const { from } = await provider.getTransaction(transactionHash);
  const { timestamp } = await provider.getBlock(blockNumber);

  return {
    block: blockNumber,
    txHash: transactionHash,
    timestamp,
    redeemer: from,
    ethSent: formatEther(redemptionEvent.args?.[2]),
    ethFee: formatEther(redemptionEvent.args?.[3]),
  };
}
