import { AlchemyProvider } from "alchemy-sdk";
import { lqtyStakingContract } from "src/contracts/lqtyStaking";
import { formatEther } from "ethers/lib/utils";

export async function getTotalLQTYStakedAtBlock(
  blockNumber: number,
  provider: AlchemyProvider
): Promise<string> {
  const lqtyStaking = lqtyStakingContract.connect(provider);
  const totalLqtyStaked = formatEther(
    await lqtyStaking["totalLQTYStaked"]({
      blockTag: blockNumber,
    })
  );
  return totalLqtyStaked;
}
