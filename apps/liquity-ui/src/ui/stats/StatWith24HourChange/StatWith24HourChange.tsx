import { formatEther, parseEther } from "ethers/lib/utils.js";
import classNames from "classnames";
import Skeleton from "react-loading-skeleton";
import { ReactNode } from "react";

export interface StatWith24HourChangeProps {
  label: string;
  icon: ReactNode;
  statValue: string | undefined;
  statValuePrecision: number;
  yesterdayStatValue: string | undefined;
  isLoading: boolean;
}
export function StatWith24HourChange({
  label,
  icon,
  statValue,
  yesterdayStatValue,
  statValuePrecision,
  isLoading,
}: StatWith24HourChangeProps) {
  let gain24Hours = "";
  if (statValue && yesterdayStatValue) {
    gain24Hours = (+formatEther(
      parseEther(statValue).sub(parseEther(yesterdayStatValue))
    )).toFixed(statValuePrecision);
  }

  return (
    <div className="daisy-stat">
      <div className="daisy-stat-title text-neutral">{label}</div>
      <div className="daisy-stat-value flex gap-2 items-center">
        {icon}
        {isLoading ? (
          <Skeleton />
        ) : statValue ? (
          (+statValue).toFixed(statValuePrecision)
        ) : (
          "-"
        )}
      </div>
      {isLoading ? (
        <Skeleton />
      ) : yesterdayStatValue ? (
        <div
          className={classNames(
            "daisy-stat-desc text-[darkgreen] mt-1 text-base font-semibold",
            {
              invisible: +gain24Hours === 0,
            }
          )}
        >
          {+gain24Hours > 0 ? "+" : null}
          {gain24Hours} (24h change)
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
