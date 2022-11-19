import { alchemyProvider } from "wagmi/providers/alchemy";
import { configureChains, chain, createClient } from "wagmi";

const ALCHEMY_KEY = "Qal9u0ubvs1sMXlbuYrd-ueZxpHgJKiA";
export const { chains, provider } = configureChains(
  [chain.mainnet],
  [alchemyProvider({ apiKey: ALCHEMY_KEY })]
);
export const client = createClient({
  provider,
});
