import { BorrowInfo } from "liquity";
import sumBy from "lodash.sumby";
import {
  ONE_DAY_IN_MILLISECONDS,
  ONE_WEEK_IN_MILLISECONDS,
} from "src/base/time";
import { useBorrowInfos } from "src/ui/borrow/useBorrowInfos";

export function useStakingAPY() {
  const { data: borrowInfos, status } = useBorrowInfos();

  if (!borrowInfos) {
    return {
      status,
      apy: undefined,
    };
  }

  const now = Date.now();
  const oneWeekAgo = now - ONE_WEEK_IN_MILLISECONDS;
  const borrowInfosFromLast7Days = borrowInfos.data.filter(
    ({ timestamp }) => timestamp > oneWeekAgo
  );

  const oneDayAgo = now - ONE_DAY_IN_MILLISECONDS;
  const borrowInfosYesterday = borrowInfosFromLast7Days.filter(
    ({ timestamp }) => timestamp > oneDayAgo
  );
  const totalValueOfInterestYesterday = getTotalLUSDFees(borrowInfosYesterday);

  const twoDaysAgo = now - ONE_DAY_IN_MILLISECONDS * 2;
  const borrowInfosTwoDaysAgo = borrowInfosFromLast7Days.filter(
    ({ timestamp }) => timestamp > twoDaysAgo && timestamp < oneDayAgo
  );

  const threeDaysAgo = now - ONE_DAY_IN_MILLISECONDS * 3;
  const borrowInfosThreeDaysAgo = borrowInfosFromLast7Days.filter(
    ({ timestamp }) => timestamp > threeDaysAgo && timestamp < twoDaysAgo
  );

  const fourDaysAgo = now - ONE_DAY_IN_MILLISECONDS * 4;
  const borrowInfosFourDaysAgo = borrowInfosFromLast7Days.filter(
    ({ timestamp }) => timestamp > fourDaysAgo && timestamp < threeDaysAgo
  );

  const fiveDaysAgo = now - ONE_DAY_IN_MILLISECONDS * 5;
  const borrowInfosFiveDaysAgo = borrowInfosFromLast7Days.filter(
    ({ timestamp }) => timestamp > fiveDaysAgo && timestamp < fourDaysAgo
  );

  const sixDaysAgo = now - ONE_DAY_IN_MILLISECONDS * 6;
  const borrowInfosSixDaysAgo = borrowInfosFromLast7Days.filter(
    ({ timestamp }) => timestamp > sixDaysAgo && timestamp < fiveDaysAgo
  );

  const sevenDaysAgo = now - ONE_DAY_IN_MILLISECONDS * 7;
  const borrowInfosSevenDaysAgo = borrowInfosFromLast7Days.filter(
    ({ timestamp }) => timestamp > sevenDaysAgo && timestamp < sixDaysAgo
  );
}

function getTotalLUSDFees(borrowInfosYesterday: BorrowInfo[]) {
  return sumBy(borrowInfosYesterday, ({ lusdFeeUSD }) => +lusdFeeUSD);
}

function calculateAPY(
  valueOfPrincipal: number,
  valueOfInterest: number,
  numberOfYears: number
): number {
  return 0;
}
