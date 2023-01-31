import { Fragment, ReactElement } from "react";
import { WITHDRAW_LQTY_MODAL_ID } from "src/ui/stake/WithdrawLQTYModal/modalId";
import { WithdrawLQTYModal } from "src/ui/stake/WithdrawLQTYModal/WithdrawLQTYModal";

export function WithdrawLQTYButton(): ReactElement {
  return (
    <Fragment>
      <label
        htmlFor={WITHDRAW_LQTY_MODAL_ID}
        className="daisy-btn daisy-btn-sm daisy-btn-outline daisy-btn-primary"
      >
        Withdraw
      </label>
      <WithdrawLQTYModal />
    </Fragment>
  );
}
