import { BorrowInfo, RedemptionInfo } from "liquity";
import meanBy from "lodash.meanby";
import sumBy from "lodash.sumby";
import { ONE_DAY_IN_SECONDS, ONE_WEEK_IN_SECONDS } from "src/base/time";
import { useBorrowInfos } from "src/ui/borrow/useBorrowInfos";
import { useRedemptionInfos } from "src/ui/redeem/useRedemptionInfos";

// See: https://money.stackexchange.com/questions/154267/how-to-calculate-the-apr-on-an-investment
export function useStakingAPY(numDays: number) {
  const { data: borrowInfos, status: borrowInfosStatus } = useBorrowInfos();
  const { data: redemptionInfos, status: redemptionInfosStatus } =
    useRedemptionInfos();

  if (!borrowInfos || !redemptionInfos) {
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
  const redemptionInfosFromLastNumDays = redemptionInfos.data.filter(
    ({ timestamp }) => timestamp >= numDaysAgo
  );

  const totalInterestFromBorrowInfos = getTotalInterestFromBorrowInfos(
    borrowInfosFromLastNumDays
  );
  const totalInterestFromRedemptionInfos = getTotalInterestFromRedemptionInfos(
    redemptionInfosFromLastNumDays
  );

  const combinedInfos = [
    ...borrowInfosFromLastNumDays,
    ...redemptionInfosFromLastNumDays,
  ];
  const totalInterest =
    totalInterestFromBorrowInfos + totalInterestFromRedemptionInfos;
  const meanLQTYStakedLastNumDays = getMeanLQTYStaked(combinedInfos);
  const meanLQTYPriceLastNumDays = getMeanLQTYPrice(combinedInfos);
  const principalValue = meanLQTYStakedLastNumDays * meanLQTYPriceLastNumDays;

  const apy = totalInterest / (principalValue * (numDays / 365));

  return {
    status: borrowInfosStatus,
    apy,
  };
}

function getMeanLQTYPrice(infos: (BorrowInfo | RedemptionInfo)[]) {
  return meanBy(infos, ({ lqtyPrice }) => +lqtyPrice);
}
function getMeanLQTYStaked(infos: (BorrowInfo | RedemptionInfo)[]) {
  return meanBy(infos, ({ totalLqtyStaked }) => +totalLqtyStaked);
}

function getTotalInterestFromBorrowInfos(borrowInfos: BorrowInfo[]) {
  return sumBy(borrowInfos, ({ lusdFee, lusdPrice }) => +lusdFee * +lusdPrice);
}

function getTotalInterestFromRedemptionInfos(
  redemptionInfos: RedemptionInfo[]
) {
  return sumBy(redemptionInfos, ({ ethFee, ethPrice }) => +ethFee * +ethPrice);
}
