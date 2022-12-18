import uniqBy from "lodash.uniqby";
import { useEffect, useState } from "react";

export const BORROW_EVENTS_S3_URL =
  "https://lusd-borrowing-fee-paid-events.s3.amazonaws.com/LUSDBorrowingFeePaid.json";

export default function Web() {
  const [borrowEvents, setBorrowEvents] = useState<any>({ events: [] });
  useEffect(() => {
    fetch(BORROW_EVENTS_S3_URL)
      .then((response) => response.json())
      .then((data) => {
        setBorrowEvents(data);
        console.table(data.events);
      });
  }, []);

  const totalFeesPaid: number = (borrowEvents.events as Array<any>).reduce(
    (sum, currentEvent) => {
      return sum + Number(currentEvent.lusdFeePaid);
    },
    0
  );

  const uniqueBorrowers: number = uniqBy(
    borrowEvents.events as Array<any>,
    (event) => event.borrower
  ).length;

  return (
    <div>
      <div className="daisy-navbar bg-neutral text-neutral-content">
        <div className="daisy-navbar-start">
          <div className="daisy-form-control">
            <input
              type="text"
              placeholder="Search for an address, vault, etc..."
              className="daisy-input daisy-input-bordered w-72 text-black"
            />
          </div>
          <button className="daisy-btn daisy-btn-primary ml-2">Go</button>
        </div>
        <div className="daisy-navbar-center">
          <a className="daisy-btn daisy-btn-ghost normal-case text-xl">
            Liquity Events
          </a>
        </div>
      </div>

      <div className="flex justify-center">
        <div className="daisy-stats daisy-stats-vertical lg:daisy-stats-horizontal shadow">
          <div className="daisy-stat">
            <div className="daisy-stat-title">Total LUSDBorrowingFeePaid</div>
            <div className="daisy-stat-value">
              {Number(totalFeesPaid.toFixed()).toLocaleString()}
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
            <div className="daisy-stat-value">1,200</div>
          </div>
        </div>
      </div>
    </div>
  );
}
