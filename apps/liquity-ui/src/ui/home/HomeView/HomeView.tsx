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
    if (!router.query.account) {
      replace({ query: { account } });
    }
  }, [account, pathname, replace, router, router.query]);
}

function useAccountFromRoute() {
  const { query } = useRouter();
  return query.account as string | undefined;
}
