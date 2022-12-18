import { useQuery } from "@tanstack/react-query";
import { alchemyProvider } from "src/provider";
import { createClient } from "wagmi";

/**
 * A hack to create the wagmi client after the alchemy provider promise is
 * resolved.
 */
export function useWagmiClient() {
  return useQuery({
    queryKey: ["wagmi-client"],
    queryFn: async () => {
      const provider = await alchemyProvider;
      const client = createClient({
        autoConnect: true,
        provider,
      });
      return client;
    },
    staleTime: Infinity,
  });
}
