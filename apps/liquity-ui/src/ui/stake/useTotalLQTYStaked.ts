import { formatEther } from "ethers/lib/utils.js";
import { lqtyStakingABI, LIQUITY_STAKING_ADDRESS } from "liquity";
import { useContractRead } from "wagmi";

export function useTotalLQTYStaked() {
  return useContractRead({
    abi: lqtyStakingABI,
    address: LIQUITY_STAKING_ADDRESS,
    functionName: "totalLQTYStaked",
    select: (data) => (+(+formatEther(data)).toFixed()).toLocaleString(),
  });
}
