import { BorrowInfo } from "liquity";
import meanBy from "lodash.meanby";
import sumBy from "lodash.sumby";
import { ONE_DAY_IN_SECONDS, ONE_WEEK_IN_SECONDS } from "src/base/time";
import { useBorrowInfos } from "src/ui/borrow/useBorrowInfos";

// See: https://money.stackexchange.com/questions/154267/how-to-calculate-the-apr-on-an-investment
export function useStakingAPY(numDays: number) {
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
  const numDaysAgo = now - numDays * ONE_DAY_IN_SECONDS;
  const borrowInfosFromLastNumDays = borrowInfos.data.filter(
    ({ timestamp }) => timestamp >= numDaysAgo
  );

  const totalInterestLastNumDays = getTotalInterestUSD(
    borrowInfosFromLastNumDays
  );
  const meanLQTYStakedLastNumDays = getMeanLQTYStaked(
    borrowInfosFromLastNumDays
  );
  const meanLQTYPriceLastNumDays = getMeanLQTYPrice(borrowInfosFromLastNumDays);
  const principalValue = meanLQTYStakedLastNumDays * meanLQTYPriceLastNumDays;

  const apy = totalInterestLastNumDays / (principalValue * (numDays / 365));

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
