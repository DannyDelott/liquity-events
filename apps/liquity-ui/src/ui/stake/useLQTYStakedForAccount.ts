import { LIQUITY_STAKING_ADDRESS, lqtyStakingABI } from "liquity";
import { useContractRead } from "wagmi";

export function useLQTYStakedForAccount(account: string | undefined) {
  return useContractRead({
    address: LIQUITY_STAKING_ADDRESS,
    abi: lqtyStakingABI,
    functionName: "stakes",
    enabled: !!account,
    args: [account as `0x${string}`],
  });
}
