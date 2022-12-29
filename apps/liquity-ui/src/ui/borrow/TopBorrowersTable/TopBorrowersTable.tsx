import classNames from "classnames";
import { sortBy, sumBy } from "lodash";
import groupBy from "lodash.groupby";
import mapValues from "lodash.mapvalues";
import { ReactElement } from "react";
import Skeleton from "react-loading-skeleton";
import { makeEtherscanAddressUrl } from "src/etherscan";
import { useBorrowInfos } from "src/ui/borrow/useBorrowInfos";

interface TopBorrowerTableProps {
  limit: number;
}

export default function TopBorrowersTable({
  limit,
}: TopBorrowerTableProps): ReactElement {
  const { data: borrowInfos, status } = useBorrowInfos();
  const borrowInfosByBorrower = groupBy(borrowInfos?.data, "borrower");
  const totalFeesPaidByBorrower = mapValues(
    borrowInfosByBorrower,
    (borrowInfosForBorrower) =>
      sumBy(borrowInfosForBorrower, (info) => +info.lusdFeePaid)
  );
  const allTableData = Object.keys(borrowInfosByBorrower).map((borrower) => {
    return {
      borrower,
      borrowInfos: borrowInfosByBorrower[borrower],
      totalFeesPaid: totalFeesPaidByBorrower[borrower],
    };
  });
  const tableData = sortBy(allTableData, "totalFeesPaid")
    .reverse()
    .slice(0, limit);

  return (
    <div className="daisy-card bg-base-100 ">
      <div className="daisy-card-body flex justify-center gap-8 flex-col items-center ">
        <h2 className="text-3xl font-bold">Top {limit} Borrowers</h2>
        <div className="justify-center overflow-x-auto ">
          <table
            className={classNames("relative daisy-table", {
              "daisy-table-zebra": status === "success",
            })}
          >
            <thead>
              <tr>
                <th className="sticky top-0 pl-8"></th>
                <th className="sticky top-0 px-8">Borrower</th>
                <th className="sticky top-0 px-8">
                  Borrowing fees paid (LUSD)
                </th>
                <th className="sticky top-0 px-8">Total times borrowed</th>
              </tr>
            </thead>
            <tbody>
              {status === "loading"
                ? Array.from(Array(limit)).map((v, i) => (
                    <tr key={i}>
                      <td>
                        <Skeleton />
                      </td>
                      <td>
                        <Skeleton />
                      </td>
                      <td>
                        <Skeleton />
                      </td>
                      <td>
                        <Skeleton />
                      </td>
                    </tr>
                  ))
                : tableData.map(
                    ({ borrower, borrowInfos, totalFeesPaid }, i) => {
                      const tdClassName = "px-8";
                      return (
                        <tr key={borrower}>
                          <td className={"pl-8"}>{i + 1}</td>
                          <td className={tdClassName}>
                            <a
                              href={makeEtherscanAddressUrl(borrower)}
                              className="daisy-link hover:no-underline"
                              target="_blank"
                              rel="noreferrer"
                            >
                              {borrower}
                            </a>
                          </td>
                          <td className={`${tdClassName} pr-48`} align="right">
                            {(+totalFeesPaid.toFixed()).toLocaleString()}
                          </td>

                          <td className={`${tdClassName} pr-48`} align="right">
                            {borrowInfos.length}
                          </td>
                        </tr>
                      );
                    }
                  )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
