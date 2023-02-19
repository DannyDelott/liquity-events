import { formatEther } from "ethers/lib/utils.js";
import { Fragment, ReactElement } from "react";
import Skeleton from "react-loading-skeleton";
import { BLOCKS_PER_DAY } from "src/base/ethereum";
import {
  formatLQTYOrLUSDLabel,
  formatWholeNumberLabel,
} from "src/ui/base/format";
import { CryptoIcon, IconName, IconSize } from "src/ui/crypto/CryptoIcon";
import { ClaimRewardsButton } from "src/ui/stake/StakeCard/ClaimRewardsButton";
import { StakedBalanceStat } from "src/ui/stake/StakedBalanceStat/StakedBalanceStat";
import { usePendingETHGain } from "src/ui/stake/usePendingETHGain";
import { usePendingLUSDGain } from "src/ui/stake/usePendingLUSDGain";
import { useStakingAPY } from "src/ui/stake/useStakingAPY";
import { useTotalLQTYStaked } from "src/ui/stake/useTotalLQTYStaked";
import { StatWith24HourChange } from "src/ui/stats/StatWith24HourChange/StatWith24HourChange";
import { ConnectButton } from "src/ui/wallet/ConnectButton";
import { useBlockNumber } from "wagmi";
import { ConnectOrPasteAddressForm } from "./ConnectOrPasteAddressForm";

interface StakeCardProps {
  account: string | undefined;
}

export function StakeCard({ account }: StakeCardProps): ReactElement {
  const { data: blockNumber } = useBlockNumber();
  const { data: totalLQTYStaked } = useTotalLQTYStaked();
  const { apy } = useStakingAPY(7);
  const { data: currentPendingETHGain, status: currentPendingETHGainStatus } =
    usePendingETHGain(account);
  const {
    data: yesterdayPendingETHGain,
    status: yesterdayPendingETHGainStatus,
  } = usePendingETHGain(
    account,
    // safe to cast because enabled is set
    (blockNumber as number) - BLOCKS_PER_DAY,
    { enabled: !!blockNumber, keepPreviousData: true }
  );

  const { data: currentPendingLUSDGain, status: currentPendingLUSDGainStatus } =
    usePendingLUSDGain(account);
  const {
    data: yesterdayPendingLUSDGain,
    status: yesterdayPendingLUSDGainStatus,
  } = usePendingLUSDGain(
    account,
    // safe to cast because enabled is set
    (blockNumber as number) - BLOCKS_PER_DAY,
    { enabled: !!blockNumber, keepPreviousData: true }
  );

  const formattedTotalStaked = formatWholeNumberLabel(totalLQTYStaked);

  return (
    <div className="daisy-card bg-base-100 shadow-xl shadow-card-shadow w-full max-w-[350px] md:min-w-[400px] md:max-w-[500px]">
      <figure className="bg-[#D2D6DC14] border-b-2 flex w-full">
        <div className="mt-8 flex flex-col gap-3 md:gap-8 w-full">
          <div className="flex flex-col justify-center items-center w-full md:w-96 text-center m-auto">
            <h2 className="text-2xl font-bold mb-1">LQTY Staking Pool</h2>
            <span className="px-6 md:px-12 hidden md:inline">
              Earn LUSD and ETH whenever users borrow or pay back their LUSD
              loans.
            </span>
          </div>
          <div className="w-full flex justify-between mb-4 px-8">
            <div>
              APR (7d)
              <div className="font-bold flex gap-2">
                {apy ? `${(apy * 100).toFixed(2)}%` : <Skeleton width={64} />}
              </div>
            </div>
            <div>
              Total LQTY Staked
              <div className="font-bold flex gap-1 justify-end">
                <CryptoIcon
                  icon={IconName.LQTY}
                  size={IconSize.EXTRA_SMALL}
                  className={"flex-shrink-0"}
                />
                {formattedTotalStaked}
              </div>
            </div>
          </div>
        </div>
      </figure>

      <div className="daisy-card-body items-center md:gap-6">
        {account ? (
          <Fragment>
            <StakedBalanceStat account={account} />

            <div className="flex flex-col md:gap-4">
              <div className="daisy-stats daisy-stats-vertical md:daisy-stats-horizontal">
                <StatWith24HourChange
                  label="Pending LUSD Gain"
                  icon={
                    <CryptoIcon
                      icon={IconName.LUSD}
                      size={IconSize.SMALL}
                      className={"flex-shrink-0"}
                    />
                  }
                  statValue={
                    currentPendingLUSDGain
                      ? formatEther(currentPendingLUSDGain)
                      : undefined
                  }
                  yesterdayStatValue={
                    yesterdayPendingLUSDGain
                      ? formatEther(yesterdayPendingLUSDGain)
                      : undefined
                  }
                  statValuePrecision={2}
                  isLoading={[
                    currentPendingLUSDGainStatus,
                    yesterdayPendingLUSDGainStatus,
                  ].includes("loading")}
                />

                <StatWith24HourChange
                  label="Pending ETH Gain"
                  icon={
                    <CryptoIcon
                      icon={IconName.ETH}
                      size={IconSize.EXTRA_SMALL}
                      className={"flex-shrink-0"}
                    />
                  }
                  statValue={
                    currentPendingETHGain
                      ? formatEther(currentPendingETHGain)
                      : undefined
                  }
                  yesterdayStatValue={
                    yesterdayPendingETHGain
                      ? formatEther(yesterdayPendingETHGain)
                      : undefined
                  }
                  statValuePrecision={4}
                  isLoading={[
                    currentPendingETHGainStatus,
                    yesterdayPendingETHGainStatus,
                  ].includes("loading")}
                />
              </div>
              <ClaimRewardsButton account={account} />
            </div>
          </Fragment>
        ) : (
          <ConnectOrPasteAddressForm />
        )}
      </div>
    </div>
  );
}
