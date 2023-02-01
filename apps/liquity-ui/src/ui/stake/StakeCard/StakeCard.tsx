import { formatEther } from "ethers/lib/utils.js";
import { ReactElement } from "react";
import Skeleton from "react-loading-skeleton";
import { BLOCKS_PER_DAY } from "src/base/ethereum";
import { formatLQTYOrLUSDLabel } from "src/ui/base/format";
import { CryptoIcon, IconName, IconSize } from "src/ui/crypto/CryptoIcon";
import { DepositLQTYButton } from "src/ui/stake/DepositLQTYModal/DepositLQTYButton";
import { useLQTYStakedForAccount } from "src/ui/stake/useLQTYStakedForAccount";
import { usePendingETHGain } from "src/ui/stake/usePendingETHGain";
import { usePendingLUSDGain } from "src/ui/stake/usePendingLUSDGain";
import { useStakingAPY } from "src/ui/stake/useStakingAPY";
import { useTotalLQTYStaked } from "src/ui/stake/useTotalLQTYStaked";
import { WithdrawLQTYButton } from "src/ui/stake/WithdrawLQTYModal/WithdrawLQTYButton";
import { StatWith24HourChange } from "src/ui/stats/StatWith24HourChange/StatWith24HourChange";
import { useBlockNumber } from "wagmi";
import { ClaimRewardsButton } from "./ClaimRewardsButton";

interface StakeCardProps {
  account: string;
}

export function StakeCard({ account }: StakeCardProps): ReactElement {
  const { data: blockNumber } = useBlockNumber();
  const { data: lqtyStaked } = useLQTYStakedForAccount(account);
  const { data: totalLQTYStaked } = useTotalLQTYStaked();
  const { apy } = useStakingAPY();
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

  let poolShare = "";
  if (lqtyStaked && totalLQTYStaked) {
    poolShare = (
      (+formatEther(lqtyStaked) / +formatEther(totalLQTYStaked)) *
      100
    ).toFixed(4);
  }

  const formattedStakedBalance = formatLQTYOrLUSDLabel(lqtyStaked);
  const formattedTotalStaked = formatLQTYOrLUSDLabel(totalLQTYStaked);

  return (
    <div className="daisy-card bg-base-100 shadow-xl w-full max-w-[350px] md:min-w-[400px] md:max-w-[500px]">
      <figure className="bg-[#D2D6DC14] border-b-2 flex w-full">
        <div className="mt-8 flex flex-col gap-8 w-full">
          <div className="flex flex-col justify-center items-center w-full md:w-96 text-center m-auto">
            <h2 className="text-2xl font-bold mb-1">LQTY Staking Pool</h2>
            <span className="px-6 md:px-12">
              Earn LUSD and ETH whenever users borrow or pay back their LUSD
              loans.
            </span>
          </div>
          <div className="w-full flex justify-between mb-4 px-8">
            <div>
              APR (7d Average)
              <div className="font-bold flex gap-2">
                {apy ? `${(apy * 100).toFixed(2)}%` : <Skeleton width={64} />}
              </div>
            </div>
            <div>
              Total LQTY Staked
              <div className="font-bold flex gap-1">
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

      <div className="daisy-card-body items-center gap-6">
        {lqtyStaked ? (
          <div className="daisy-stats">
            <div className="daisy-stat pt-0 ">
              <div className="daisy-stat-title text-neutral-focus text-center ">
                Staked Balance
              </div>
              <div className="daisy-stat-value flex gap-2 justify-center">
                <CryptoIcon
                  icon={IconName.LQTY}
                  size={IconSize.SMALL}
                  className={"flex-shrink-0"}
                />
                {formattedStakedBalance}
              </div>
              <div className="daisy-stat-desc text-neutral mt-1 text-base">
                {poolShare}% of the LQTY Staking Pool
              </div>

              <div className="daisy-stat-actions gap-2 flex mt-2 justify-center">
                <DepositLQTYButton />
                <WithdrawLQTYButton />
              </div>
            </div>
          </div>
        ) : null}

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
      </div>
    </div>
  );
}
