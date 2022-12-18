import { ReactElement, ReactNode } from "react";
import { WagmiConfig } from "wagmi";
import { useWagmiClient } from "./useWagmiClient";

interface PageWithWagmiProps {
  children: ReactNode;
}

export function WagmiConfigWithAlchemyPromiseProvider({
  children,
}: PageWithWagmiProps): ReactElement | null {
  const { data: client, status } = useWagmiClient();
  if (status === "success") {
    return <WagmiConfig client={client}>{children}</WagmiConfig>;
  }

  return null;
}
