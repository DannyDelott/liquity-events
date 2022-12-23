import { getDefaultWallets } from "@rainbow-me/rainbowkit";
import { useQuery } from "@tanstack/react-query";
import { alchemy } from "src/provider";
import { configureChains, createClient, mainnet } from "wagmi";

/**
 * A hack to create the wagmi client after the alchemy provider promise is
 * resolved.
 */
export function useWagmiClientWithRainbowKit() {
  return useQuery({
    queryKey: ["wagmi-client-with-rainbowkit"],
    queryFn: async () => {
      const alchemyProvider = await alchemy.config.getProvider();
      const { connectors } = getDefaultWallets({
        appName: "Liquity Events",
        chains: [mainnet],
      });
      const client = createClient({
        autoConnect: true,
        connectors,
        provider: alchemyProvider,
      });
      return client;
    },
    staleTime: Infinity,
  });
}
