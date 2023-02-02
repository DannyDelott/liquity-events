import classNames from "classnames";
import { BigNumber } from "ethers";
import { parseEther } from "ethers/lib/utils.js";
import { LQTY_TOKEN_ADDRESS } from "liquity";
import { ChangeEventHandler, Fragment, ReactElement, useState } from "react";
import { formatLQTYOrLUSDLabel } from "src/ui/base/format";
import { CryptoIcon, IconName, IconSize } from "src/ui/crypto/CryptoIcon";
import { DEPOSIT_LQTY_MODAL_ID } from "src/ui/stake/DepositLQTYModal/modalId";
import { useDepositLQTY } from "src/ui/stake/useDepositLQTY";
import { useTokenBalance } from "src/wallet/useTokenBalance";
import { useAccount } from "wagmi";

export function DepositLQTYModal(): ReactElement {
  const { address } = useAccount();
  const { data: lqtyBalance } = useTokenBalance(address, LQTY_TOKEN_ADDRESS);
  const [depositAmount, setDepositAmount] = useState("");

  const {
    isDepositTxProcessing,
    isDepositPendingWalletAction,
    depositError,
    depositLQTY,
  } = useDepositLQTY(depositAmount);

  const depositErrorMessage = getDepositErrorMessage(
    depositAmount,
    lqtyBalance?.value,
    depositError
  );
  const isDepositButtonDisabled = getIsDepositButtonDisabled(
    address,
    depositAmount,
    lqtyBalance?.value,
    isDepositPendingWalletAction,
    isDepositTxProcessing
  );

  const onDepositAmountChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    // we need to do some extra work if the user is trying to
    // deposit a fractional amount of LQTY
    const [wholeNumbers, decimalNumbers] = e.target.value.split(".");

    // no decimals? no problem
    if (!decimalNumbers) {
      setDepositAmount(e.target.value);
      return;
    }

    // don't let users go past the 18th decimal place when
    // inputing an amount
    const truncatedDecimals = decimalNumbers.slice(0, 18);
    setDepositAmount(`${wholeNumbers}.${truncatedDecimals}`);
  };

  return (
    <Fragment>
      <input
        type="checkbox"
        id={DEPOSIT_LQTY_MODAL_ID}
        className="daisy-modal-toggle"
      />
      <label
        htmlFor={DEPOSIT_LQTY_MODAL_ID}
        className="daisy-modal daisy-modal-middle"
      >
        <label className="daisy-modal-box w-[366px] ">
          <label
            htmlFor={DEPOSIT_LQTY_MODAL_ID}
            className="daisy-btn daisy-btn-sm daisy-btn-circle daisy-btn-ghost absolute right-2 top-2"
          >
            ✕
          </label>

          <h3 className="font-bold text-lg">Stake LQTY</h3>
          <div className="daisy-form-control">
            <label className="daisy-label flex justify-between">
              <span className="daisy-label-text">Enter amount</span>
              <span className="daisy-label-text">
                Balance: {formatLQTYOrLUSDLabel(lqtyBalance?.value)}
              </span>
            </label>
            <label className="daisy-input-group">
              <span>
                <CryptoIcon icon={IconName.LQTY} size={IconSize.SMALL} />
              </span>
              <input
                type="number"
                className={classNames("daisy-input daisy-input-bordered", {
                  "daisy-input-error": depositErrorMessage,
                  "text-error": depositErrorMessage,
                })}
                value={depositAmount}
                onChange={onDepositAmountChange}
              />
              <button
                className={classNames(
                  "daisy-btn daisy-btn-square daisy-btn-primary daisy-btn-outline",
                  depositErrorMessage ? "daisy-btn-error" : "daisy-btn-primary"
                )}
                onClick={() => setDepositAmount(lqtyBalance?.formatted || "")}
              >
                Max
              </button>
            </label>
          </div>
          {depositErrorMessage ? (
            <label className="inline-block mt-4 daisy-label-text text-error whitespace-normal">
              {depositErrorMessage}
            </label>
          ) : null}

          <div className="daisy-modal-action">
            <button
              disabled={isDepositButtonDisabled}
              className={classNames("daisy-btn daisy-btn-primary w-full", {
                "daisy-loading":
                  isDepositPendingWalletAction || isDepositTxProcessing,
              })}
              onClick={depositLQTY}
            >
              {isDepositPendingWalletAction || isDepositTxProcessing
                ? "Processing"
                : "Deposit"}
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

function getDepositErrorMessage(
  depositAmount: string,
  lqtyBalance: BigNumber | undefined,
  depositError: Error | null
) {
  if (lqtyBalance?.lt(parseEther(depositAmount || "0"))) {
    return `The amount you're trying to deposit exceeds your wallet balance.`;
  }
  if (depositError) {
    return depositError.message;
  }
}

function getIsDepositButtonDisabled(
  address: string | undefined,
  depositAmount: string,
  lqtyBalance: BigNumber | undefined,
  isDepositPendingWalletAction: boolean,
  isDepositTxProcessing: boolean
) {
  return (
    !address || // not connected
    !+depositAmount || // no amount to deposit
    !lqtyBalance || // lqtyBalance hasn't been fetched yet
    lqtyBalance.isZero() || // no lqty balance in their wallet
    lqtyBalance.lt(parseEther(depositAmount || "0")) || // not enough lqty in their wallet to support the amount they want to deposit
    isDepositPendingWalletAction || // a deposit tx was sent to the user's wallet and is waiting confirmation
    isDepositTxProcessing // the deposit has been sent to the mempool and is awaiting confirmation
  );
}
