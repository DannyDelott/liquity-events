import { StakeChangedTableRow } from "./StakeChangedTableRow";
import { Event } from "ethers";
import { CSSProperties } from "react";

interface StakeChangedTableProps {
  stakeChangedEvents: Event[];
}

const thStyle: CSSProperties = {
  padding: "5px 20px",
};
export function StakeChangedTable({
  stakeChangedEvents,
}: StakeChangedTableProps) {
  return (
    <table style={{ width: "75%" }}>
      <caption
        style={{
          paddingBottom: 10,
        }}
      >
        The wallet has <strong>{stakeChangedEvents.length}</strong> StakeChanged
        events.
      </caption>
      <thead>
        <tr>
          <th style={thStyle}>Block</th>
          <th style={thStyle}>Tx</th>
          <th style={thStyle}>Date</th>
          <th style={thStyle}>Staked amount (LQTY)</th>
          <th style={thStyle}>Historical total staked (LQTY)</th>
          <th style={thStyle}>Historical pool share</th>
        </tr>
      </thead>
      <tbody>
        {stakeChangedEvents.map((event, i) => (
          <StakeChangedTableRow
            key={event.blockNumber}
            event={event}
            prevEvent={stakeChangedEvents[i - 1]}
          />
        ))}
      </tbody>
    </table>
  );
}
