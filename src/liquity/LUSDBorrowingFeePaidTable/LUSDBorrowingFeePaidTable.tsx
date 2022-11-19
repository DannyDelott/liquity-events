import { formatEther } from "@ethersproject/units";
import { BigNumber, Event } from "ethers";
import { Block } from "@ethersproject/abstract-provider";
import { CSSProperties, useState } from "react";
import { useRealtimeLUSDBorrowingFeePaidEvents } from "../contracts/borrowerOperations";
import { useLiquityStaking } from "../contracts/lqtyStaking";
import {
  makeEtherscanAddressUrl,
  makeEtherscanBlockUrl,
  makeEtherscanTxUrl,
} from "../../etherscan";
import { formatLUSDLabel, formatPoolShare } from "../../base/format";

interface BorrowingFeeInfo {
  borrower: `0x${string}`;
  /**
   * The fee the borrower paid
   */
  lusdFee: BigNumber;
  /**
   * Pool share at the time the LUSDBorrowingFeePaid event was emitted
   */
  poolShare: number;
  /**
   * Portion of the lusd fee that was earned
   */
  earnedPortion: number;

  /**
   * Unix timestamp in seconds when the event was emitted
   */
  timestamp: number;

  /**
   * Date object when the event was emitted
   */
  date: Date;

  /**
   * The LUSDBorrowingFeePaid event itself
   */
  event: Event;

  /**
   * The block the event took place in
   */
  block: Block;
}
interface LUSDBorrowingFeePaidTableProps {
  account: `0x${string}`;
  onLUSDBorrowingFeePaid: (borrowingFeeInfo: BorrowingFeeInfo) => void;
}

const thStyle = {
  padding: "5px 20px",
};
const tdStyle: CSSProperties = { textAlign: "center", padding: "5px 20px" };
export function LUSDBorrowingFeePaidTable({
  account,
  onLUSDBorrowingFeePaid,
}: LUSDBorrowingFeePaidTableProps) {
  const borrowingFeePaidInfos = useRealTimeBorrowingFeePaidInfos(
    account,
    onLUSDBorrowingFeePaid
  );
  const borrowingFeePaidInfosWithNonZeroEarnings = borrowingFeePaidInfos.filter(
    ({ earnedPortion }) => earnedPortion > 0
  );

  return (
    <table style={{ width: "75%" }}>
      <caption
        style={{
          paddingBottom: 10,
        }}
      >
        <p>
          There has been a total of{" "}
          <strong>{borrowingFeePaidInfos.length}</strong> LUSDBorrowingFeePaid
          events since this page loaded.
        </p>
        <p>
          Of this total, there are{" "}
          <strong>{borrowingFeePaidInfosWithNonZeroEarnings.length}</strong>{" "}
          events with non-zero earnings.
        </p>
      </caption>
      <thead>
        <tr>
          <th style={thStyle}>Block</th>
          <th style={thStyle}>Tx</th>
          <th style={thStyle}>Date</th>
          <th style={thStyle}>Borrower</th>
          <th style={thStyle}>Fee amount paid (LUSD)</th>
          <th style={thStyle}>Portion earned (LUSD)</th>
        </tr>
      </thead>
      <tbody>
        {borrowingFeePaidInfosWithNonZeroEarnings.map(
          ({ lusdFee, date, event, borrower, earnedPortion }) => {
            return (
              <tr key={event.transactionHash}>
                {/* Block Number */}
                <td style={tdStyle}>
                  <a
                    target="_blank"
                    href={makeEtherscanBlockUrl(event.blockNumber)}
                  >
                    {event.blockNumber}
                  </a>
                </td>

                {/* Tx Hash */}
                <td style={tdStyle}>
                  <a
                    target="_blank"
                    href={makeEtherscanTxUrl(event.transactionHash)}
                  >
                    {event.transactionHash.slice(0, 16)}...
                  </a>
                </td>

                {/* Date */}
                <td style={tdStyle}>
                  {date.toDateString()} @ {date.toLocaleTimeString()}
                </td>

                {/* Borrower */}
                <td style={tdStyle}>
                  <a target="_blank" href={makeEtherscanAddressUrl(borrower)}>
                    {borrower}
                  </a>
                </td>

                {/* Fee amount paid (LUSD)*/}
                <td style={tdStyle}>{formatLUSDLabel(lusdFee)}</td>

                {/* Portion earned */}
                <td style={tdStyle}>{earnedPortion.toFixed(6)}</td>
              </tr>
            );
          }
        )}
      </tbody>
    </table>
  );
}

function useRealTimeBorrowingFeePaidInfos(
  account: `0x${string}`,
  onLUSDBorrowingFeePaid: (borrowingFeeInfo: BorrowingFeeInfo) => void
) {
  const [borrowingFeePaidInfos, setBorrowingFeePaidInfos] = useState<
    BorrowingFeeInfo[]
  >([]);

  const lqtyStaking = useLiquityStaking();

  useRealtimeLUSDBorrowingFeePaidEvents(async (borrower, lusdFee, event) => {
    if (!lqtyStaking) {
      return;
    }

    const stakedLQTY = await lqtyStaking.stakes(account);
    const totalStaked = await lqtyStaking.totalLQTYStaked();
    const block = await event.getBlock();
    const timestamp = block.timestamp;
    const date = new Date(block.timestamp * 1000);
    const poolShare = +formatEther(stakedLQTY) / +formatEther(totalStaked);
    const earnedPortion = +formatEther(lusdFee) * poolShare;
    const borrowingFeePaidInfo: BorrowingFeeInfo = {
      borrower,
      block,
      timestamp,
      date,
      lusdFee,
      poolShare,
      earnedPortion,
      event,
    };

    setBorrowingFeePaidInfos((prevState) => [
      ...prevState,
      borrowingFeePaidInfo,
    ]);
    onLUSDBorrowingFeePaid(borrowingFeePaidInfo);
  });
  return borrowingFeePaidInfos;
}
