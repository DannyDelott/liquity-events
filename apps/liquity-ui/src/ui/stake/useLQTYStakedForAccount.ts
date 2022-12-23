import { LIQUITY_STAKING_ADDRESS, lqtyStakingABI } from "liquity";
import { useContractRead } from "wagmi";

export function useLQTYStakedForAccount(account: string) {
  return useContractRead({
    address: LIQUITY_STAKING_ADDRESS,
    abi: lqtyStakingABI,
    functionName: "stakes",
    args: [account as `0x${string}`],
  });
}
