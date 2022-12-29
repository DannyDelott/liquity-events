import { ReactElement } from "react";
import { HOME_ROUTE } from "src/ui/home/routes";
import { STATS_ROUTE } from "src/ui/stats/routes";
import { useTokenPrice } from "src/ui/price/useTokenPrice";
import { LQTY_TOKEN_ADDRESS, LUSD_TOKEN_ADDRESS } from "liquity";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import Link from "next/link";
import { useRouter } from "next/router";
import classNames from "classnames";
import { CryptoIcon, IconName, IconSize } from "src/ui/base/Page/CryptoIcon";
import { useTokenBalance } from "src/wallet/useTokenBalance";
import { useAccount } from "wagmi";
import { formatLQTYLabel } from "src/ui/base/format";

export function Navigation(): ReactElement {
  const { pathname } = useRouter();
  const { address } = useAccount();
  const { data: lqtyPrice } = useTokenPrice(LQTY_TOKEN_ADDRESS);
  const { data: lusdPrice } = useTokenPrice(LUSD_TOKEN_ADDRESS);
  const { data: lusdBalance } = useTokenBalance(address, LUSD_TOKEN_ADDRESS);
  const { data: lqtyBalance } = useTokenBalance(address, LQTY_TOKEN_ADDRESS);
  return (
    <div className="daisy-navbar px-8 bg-white shadow">
      <div className="daisy-navbar-start gap-14">
        <span className="text-2xl font-bold">Liquity Events</span>
        <div className="flex gap-8">
          <div className="flex gap-1.5 items-center text-lg">
            <CryptoIcon icon={IconName.LUSD} size={IconSize.SMALL} />
            <span>${lusdPrice?.price.toFixed(2)}</span>
          </div>
          <div className="flex gap-1.5 items-center text-lg">
            <CryptoIcon icon={IconName.LQTY} size={IconSize.SMALL} />
            <span>${lqtyPrice?.price.toFixed(2)}</span>
          </div>
        </div>
      </div>
      <div className="daisy-navbar-center">
        <div className="daisy-tabs">
          <Link
            href={HOME_ROUTE}
            className={classNames("daisy-tab daisy-tab-lg gap-1", {
              ["daisy-tab-active"]: pathname === HOME_ROUTE,
            })}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              />
            </svg>
            Home
          </Link>
          <Link
            href={STATS_ROUTE}
            className={classNames("daisy-tab daisy-tab-lg gap-1", {
              ["daisy-tab-active"]: pathname === STATS_ROUTE,
            })}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
              />
            </svg>
            Stats
          </Link>
        </div>
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
