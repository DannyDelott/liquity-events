import { BigNumber, Event } from "ethers";
import { ReactElement } from "react";
import { formatEther } from "ethers/lib/utils.js";
import { formatLQTYLabel, formatPoolShare } from "../../base/format";
import { makeEtherscanBlockUrl, makeEtherscanTxUrl } from "../../etherscan";
import { useBlock } from "../../wagmi/useBlock";
import { useTotalLQTYStakedUpdatedEvents } from "../contracts/lqtyStaking";

interface StakeChangedTableRowProps {
  event: Event;
  prevEvent?: Event;
}

export function StakeChangedTableRow({
  event,
  prevEvent,
}: StakeChangedTableRowProps): ReactElement {
  const { data: block } = useBlock(event.blockNumber);
  const date = new Date((block?.timestamp || 0) * 1000);

  // The amount of LQTY the user has staked in this event
  const stakedLQTY: BigNumber = event.args?.[1] || BigNumber.from(0);
  const stakedLQTYLabel = formatLQTYLabel(stakedLQTY);

  // The amount of LQTY the user has staked in the previous event
  const prevStakedLQTY = prevEvent?.args?.[1] as BigNumber;
  const stakedLQTYDeltaLabel = formatLQTYLabel(
    stakedLQTY.sub(prevStakedLQTY || 0)
  );

  // The amount of LQTY staked in the system after this event
  const { data: totalLQTYStakedUpdatedEvent } = useTotalLQTYStakedUpdatedEvents(
    event.blockNumber,
    event.blockNumber
  );
  const totalLQTYStaked: BigNumber =
    totalLQTYStakedUpdatedEvent?.[0]?.args?.[0] || BigNumber.from(0);
  const totalLQTYStakedLabel = formatLQTYLabel(totalLQTYStaked);

  let poolShare = 0;
  let poolSharePercentLabel = "0%";
  if (stakedLQTY.gt(0) && totalLQTYStaked.gt(0)) {
    poolShare = +formatEther(stakedLQTY) / +formatEther(totalLQTYStaked);
    poolSharePercentLabel = formatPoolShare(poolShare);
  }

  return (
    <tr>
      {/* Block Number */}
      <td style={{ textAlign: "center", padding: "5px 20px" }}>
        <a href={makeEtherscanBlockUrl(event.blockNumber)}>
          {event.blockNumber}
        </a>
      </td>
      {/* Tx Hash */}
      <td style={{ textAlign: "center", padding: "5px 20px" }}>
        <a href={makeEtherscanTxUrl(event.transactionHash)}>
          {event.transactionHash.slice(0, 16)}...
        </a>
      </td>
      {/* Date */}
      <td style={{ textAlign: "center", padding: "5px 20px" }}>
        {date.toDateString()} @ {date.toLocaleTimeString()}
      </td>
      {/* Staked amount (LQTY) */}
      <td style={{ textAlign: "center", padding: "5px 20px" }}>
        {stakedLQTYLabel}{" "}
        {prevStakedLQTY ? (
          stakedLQTY.gt(prevStakedLQTY) ? (
            <span style={{ color: "green" }}>
              ({`+${stakedLQTYDeltaLabel}`})
            </span>
          ) : (
            <span style={{ color: "red" }}>({`${stakedLQTYDeltaLabel}`})</span>
          )
        ) : (
          <span style={{ color: "green" }}>({`+${stakedLQTYLabel}`})</span>
        )}
      </td>
      {/* Total LQTY staked in pool */}
      <td style={{ textAlign: "center", padding: "5px 20px" }}>
        {totalLQTYStakedLabel}
      </td>
      {/* Historical pool share */}
      <td style={{ textAlign: "center", padding: "5px 20px" }}>
        {poolSharePercentLabel}
      </td>
    </tr>
  );
}
