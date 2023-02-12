import { ReactElement } from "react";
import { Page } from "src/ui/base/Page/Page";
import { StakeCard } from "src/ui/stake/StakeCard/StakeCard";
import { useAccount } from "wagmi";

export function HomeView(): ReactElement {
  const { address: connectedAccount } = useAccount();

  return (
    <Page>
      <div className="flex flex-col gap-20 items-center">
        <div className="flex gap-4 flex-col items-center 2xl:flex-row 2xl:items-start ">
          <StakeCard account={connectedAccount} />
        </div>
      </div>
    </Page>
  );
}
