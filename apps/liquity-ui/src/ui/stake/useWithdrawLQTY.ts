import { parseEther } from "ethers/lib/utils.js";
import { LIQUITY_STAKING_ADDRESS, lqtyStakingABI } from "liquity";
import { useState } from "react";
import { useClient, useContractWrite, usePrepareContractWrite } from "wagmi";

/**
 * Withdraws LQTY from the staking contract to the user's wallet. This wil also
 * pull down any unclaimed LUSD and ETH rewards.
 *
 * This can be used to simply claim rewards by setting the withdrawAmount to 0.
 * @param withdrawAmount
 */
export function useWithdrawLQTY(withdrawAmount: string) {
  const amount = parseEther(withdrawAmount || "0");
  const { config } = usePrepareContractWrite({
    abi: lqtyStakingABI,
    address: LIQUITY_STAKING_ADDRESS,
    functionName: "unstake",
    args: [amount],
  });
  const {
    isLoading: isWithdrawPendingWalletAction,
    error: withdrawError,
    writeAsync: withdrawLQTYWrite,
  } = useContractWrite(config);

  const { queryClient } = useClient();
  // A separate flag must be stored in order to know when the tx goes from
  // pending to confirmed on-chain.
  const [isWithdrawTxProcessing, setIsWithdrawTxProcessing] = useState(false);

  const withdrawLQTY = async () => {
    try {
      const txReceipt = await withdrawLQTYWrite?.();
      setIsWithdrawTxProcessing(true);
      await txReceipt?.wait();
      setIsWithdrawTxProcessing(false);
      await queryClient.invalidateQueries();
    } catch (e) {
      setIsWithdrawTxProcessing(false);
    }
  };

  return {
    withdrawError,
    isWithdrawPendingWalletAction,
    isWithdrawTxProcessing,
    withdrawLQTY,
  };
}
