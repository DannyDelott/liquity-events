import { BorrowInfo } from "liquity";
import meanBy from "lodash.meanby";
import sumBy from "lodash.sumby";
import { ONE_WEEK_IN_SECONDS } from "src/base/time";
import { useBorrowInfos } from "src/ui/borrow/useBorrowInfos";

// See: https://money.stackexchange.com/questions/154267/how-to-calculate-the-apr-on-an-investment
export function useStakingAPY() {
  const { data: borrowInfos, status: borrowInfosStatus } = useBorrowInfos();

  // TODO: Add Redemption infos for Eth
  // const { data: redemptionInfos, status: redemptionInfosStatus } =
  //   useRedemptionInfos();

  if (!borrowInfos) {
    return {
      status: borrowInfosStatus,
      apy: undefined,
    };
  }

  const now = Date.now() / 1000;
  const oneWeekAgo = now - ONE_WEEK_IN_SECONDS;
  const borrowInfosFromLast7Days = borrowInfos.data.filter(
    ({ timestamp }) => timestamp >= oneWeekAgo
  );

  const totalInterestLast7Days = getTotalInterestUSD(borrowInfosFromLast7Days);
  const meanLQTYStakedLast7Days = getMeanLQTYStaked(borrowInfosFromLast7Days);
  const meanLQTYPriceLast7Days = getMeanLQTYPrice(borrowInfosFromLast7Days);
  const principalValue = meanLQTYStakedLast7Days * meanLQTYPriceLast7Days;

  const apy = totalInterestLast7Days / (principalValue * (7 / 365));

  return {
    status: borrowInfosStatus,
    apy,
  };
}

function getMeanLQTYPrice(borrowInfos: BorrowInfo[]) {
  return meanBy(borrowInfos, ({ lqtyPrice }) => +lqtyPrice);
}
function getMeanLQTYStaked(borrowInfos: BorrowInfo[]) {
  return meanBy(borrowInfos, ({ totalLqtyStaked }) => +totalLqtyStaked);
}

function getTotalInterestUSD(borrowInfos: BorrowInfo[]) {
  return sumBy(borrowInfos, ({ lusdFee, lusdPrice }) => +lusdFee * +lusdPrice);
}
