import { Fragment, ReactElement } from "react";
import { LQTY_TOKEN_ADDRESS, LUSD_TOKEN_ADDRESS } from "liquity";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useRouter } from "next/router";
import { CryptoIcon, IconName, IconSize } from "src/ui/crypto/CryptoIcon";
import { useTokenBalance } from "src/wallet/useTokenBalance";
import { useAccount } from "wagmi";
import { formatLQTYOrLUSDLabel } from "src/ui/base/format";
import { PriceWidget } from "src/ui/price/PriceWidget";
import { useIsTailwindSmallScreen } from "src/ui/base/tailwindBreakpoints";
import { Navigation } from "src/ui/navigation/Navigation";
import { HeaderTitle } from "./HeaderTitle";

export function Header(): ReactElement {
  const { address } = useAccount();
  const { data: lusdBalance } = useTokenBalance(address, LUSD_TOKEN_ADDRESS);
  const { data: lqtyBalance } = useTokenBalance(address, LQTY_TOKEN_ADDRESS);
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
        <div className="gap-8 hidden 2xl:flex">
          {lusdBalance ? (
            <div className="flex gap-1.5 items-center text-lg">
              <CryptoIcon icon={IconName.LUSD} size={IconSize.SMALL} />
              <span>{formatLQTYOrLUSDLabel(lusdBalance.formatted)}</span>
            </div>
          ) : null}
          {lqtyBalance ? (
            <div className="flex gap-1.5 items-center text-lg">
              <CryptoIcon icon={IconName.LQTY} size={IconSize.SMALL} />
              <span>{formatLQTYOrLUSDLabel(lqtyBalance.formatted)}</span>
            </div>
          ) : null}
        </div>

        <ConnectButton accountStatus={"full"} showBalance={false} />
      </div>
    </div>
  );
}
