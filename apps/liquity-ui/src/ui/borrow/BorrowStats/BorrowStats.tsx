import uniqBy from "lodash.uniqby";
import Image from "next/image";
import { Fragment } from "react";
import Skeleton from "react-loading-skeleton";
import { ScaleLoader } from "react-spinners";
import { useBorrowInfosJson } from "src/ui/borrow/useBorrowInfos";

export function BorrowStats() {
  const { data: borrowInfos, status } = useBorrowInfosJson();

  const totalFeesPaid = borrowInfos?.data.reduce((sum, currentEvent) => {
    return sum + Number(currentEvent.lusdFeePaid);
  }, 0);

  const uniqueBorrowers = uniqBy(
    borrowInfos?.data,
    (borrowInfo) => borrowInfo.borrower
  ).length;

  return (
    <div className="daisy-stats daisy-stats-vertical lg:daisy-stats-horizontal ">
      <div className="daisy-stat">
        <div className="daisy-stat-title">Total Borrowing Fees Paid</div>
        <div className="daisy-stat-value">
          <div className="flex gap-2">
            {status === "loading" ? (
              <Skeleton containerClassName="w-full" height={40} />
            ) : (
              <Fragment>
                <Image
                  src="/svg/lusd.svg"
                  alt="lqty logo"
                  width="32"
                  height="32"
                />
                {Number(totalFeesPaid?.toFixed()).toLocaleString()}
              </Fragment>
            )}
          </div>
        </div>
      </div>
      <div className="daisy-stat">
        <div className="daisy-stat-title">Unique Borrowers</div>
        <div className="daisy-stat-value">
          <div className="flex gap-2 items-center">
            {status === "loading" ? (
              <Skeleton containerClassName="w-full" height={40} />
            ) : (
              <Fragment>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-8 h-8"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
                  />
                </svg>
                {uniqueBorrowers.toLocaleString()}
              </Fragment>
            )}
          </div>
        </div>
      </div>
      <div className="daisy-stat">
        <div className="daisy-stat-title">Total Borrowing Operations</div>
        <div className="daisy-stat-value">
          <div className="flex gap-2 items-center">
            {status === "loading" ? (
              <Skeleton containerClassName="w-full" height={40} />
            ) : (
              <Fragment>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-8 h-8"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"
                  />
                </svg>
                {Number(borrowInfos?.data.length?.toFixed()).toLocaleString()}
              </Fragment>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
