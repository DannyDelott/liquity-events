import { LIQUITY_STAKING_ADDRESS, lqtyStakingABI } from "liquity";
import { useContractRead } from "wagmi";

export function usePendingETHGain(
  account: string | undefined,
  atBlock?: number,
  options?: { enabled?: boolean; keepPreviousData?: boolean }
) {
  return useContractRead({
    abi: lqtyStakingABI,
    address: LIQUITY_STAKING_ADDRESS,
    functionName: "getPendingETHGain",
    args: [account as `0x${string}`],
    overrides: { blockTag: atBlock || "latest" },
    enabled: !!account && options?.enabled,
    keepPreviousData: options?.keepPreviousData,
  });
}
