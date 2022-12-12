import { Button } from "component-library";
import maxBy from "lodash.maxby";
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

  const largestFeePaidEvent = maxBy(borrowEvents.events, (eventData) =>
    Number((eventData as any).lusdFeePaid)
  );
  const largestFeeAmount = Number(
    (largestFeePaidEvent as any)?.lusdFeePaid
  )?.toLocaleString();

  const largestFeeBorrower = (largestFeePaidEvent as any)?.borrower;

  return (
    <div>
      <h1>Liquity Events</h1>
      <p>There are {borrowEvents.events.length} events</p>
      <p>The largest fee ever paid was {largestFeeAmount}</p>
      <p>
        The borrow was{" "}
        <a
          target="_blank"
          href={`https://etherscan.io/address/${largestFeeBorrower}`}
          rel="noreferrer"
        >
          {largestFeeBorrower}
        </a>
      </p>
      <Button />
    </div>
  );
}
