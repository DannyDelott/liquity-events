import { parseEther } from "ethers/lib/utils.js";
import { LIQUITY_STAKING_ADDRESS, lqtyStakingABI } from "liquity";
import { useState } from "react";
import { useClient, useContractWrite, usePrepareContractWrite } from "wagmi";

export function useDepositLQTY(depositAmount: string) {
  // prepare the tx as described in wagmi example
  const amount = parseEther(depositAmount || "0");
  const { config } = usePrepareContractWrite({
    abi: lqtyStakingABI,
    address: LIQUITY_STAKING_ADDRESS,
    functionName: "stake",
    args: [amount],
    enabled: amount.gt(0),
  });
  const {
    isLoading: isDepositPendingWalletAction,
    error: depositError,
    writeAsync: depositLQTYWrite,
  } = useContractWrite(config);

  const { queryClient } = useClient();
  // A separate flag must be stored in order to know when the tx goes from
  // pending to confirmed on-chain.
  const [isDepositTxProcessing, setIsDepositTxProcessing] = useState(false);

  const depositLQTY = async () => {
    try {
      const txReceipt = await depositLQTYWrite?.();
      setIsDepositTxProcessing(true);
      await txReceipt?.wait();
      setIsDepositTxProcessing(false);
      await queryClient.invalidateQueries();
    } catch (e) {
      setIsDepositTxProcessing(false);
    }
  };

  return {
    depositError,
    isDepositPendingWalletAction,
    isDepositTxProcessing,
    depositLQTY,
  };
}
