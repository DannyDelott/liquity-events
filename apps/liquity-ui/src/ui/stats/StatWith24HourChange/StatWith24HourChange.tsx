import { formatEther, parseEther } from "ethers/lib/utils.js";
import classNames from "classnames";
import Skeleton from "react-loading-skeleton";
import { ReactElement, ReactNode } from "react";

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
  return (
    <div className="daisy-stat">
      <div className="daisy-stat-title text-neutral text-center">{label}</div>
      <div className="daisy-stat-value flex gap-2 justify-center">
        {icon}
        <Stat
          isLoading={isLoading}
          statValue={statValue}
          statValuePrecision={statValuePrecision}
        />
      </div>

      <Stat24HourChange
        isLoading={isLoading}
        statValue={statValue}
        yesterdayStatValue={yesterdayStatValue}
        statValuePrecision={statValuePrecision}
      />
    </div>
  );
}

function Stat24HourChange({
  isLoading,
  statValue,
  yesterdayStatValue,
  statValuePrecision,
}: {
  isLoading: boolean;
  statValue: string | undefined;
  yesterdayStatValue: string | undefined;
  statValuePrecision: number;
}): ReactElement {
  let gain24Hours = "";
  if (statValue && yesterdayStatValue) {
    gain24Hours = calculate24HourGains(
      statValue,
      yesterdayStatValue,
      statValuePrecision
    );
  }

  if (isLoading) {
    return <Skeleton />;
  }

  if (!yesterdayStatValue) {
    return <span />;
  }

  return (
    <div
      className={classNames(
        "daisy-stat-desc text-[darkgreen] mt-1 text-base font-semibold text-center",
        {
          "hidden md:block": +gain24Hours <= 0,
          "md:invisible": +gain24Hours <= 0,
        }
      )}
    >
      {+gain24Hours > 0 ? "+" : null}
      {gain24Hours} (24h change)
    </div>
  );
}

function Stat({
  isLoading,
  statValue,
  statValuePrecision,
}: {
  isLoading: boolean;
  statValue: string | undefined;
  statValuePrecision: number;
}): ReactElement {
  if (isLoading) {
    return <Skeleton />;
  }

  let statValueLabel = "-";
  if (statValue) {
    statValueLabel = (+statValue).toFixed(statValuePrecision);
  }

  return <span>{statValueLabel}</span>;
}

function calculate24HourGains(
  currentValue: string,
  yesterdayValue: string,
  precision: number
): string {
  const currentValueBN = parseEther(currentValue);
  const yesterdayValueBN = parseEther(yesterdayValue);
  const gains24HourBN = currentValueBN.sub(yesterdayValueBN);

  // Example time: If you claim $25 of gains yesterday and today your gains are
  // currently $0.35, then your 24-hour gains will be negative. In this case,
  // just show the current gains, ie: +0.35.
  if (gains24HourBN.isNegative()) {
    return (+currentValue).toFixed(precision);
  }

  const gains24Hour = formatEther(gains24HourBN);
  return (+gains24Hour).toFixed(precision);
}
