import { AlchemyProvider } from "alchemy-sdk";
import { Event } from "ethers";
import { formatEther } from "ethers/lib/utils";
import { createBlockIntervals } from "src/base/blocks";
import { lqtyStakingContract } from "src/contracts/lqtyStaking";
export const STAKE_CHANGED_INFOS_URL =
  "https://liquity.s3.amazonaws.com/stakeChangedInfos.json";

export interface StakeChangedInfo {
  block: number;
  txHash: string;
  timestamp: number;
  staker: string;
  newStake: string;
  totalLqtyStaked: string;
}

/**
 * Grabs every time the lqtyStaking contract's total stake changed, including
 * the staker, amount they staked, and the protocol total stake at the time.
 */

export async function fetchStakeChangedInfos(
  startBlock: number,
  provider: AlchemyProvider,
  address?: string
): Promise<StakeChangedInfo[]> {
  // // Grab the raw events
  const stakeChangedEvents = await queryStakeChangedEvents(
    startBlock,
    provider,
    address
  );

  // // map the events to their borrow infos
  return makeStakeChangedInfos(stakeChangedEvents, provider);
}

async function queryStakeChangedEvents(
  startBlock: number,
  provider: AlchemyProvider,
  address?: string
) {
  const latestBlock = await provider.getBlockNumber();

  const blockIntervals = createBlockIntervals(startBlock, latestBlock);

  const lqtyStaking = lqtyStakingContract.connect(provider);
  const stakeChangedEvents: Event[] = [];
  for (const [startBlock, endBlock] of blockIntervals) {
    const rawEvents = await lqtyStaking.queryFilter(
      lqtyStakingContract.filters["StakeChanged"](address || null, null),
      startBlock,
      endBlock
    );

    stakeChangedEvents.push(...rawEvents);
  }

  console.log(
    `StakeChanged: ${stakeChangedEvents.length} events (startBlock #${startBlock}, endBlock #${latestBlock})`
  );

  return stakeChangedEvents;
}

async function makeStakeChangedInfos(
  stakeChangedEvents: Event[],
  provider: AlchemyProvider
) {
  const numEvents = stakeChangedEvents.length;
  const stakeChangedInfos: StakeChangedInfo[] = [];
  let counter = 1;
  for (const stakeChangedEvent of stakeChangedEvents) {
    const stakeChangedInfo = await fetchStakeChangedInfoForEvent(
      provider,
      stakeChangedEvent
    );
    console.log(
      `(${counter} of ${numEvents}): LQTY Staked = ${(+stakeChangedInfo.totalLqtyStaked).toFixed(
        2
      )}`
    );

    stakeChangedInfos.push(stakeChangedInfo);

    counter++;
  }

  return stakeChangedInfos;
}

async function fetchStakeChangedInfoForEvent(
  provider: AlchemyProvider,
  stakeChangedEvent: Event
): Promise<StakeChangedInfo> {
  const { blockNumber, transactionHash } = stakeChangedEvent;
  const { timestamp } = await provider.getBlock(blockNumber);

  // the totalLQTYStaked is useful for calculating your pool share at the time
  // of the event
  const lqtyStaking = lqtyStakingContract.connect(provider);
  const totalLQTYStaked = await lqtyStaking["totalLQTYStaked"]({
    blockTag: blockNumber,
  });

  return {
    block: blockNumber,
    txHash: transactionHash,
    timestamp,
    staker: stakeChangedEvent.args?.[0],
    newStake: formatEther(stakeChangedEvent.args?.[1]),
    totalLqtyStaked: formatEther(totalLQTYStaked),
  };
}
