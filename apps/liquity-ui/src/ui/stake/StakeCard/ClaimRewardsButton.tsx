import classNames from "classnames";
import { BigNumber } from "ethers";
import { ReactElement } from "react";
import { usePendingETHGain } from "src/ui/stake/usePendingETHGain";
import { usePendingLUSDGain } from "src/ui/stake/usePendingLUSDGain";
import { useWithdrawLQTY } from "src/ui/stake/useWithdrawLQTY";

interface ClaimRewardsButtonProps {
  account: string | undefined;
}

export function ClaimRewardsButton({
  account,
}: ClaimRewardsButtonProps): ReactElement {
  // Withdrawing 0 LQTY has the effect of claiming pending rewards, so we can
  // hardcode this value and reuse this hook
  const {
    isWithdrawTxProcessing: isClaimTxProcessing,
    isWithdrawPendingWalletAction: isClaimPendingWalletAction,
    withdrawLQTY: claimRewards,
  } = useWithdrawLQTY("0");

  const { data: pendingETHGain } = usePendingETHGain(account);
  const { data: pendingLUSDGain } = usePendingLUSDGain(account);

  const isClaimPending = isClaimPendingWalletAction || isClaimTxProcessing;

  const isClaimButtonDisabled = getIsClaimRewardsButtonDisabled(
    account,
    pendingETHGain,
    pendingLUSDGain,
    isClaimPendingWalletAction,
    isClaimTxProcessing
  );
  return (
    <button
      disabled={isClaimButtonDisabled}
      className={classNames(
        "daisy-btn daisy-btn-outline w-full daisy-btn-primary",
        {
          "daisy-loading": isClaimPendingWalletAction || isClaimTxProcessing,
        }
      )}
      onClick={() => claimRewards()}
    >
      {isClaimPending ? "Processing" : "Claim Rewards"}
    </button>
  );
}

function getIsClaimRewardsButtonDisabled(
  address: string | undefined,
  pendingETHGain: BigNumber | undefined,
  pendingLUSDGain: BigNumber | undefined,
  isWalletPendingWalletAction: boolean,
  isWithdrawTxProcessing: boolean
) {
  const hasRewardsToClaim = pendingETHGain?.gt(0) || pendingLUSDGain?.gt(0);
  return (
    !address || // not connected
    !hasRewardsToClaim || // no rewards to claim
    isWalletPendingWalletAction || // a withdraw tx was sent to the user's wallet and is waiting their signature
    isWithdrawTxProcessing // the withdraw has been sent to the mempool and is awaiting confirmation
  );
}
