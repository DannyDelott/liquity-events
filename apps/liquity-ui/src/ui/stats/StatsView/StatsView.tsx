import { ReactElement, useState } from "react";
import { Page } from "src/ui/base/Page/Page";
import TopBorrowersTable from "src/ui/borrow/TopBorrowersTable/TopBorrowersTable";
import { ProtocolBorrowStats } from "src/ui/borrow/ProtocolBorrowStats/ProtocolBorrowStats";
import classNames from "classnames";

type ActiveTab = "borrow" | "stake";
export function StatsView(): ReactElement {
  const [activeTab, setActiveTab] = useState<ActiveTab>("borrow");
  return (
    <Page className="gap-8 items-center">
      <div className="daisy-tabs w-96">
        <a
          className={classNames(
            "daisy-tab daisy-tab-lg daisy-tab-lifted w-1/2",
            { ["daisy-tab-active "]: activeTab === "borrow" }
          )}
          onClick={() => setActiveTab("borrow")}
        >
          Borrow
        </a>

        <a
          className={classNames(
            "daisy-tab daisy-tab-lg daisy-tab-lifted w-1/2",
            { ["daisy-tab-active "]: activeTab === "stake" }
          )}
          onClick={() => setActiveTab("stake")}
        >
          Stake
        </a>
      </div>
      <div>
        <ProtocolBorrowStats />
      </div>
      <div className="daisy-card bg-base-100">
        <TopBorrowersTable limit={25} />
      </div>
    </Page>
  );
}
