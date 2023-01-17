import { AlchemyProvider } from "alchemy-sdk";
import { Event } from "ethers";
import { formatEther } from "ethers/lib/utils";
import { createBlockIntervals } from "src/base/blocks";
import { scrapeEventData } from "src/scrapeEventData";
import {
  LIQUITY_STAKING_ADDRESS,
  lqtyStakingABI,
  lqtyStakingContract,
} from "src/contracts/lqtyStaking";
import { makeStakeChangedInfosFile } from "src/stake/makeStakeChangedInfosFile";
import { writeFile } from "src/base/writeFile";
import stakeChangedInfosJson from "src/stake/json/stakeChangedInfos.json";
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
  const latestBlock = await provider.getBlockNumber();

  return scrapeEventData<StakeChangedInfo, typeof lqtyStakingABI>({
    contractAddress: LIQUITY_STAKING_ADDRESS,
    contractABI: lqtyStakingABI,
    startBlock: startBlock,
    endBlock: latestBlock,
    eventName: "StakeChanged",
    filterArgs: [address || null, null],
    provider,
    mapEventToEventData: async (stakeChangedEvent) => {
      const stakeChangedInfo = await fetchStakeChangedInfoForEvent(
        provider,
        stakeChangedEvent
      );

      return stakeChangedInfo;
    },
  });
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
