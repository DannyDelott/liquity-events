import classNames from "classnames";
import { ReactElement, ReactNode } from "react";

interface PageProps {
  children: ReactNode;
  className?: string;
}

export function Page({ className = "", children }: PageProps): ReactElement {
  return (
    <div
      className={classNames(
        "h-full flex flex-col overflow-scroll py-8",
        className
      )}
    >
      {children}
    </div>
  );
}
