import { AlchemyProvider } from "alchemy-sdk";
import chunk from "lodash.chunk";
import range from "lodash.range";
import { ONE_WEEK_IN_BLOCKS } from "../base/blocks";
import {
  lqtyStakingContract,
  LIQUITY_STAKING_DEPLOYMENT_BLOCK,
  LIQUITY_STAKING_ADDRESS,
  lqtyStakingABI,
} from "./lqtyStaking";

interface StakeChangedEventData {
  block: number;
  txHash: string;
  timestamp: number;
  staker: string;
  newStake: string;
  totalLQTYStaked: string;
}

/**
 * Grabs every time the staker changed the amount they staked, either adding
 * more LQTY to the staking contract or removing it.
 */

async function fetchExistingStakeChangedEvents(provider: AlchemyProvider) {
  const latestBlock = await provider.getBlockNumber();

  const blockRanges = chunk(
    range(
      LIQUITY_STAKING_DEPLOYMENT_BLOCK,
      latestBlock + 1,
      ONE_WEEK_IN_BLOCKS
    ),
    2
  );
  console.log(
    `Requesting existing StakeChanged events (${blockRanges.length} requests)`
  );

  const lqtyStaking = lqtyStakingContract.connect(provider);
  const stakeChangedEvents = (
    await Promise.all(
      blockRanges.map(([startBlock, endBlock = latestBlock]) =>
        lqtyStaking.queryFilter(
          lqtyStakingContract.filters["StakeChanged"](null, null),
          startBlock,
          endBlock
        )
      )
    )
  ).flat();

  return stakeChangedEvents;
}

export function useRealtimeTotalLQTYStakedUpdatedEvents(
  listener: (totalLQTYStaked: BigNumber, event: Event) => void
) {
  return useContractEvent({
    address: LIQUITY_STAKING_ADDRESS,
    abi: lqtyStakingABI,
    eventName: "TotalLQTYStakedUpdated",
    listener,
    chainId: 1,
  });
}
/**
 * Grabs every time the system's total staked LQTY amount changes. This gets
 * emitted in the same transaction as StakeChanged and can be used in
 * combination with StakeChanged to calculate historical pool share.
 */

export function useTotalLQTYStakedUpdatedEvents(
  fromBlockOrBlockhash?: string | number,
  toBlock?: string | number,
  options?: { enabled: boolean }
) {
  const liquityStaking = useLiquityStaking();
  return useQuery(["TotalLQTYStakedUpdated", fromBlockOrBlockhash, toBlock], {
    queryFn: async () =>
      liquityStaking?.queryFilter(
        liquityStaking.filters["TotalLQTYStakedUpdated"](null),
        fromBlockOrBlockhash,
        toBlock
      ),
    enabled: options?.enabled || true,
  });
}
