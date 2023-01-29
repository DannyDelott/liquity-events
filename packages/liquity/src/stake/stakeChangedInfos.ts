import { AlchemyProvider } from "alchemy-sdk";
import { formatEther } from "ethers/lib/utils";
import { makeEventInfos } from "src/makeEventInfos";
import {
  LIQUITY_STAKING_ADDRESS,
  lqtyStakingABI,
  lqtyStakingContract,
  StakeChangedEvent,
} from "src/contracts/lqtyStaking";
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

  return makeEventInfos<
    typeof lqtyStakingABI,
    "StakeChanged",
    StakeChangedInfo
  >({
    contractAddress: LIQUITY_STAKING_ADDRESS,
    contractABI: lqtyStakingABI,
    startBlock: startBlock,
    endBlock: latestBlock,
    eventName: "StakeChanged",
    filterArgs: [address || null],
    provider,
    mapEventToEventInfo: (stakeChangedEvent) =>
      mapEventToStakeChangedInfo(stakeChangedEvent, provider),
  });
}

async function mapEventToStakeChangedInfo(
  stakeChangedEvent: StakeChangedEvent,
  provider: AlchemyProvider
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
    staker: stakeChangedEvent.args[0],
    newStake: formatEther(stakeChangedEvent.args[1]),
    totalLqtyStaked: formatEther(totalLQTYStaked),
  };
}
