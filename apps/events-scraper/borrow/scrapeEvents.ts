import { AlchemyProvider } from "alchemy-sdk";
import { Event, utils } from "ethers";
import range from "lodash.range";
import chunk from "lodash.chunk";

import {
  borrowerOperationsContract,
  BORROWER_OPERATIONS_DEPLOYMENT_BLOCK,
} from "./borrowerOperations";

export interface LUSDBorrowingFeePaidEventData {
  block: number;
  txHash: string;
  timestamp: number;
  borrower: string;
  lusdFeePaid: string;
}

export async function scrapeLUSDBorrowingFeePaidEvents(
  provider: AlchemyProvider
) {
  const latestBlock = await provider.getBlockNumber();
  console.log("The latest block number is", latestBlock);

  // creates a list of block intervals
  const blockRanges = chunk(
    range(BORROWER_OPERATIONS_DEPLOYMENT_BLOCK, latestBlock + 1, 50_000),
    2
  );
  const lastBlockRange = blockRanges[blockRanges.length - 1];
  const lastBlockRangeEnd = lastBlockRange[1];
  if (lastBlockRangeEnd && lastBlockRangeEnd < latestBlock) {
    blockRanges.push([lastBlockRangeEnd, latestBlock]);
  }

  console.log(
    `Requesting existing LUSDBorrowingFeePaid events (${blockRanges.length} requests)`
  );

  const borrowerOperations = borrowerOperationsContract.connect(provider);

  const feePaidEvents: Event[] = [];
  let eventCounter = 1;
  for (const [startBlock, endBlock = latestBlock] of blockRanges) {
    console.log(`Request ${eventCounter} of ${blockRanges.length}`);
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
    eventCounter++;
  }

  // grab the event data we care about
  const parsedEventData: LUSDBorrowingFeePaidEventData[] = [];
  let parseCounter = 1;
  for (const event of feePaidEvents) {
    console.log(`Request ${parseCounter} of ${feePaidEvents.length}`);
    const eventData = await parseLUSDBorrowingFeePaidEvent(provider, event);
    parsedEventData.push(eventData);
    parseCounter++;
  }

  console.log(
    `Scraped ${parsedEventData.length} existing LUSDBorrowingFeePaid events.`
  );

  return parsedEventData;
}

async function parseLUSDBorrowingFeePaidEvent(
  provider: AlchemyProvider,
  event: Event
): Promise<LUSDBorrowingFeePaidEventData> {
  const { blockNumber, transactionHash } = event;
  const { timestamp } = await provider.getBlock(blockNumber);
  return {
    block: blockNumber,
    txHash: transactionHash,
    timestamp,
    borrower: event.args?.[0],
    lusdFeePaid: utils.formatEther(event.args?.[1]),
  };
}

function isNonZeroFeeEvent(event: Event) {
  return event.args?.[1].gt(0);
}
