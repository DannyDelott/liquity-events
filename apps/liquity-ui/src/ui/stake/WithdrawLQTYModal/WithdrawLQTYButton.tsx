import classNames from "classnames";
import { Fragment, ReactElement } from "react";
import { WITHDRAW_LQTY_MODAL_ID } from "src/ui/stake/WithdrawLQTYModal/modalId";
import { WithdrawLQTYModal } from "src/ui/stake/WithdrawLQTYModal/WithdrawLQTYModal";
import { useAccount } from "wagmi";

export function WithdrawLQTYButton({
  account,
}: {
  account: string | undefined;
}): ReactElement {
  const { address: connectedAccount } = useAccount();
  const disabled = account !== connectedAccount;
  return (
    <Fragment>
      <label
        htmlFor={WITHDRAW_LQTY_MODAL_ID}
        className={classNames("daisy-btn daisy-btn-sm daisy-btn-outline", {
          " daisy-btn-primary": !disabled,
          "daisy-btn-disabled": disabled,
        })}
      >
        Withdraw
      </label>
      <WithdrawLQTYModal />
    </Fragment>
  );
}
