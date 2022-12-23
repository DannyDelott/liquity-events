import { RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { ReactElement, ReactNode } from "react";
import { mainnet, WagmiConfig } from "wagmi";
import { useWagmiClientWithRainbowKit } from "./useWagmiClient";

interface PageWithWagmiProps {
  children: ReactNode;
}

export function WagmiConfigWithAlchemyPromiseProvider({
  children,
}: PageWithWagmiProps): ReactElement | null {
  const { data: client, status } = useWagmiClientWithRainbowKit();
  if (status === "success") {
    return (
      <WagmiConfig client={client}>
        <RainbowKitProvider chains={[mainnet]} modalSize="compact">
          {children}
        </RainbowKitProvider>
      </WagmiConfig>
    );
  }

  return null;
}
