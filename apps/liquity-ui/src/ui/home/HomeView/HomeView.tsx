import { useRouter } from "next/router";
import { ReactElement, useEffect } from "react";
import { Page } from "src/ui/base/Page/Page";
import { StakeCard } from "src/ui/stake/StakeCard/StakeCard";
import { useAccount } from "wagmi";

export function HomeView(): ReactElement {
  useSetConnectedAccountInRoute();
  const account = useAccountFromRoute();

  return (
    <Page>
      <div className="flex flex-col gap-20 items-center">
        <div className="flex gap-4 flex-col items-center 2xl:flex-row 2xl:items-start ">
          <StakeCard account={account} />
        </div>
      </div>
    </Page>
  );
}

function useSetConnectedAccountInRoute() {
  const { address: account } = useAccount();
  const router = useRouter();
  const { pathname, replace } = router;
  useEffect(() => {
    // Nothing to sync if there's no connected account
    if (!account) {
      return;
    }

    // Don't replace the current account in the route (users might be viewing
    // other wallets), but if there isn't one in the route yet we should sync
    // the connected account.
    if (!router.query.account) {
      replace({ query: { account } });
    }
  }, [account, pathname, replace, router, router.query]);
}

function useAccountFromRoute() {
  const { query } = useRouter();
  return query.account as string | undefined;
}
