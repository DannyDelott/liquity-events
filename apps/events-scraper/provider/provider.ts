import { Alchemy, Network } from "alchemy-sdk";

export const alchemy = new Alchemy({
  apiKey: process.env.ALCHEMY_MAINNET_API_KEY as string,
  network: Network.ETH_MAINNET,
  batchRequests: true,
});
