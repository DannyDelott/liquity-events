import { HOME_ROUTE } from "src/ui/home/routes";
import { STATS_ROUTE } from "src/ui/stats/routes";
import Link from "next/link";
import classNames from "classnames";
import { useRouter } from "next/router";
import { HistoryIcon, HomeIcon, MenuIcon, StatsIcon } from "src/ui/base/icons";
import { useIsTailwindSmallScreen } from "src/ui/base/tailwindBreakpoints";
import { useAccountModal, useConnectModal } from "@rainbow-me/rainbowkit";
import { useAccount } from "wagmi";
import { formatAddress } from "src/ui/base/format";
import { HISTORY_ROUTE } from "src/ui/history/routes";

export function Navigation() {
  const { pathname } = useRouter();
  const isSmallScreen = useIsTailwindSmallScreen();
  const { openConnectModal } = useConnectModal();
  const { openAccountModal } = useAccountModal();
  const { address: account } = useAccount();
  if (isSmallScreen) {
    return (
      <div className="daisy-dropdown daisy-dropdown-bottom daisy-dropdown-end">
        <label tabIndex={0} className="daisy-btn daisy-btn-ghost">
          <MenuIcon height={20} width={20} />
        </label>
        <ul
          tabIndex={0}
          className="daisy-menu daisy-dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
        >
          <li>
            <Link href={HOME_ROUTE}>
              <HomeIcon height={20} width={20} />
              Home
            </Link>
          </li>
          <li>
            <Link href={HISTORY_ROUTE}>
              <HistoryIcon height={20} width={20} />
              History
            </Link>
          </li>
          <li>
            <Link href={STATS_ROUTE}>
              <StatsIcon height={20} width={20} />
              Stats
            </Link>
          </li>
          {account ? (
            <li className="daisy-menu-title mt-2">
              <span>Connected to:</span>
            </li>
          ) : null}
          <li>
            <button
              className="daisy-btn daisy-btn-ghost"
              onClick={account ? openAccountModal : openConnectModal}
            >
              {account ? formatAddress(account) : "Connect Wallet"}
            </button>
          </li>
        </ul>
      </div>
    );
  }

  return (
    <div className="daisy-tabs">
      <Link
        href={HOME_ROUTE}
        className={classNames(
          "daisy-tab gap-1",
          isSmallScreen ? "daisy-tab-sm" : "daisy-tab-lg",
          {
            ["daisy-tab-active"]: pathname === HOME_ROUTE,
          }
        )}
      >
        <HomeIcon height={20} width={20} />
        Home
      </Link>
      <Link
        href={HISTORY_ROUTE}
        className={classNames(
          "daisy-tab gap-1",
          isSmallScreen ? "daisy-tab-sm" : "daisy-tab-lg",
          { ["daisy-tab-active"]: pathname === HISTORY_ROUTE }
        )}
      >
        <HistoryIcon height={20} width={20} />
        History
      </Link>
      <Link
        href={STATS_ROUTE}
        className={classNames(
          "daisy-tab gap-1",
          isSmallScreen ? "daisy-tab-sm" : "daisy-tab-lg",
          { ["daisy-tab-active"]: pathname === STATS_ROUTE }
        )}
      >
        <StatsIcon height={20} width={20} />
        Stats
      </Link>
    </div>
  );
}
