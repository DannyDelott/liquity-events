import { Fragment, ReactElement } from "react";
import { LQTY_TOKEN_ADDRESS, LUSD_TOKEN_ADDRESS } from "liquity";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useRouter } from "next/router";
import { CryptoIcon, IconName, IconSize } from "src/ui/crypto/CryptoIcon";
import { useTokenBalance } from "src/wallet/useTokenBalance";
import { useAccount } from "wagmi";
import { formatLQTYLabel } from "src/ui/base/format";
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
      <Fragment>
        <div className="daisy-navbar px-4 bg-white border-b-[1px]">
          <div className="flex w-full justify-between">
            <HeaderTitle />
            <Navigation />
          </div>
        </div>
        <div className="daisy-navbar bg-slate-50 shadow">
          <div className="flex gap-8 justify-center w-full">
            <PriceWidget tokenAddress={LUSD_TOKEN_ADDRESS} />
            <PriceWidget tokenAddress={LQTY_TOKEN_ADDRESS} />
          </div>
        </div>
      </Fragment>
    );
  }
  return (
    <div className="daisy-navbar px-8 bg-white shadow">
      <div className="daisy-navbar-start lg:gap-14">
        <HeaderTitle />
        <div className="flex gap-8">
          <PriceWidget tokenAddress={LUSD_TOKEN_ADDRESS} />
          <PriceWidget tokenAddress={LQTY_TOKEN_ADDRESS} />
        </div>
      </div>
      <div className="daisy-navbar-center">
        <Navigation />
      </div>
      <div className="daisy-navbar-end gap-4">
        <div className="flex gap-8">
          {lusdBalance ? (
            <div className="flex gap-1.5 items-center text-lg">
              <CryptoIcon icon={IconName.LUSD} size={IconSize.SMALL} />
              <span>{lusdBalance.formatted}</span>
            </div>
          ) : null}
          {lqtyBalance ? (
            <div className="flex gap-1.5 items-center text-lg">
              <CryptoIcon icon={IconName.LQTY} size={IconSize.SMALL} />
              <span>{formatLQTYLabel(lqtyBalance.formatted)}</span>
            </div>
          ) : null}
        </div>

        <ConnectButton accountStatus={"full"} showBalance={false} />
      </div>
    </div>
  );
}
