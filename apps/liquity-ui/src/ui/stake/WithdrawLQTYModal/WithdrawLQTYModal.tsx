import classNames from "classnames";
import { BigNumber } from "ethers";
import { formatEther, parseEther } from "ethers/lib/utils.js";
import { ChangeEventHandler, Fragment, ReactElement, useState } from "react";
import { formatLQTYOrLUSDLabel } from "src/ui/base/format";
import { CryptoIcon, IconName, IconSize } from "src/ui/crypto/CryptoIcon";
import { useLQTYStakedForAccount } from "src/ui/stake/useLQTYStakedForAccount";
import { useWithdrawLQTY } from "src/ui/stake/useWithdrawLQTY";
import { WITHDRAW_LQTY_MODAL_ID } from "src/ui/stake/WithdrawLQTYModal/modalId";
import { useAccount } from "wagmi";

export function WithdrawLQTYModal(): ReactElement {
  const { address: account } = useAccount();
  const { data: stakedBalance } = useLQTYStakedForAccount(account);
  const [withdrawAmount, setWithdrawAmount] = useState("");

  const {
    isWithdrawTxProcessing,
    isWithdrawPendingWalletAction,
    withdrawError,
    withdrawLQTY,
  } = useWithdrawLQTY(withdrawAmount);

  const withdrawErrorMessage = getWithdrawErrorMessage(
    withdrawAmount,
    stakedBalance,
    withdrawError
  );
  const isWithdrawButtonDisabled = getIsWithdrawButtonDisabled(
    account,
    withdrawAmount,
    stakedBalance,
    isWithdrawPendingWalletAction,
    isWithdrawTxProcessing
  );

  const onWithdrawAmountChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    // we need to do some extra work if the user is trying to
    // withdraw a fractional amount of LQTY
    const [wholeNumbers, decimalNumbers] = e.target.value.split(".");

    // no decimals? no problem
    if (!decimalNumbers) {
      setWithdrawAmount(e.target.value);
      return;
    }

    // don't let users go past the 18th decimal place when
    // inputing an amount
    const truncatedDecimals = decimalNumbers.slice(0, 18);
    setWithdrawAmount(`${wholeNumbers}.${truncatedDecimals}`);
  };

  // Consider the tx processing either if it's waiting for the user to sign the
  // tx in their wallet, or if it's waiting to be confirmed on-chain
  const isTxProcessing =
    isWithdrawPendingWalletAction || isWithdrawTxProcessing;

  return (
    <Fragment>
      <input
        type="checkbox"
        id={WITHDRAW_LQTY_MODAL_ID}
        className="daisy-modal-toggle"
      />
      <label
        htmlFor={WITHDRAW_LQTY_MODAL_ID}
        className="daisy-modal daisy-modal-middle"
      >
        <label className="daisy-modal-box w-[366px] ">
          <label
            htmlFor={WITHDRAW_LQTY_MODAL_ID}
            className="daisy-btn daisy-btn-sm daisy-btn-circle daisy-btn-ghost absolute right-2 top-2"
          >
            ✕
          </label>

          <h3 className="font-bold text-lg">Unstake LQTY</h3>
          <div className="daisy-form-control">
            <label className="daisy-label flex justify-between">
              <span className="daisy-label-text">Enter amount</span>
              <span className="daisy-label-text">
                Balance: {formatLQTYOrLUSDLabel(stakedBalance)}
              </span>
            </label>
            <label className="daisy-input-group">
              <span>
                <CryptoIcon icon={IconName.LQTY} size={IconSize.SMALL} />
              </span>
              <input
                type="number"
                className={classNames("daisy-input daisy-input-bordered", {
                  "daisy-input-error": withdrawErrorMessage,
                  "text-error": withdrawErrorMessage,
                })}
                value={withdrawAmount}
                onChange={onWithdrawAmountChange}
              />
              <button
                className={classNames(
                  "daisy-btn daisy-btn-square daisy-btn-primary daisy-btn-outline",
                  withdrawErrorMessage ? "daisy-btn-error" : "daisy-btn-primary"
                )}
                onClick={() =>
                  setWithdrawAmount(formatEther(stakedBalance || ""))
                }
              >
                Max
              </button>
            </label>
          </div>
          {withdrawErrorMessage ? (
            <label className="inline-block mt-4 daisy-label-text text-error whitespace-normal">
              {withdrawErrorMessage}
            </label>
          ) : null}

          <div className="daisy-modal-action">
            <button
              disabled={isWithdrawButtonDisabled}
              className={classNames("daisy-btn daisy-btn-primary w-full", {
                "daisy-loading": isTxProcessing,
              })}
              onClick={withdrawLQTY}
            >
              {isTxProcessing ? "Processing" : "Withdraw"}
            </button>
          </div>
          <label className="inline-block mt-4 daisy-label-text whitespace-normal text-center font-bold">
            This will automatically harvest all pending LUSD and ETH rewards.
          </label>
        </label>
      </label>
    </Fragment>
  );
}

function getWithdrawErrorMessage(
  withdrawAmount: string,
  stakedBalance: BigNumber | undefined,
  withdrawError: Error | null
) {
  if (stakedBalance?.lt(parseEther(withdrawAmount || "0"))) {
    return `The amount you're trying to withdraw exceeds your staked balance.`;
  }
  if (withdrawError) {
    return withdrawError.message;
  }
}

function getIsWithdrawButtonDisabled(
  address: string | undefined,
  withdrawAmount: string,
  stakedBalance: BigNumber | undefined,
  isWalletPendingWalletAction: boolean,
  isWithdrawTxProcessing: boolean
) {
  return (
    !address || // not connected
    !+withdrawAmount || // no amount to withdraw
    !stakedBalance || // lqtyBalance hasn't been fetched yet
    stakedBalance.isZero() || // no lqty balance in their wallet
    stakedBalance.lt(parseEther(withdrawAmount || "0")) || // not enough staked lqty to support the amount they want to unstake
    isWalletPendingWalletAction || // a withdraw tx was sent to the user's wallet and is waiting their signature
    isWithdrawTxProcessing // the withdraw has been sent to the mempool and is awaiting confirmation
  );
}
