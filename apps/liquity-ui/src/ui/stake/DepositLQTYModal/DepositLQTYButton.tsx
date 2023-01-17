import { Fragment, ReactElement } from "react";
import { DepositLQTYModal } from "src/ui/stake/DepositLQTYModal/DepositLQTYModal";
import { DEPOSIT_LQTY_MODAL_ID } from "src/ui/stake/DepositLQTYModal/modalId";

export function DepositLQTYButton(): ReactElement {
  return (
    <Fragment>
      <label
        htmlFor={DEPOSIT_LQTY_MODAL_ID}
        className="daisy-btn daisy-btn-sm daisy-btn-outline daisy-btn-primary"
      >
        Deposit
      </label>
      <DepositLQTYModal />
    </Fragment>
  );
}
