import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useRouter } from "next/router";
import { Fragment, ReactElement } from "react";
import { Page } from "src/ui/base/Page/Page";
import { StakeCard } from "src/ui/stake/StakeCard/StakeCard";
import { StakeHistoryTable } from "src/ui/stake/StakeHistoryTable/StakeHistoryTable";
import { useAccount } from "wagmi";

export function HomeView(): ReactElement {
  const router = useRouter();
  const { address: connectedAccount } = useAccount();

  return (
    <Page>
      <div className="flex flex-col gap-20 items-center">
        {connectedAccount ? (
          <div className="flex gap-4 flex-col items-center 2xl:flex-row 2xl:items-start ">
            <div className="">
              <StakeCard account={connectedAccount} />
            </div>
            <div className="flex-1">
              <StakeHistoryTable account={connectedAccount} />
            </div>
          </div>
        ) : (
          <Fragment>
            <div className="daisy-card w-96 bg-base-100 shadow-xl">
              <div className="daisy-card-body justify-center flex items-center gap-6">
                <h2 className="daisy-card-title">
                  Connect your wallet to continue
                </h2>
                <ConnectButton />
              </div>
            </div>
          </Fragment>
        )}
      </div>
    </Page>
  );
}
