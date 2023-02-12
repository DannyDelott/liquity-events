import classNames from "classnames";
import { Fragment, ReactElement } from "react";
import { DepositLQTYModal } from "src/ui/stake/DepositLQTYModal/DepositLQTYModal";
import { DEPOSIT_LQTY_MODAL_ID } from "src/ui/stake/DepositLQTYModal/modalId";
import { useAccount } from "wagmi";

export function DepositLQTYButton({
  account,
}: {
  account: string | undefined;
}): ReactElement {
  const { address: connectedAccount } = useAccount();
  const disabled = account !== connectedAccount;
  return (
    <Fragment>
      <label
        htmlFor={DEPOSIT_LQTY_MODAL_ID}
        className={classNames("daisy-btn daisy-btn-sm daisy-btn-outline", {
          "daisy-btn-primary": !disabled,
          "daisy-btn-disabled": disabled,
        })}
      >
        Deposit
      </label>
      <DepositLQTYModal />
    </Fragment>
  );
}
