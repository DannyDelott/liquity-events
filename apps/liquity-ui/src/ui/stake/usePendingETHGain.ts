import { LIQUITY_STAKING_ADDRESS, lqtyStakingABI } from "liquity";
import { useContractRead } from "wagmi";

export function usePendingETHGain(account: string) {
  return useContractRead({
    abi: lqtyStakingABI,
    address: LIQUITY_STAKING_ADDRESS,
    functionName: "getPendingETHGain",
    args: [account as `0x${string}`],
  });
}
