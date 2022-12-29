import { ReactElement } from "react";

export function HeaderTitle(): ReactElement {
  return (
    <span className="text-sm lg:text-2xl font-bold">
      <span className="underline underline-offset-8 decoration-2 md:decoration-4 decoration-liquity-blue">
        Liquity
      </span>
      <span className="underline underline-offset-8 decoration-2 md:decoration-4 decoration-liquity-purple">
        {/* Space goes here so that both spans have 7 characters and the underline looks balanced */}{" "}
        Events
      </span>
    </span>
  );
}
