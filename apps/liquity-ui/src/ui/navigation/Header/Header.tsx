import { ReactElement } from "react";
import { LQTY_TOKEN_ADDRESS, LUSD_TOKEN_ADDRESS } from "liquity";
import { useAccount } from "wagmi";
import { PriceWidget } from "src/ui/price/PriceWidget";
import { useIsTailwindSmallScreen } from "src/ui/base/tailwindBreakpoints";
import { Navigation } from "src/ui/navigation/Navigation";
import { HeaderTitle } from "./HeaderTitle";
import { ConnectButton } from "src/ui/wallet/ConnectButton";

export function Header(): ReactElement {
  const { address } = useAccount();
  const isSmallScreen = useIsTailwindSmallScreen();

  // small screens have a sub nav
  if (isSmallScreen) {
    return (
      <div className="daisy-navbar px-4 bg-white shadow">
        <div className="flex w-full justify-between">
          <HeaderTitle />
          <Navigation />
        </div>
      </div>
    );
  }
  return (
    <div className="daisy-navbar px-8 bg-white shadow">
      <div className="daisy-navbar-start lg:gap-14">
        <HeaderTitle />
        <div className="gap-8 hidden 2xl:flex">
          <PriceWidget tokenAddress={LUSD_TOKEN_ADDRESS} />
          <PriceWidget tokenAddress={LQTY_TOKEN_ADDRESS} />
        </div>
      </div>
      <div className="daisy-navbar-center">
        <Navigation />
      </div>
      <div className="daisy-navbar-end gap-4">
        <ConnectButton />
      </div>
    </div>
  );
}
