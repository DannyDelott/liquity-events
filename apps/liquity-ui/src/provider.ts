import { Alchemy, Network } from "alchemy-sdk";

export const alchemy = new Alchemy({
  apiKey: process.env.NEXT_PUBLIC_MAINNET_ALCHEMY_KEY as string,
  network: Network.ETH_MAINNET,
  batchRequests: true,
});

export const alchemyProvider = alchemy.config.getProvider();
