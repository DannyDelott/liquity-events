import fetch from "node-fetch";
export interface PriceInfo {
  decimals: number;
  symbol: string;
  price: number; // in USD
  timestamp: number; // in milliseconds;
}

interface FetchPriceResponse {
  coins: {
    // id defined as {chain}:{address}
    [id: string]: PriceInfo;
  };
}
export async function fetchEthPrice(timestampMS?: number): Promise<PriceInfo> {
  const tokenId = `coingecko:ethereum`;
  const priceUrl = timestampMS
    ? `https://coins.llama.fi/prices/historical/${timestampMS}/${tokenId}`
    : `https://coins.llama.fi/prices/current/${tokenId}`;

  const response = await fetch(priceUrl);
  const json = (await response.json()) as FetchPriceResponse;
  return json.coins[tokenId];
}

export async function fetchPrice(
  tokenAddress: string,
  timestampMS?: number
): Promise<PriceInfo | undefined> {
  const tokenId = `ethereum:${tokenAddress}`;
  const priceUrl = timestampMS
    ? `https://coins.llama.fi/prices/historical/${timestampMS}/${tokenId}`
    : `https://coins.llama.fi/prices/current/${tokenId}`;

  const response = await fetch(priceUrl);
  const json = (await response.json()) as FetchPriceResponse;
  return json.coins[tokenId];
}
