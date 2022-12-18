import uniqBy from "lodash.uniqby";
import { useBorrowInfosJson } from "src/ui/borrow/useBorrowInfos";
import { useTotalLQTYStaked } from "src/ui/stake/useTotalLQTYStaked";

export function BorrowView() {
  const { data: borrowInfos } = useBorrowInfosJson();
  const { data: totalLQTYStaked } = useTotalLQTYStaked();

  const totalFeesPaid = borrowInfos?.data.reduce((sum, currentEvent) => {
    return sum + Number(currentEvent.lusdFeePaid);
  }, 0);

  const uniqueBorrowers = uniqBy(
    borrowInfos?.data,
    (borrowInfo) => borrowInfo.borrower
  ).length;

  return (
    <div>
      <div className="flex justify-center">
        <div className="daisy-stats daisy-stats-vertical lg:daisy-stats-horizontal shadow">
          <div className="daisy-stat">
            <div className="daisy-stat-title">Total Borrowing Fees Paid</div>
            <div className="daisy-stat-value">
              {Number(totalFeesPaid?.toFixed()).toLocaleString()}
            </div>
          </div>

          <div className="daisy-stat">
            <div className="daisy-stat-title">Unique Borrowers</div>
            <div className="daisy-stat-value">
              {uniqueBorrowers.toLocaleString()}
            </div>
          </div>

          <div className="daisy-stat">
            <div className="daisy-stat-title">Total LQTY Staked</div>
            <div className="daisy-stat-value">{totalLQTYStaked}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
