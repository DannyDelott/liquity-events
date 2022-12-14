import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useRouter } from "next/router";
import { Fragment, ReactElement } from "react";
import { Page } from "src/ui/base/Page/Page";
import { StakeCard } from "src/ui/stake/StakeCard/StakeCard";
import { StakeHistoryTable } from "src/ui/stake/StakeHistoryTable/StakeHistoryTable";
import { useAccount } from "wagmi";

export function HistoryView(): ReactElement {
  const router = useRouter();
  const { address: connectedAccount } = useAccount();

  return (
    <Page>
      <div className="flex flex-col gap-20 items-center">
        <div className="flex gap-4 flex-col items-center 2xl:flex-row 2xl:items-start ">
          {connectedAccount ? (
            <StakeHistoryTable account={connectedAccount} />
          ) : null}
        </div>
      </div>
    </Page>
  );
}
