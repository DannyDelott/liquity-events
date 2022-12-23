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
export async function fetchPrice(
  tokenAddress: string,
  timestampMS?: number
): Promise<PriceInfo> {
  const tokenId = `ethereum:${tokenAddress}`;
  const priceUrl = timestampMS
    ? `https://coins.llama.fi/prices/historical/${timestampMS}/${tokenId}`
    : `https://coins.llama.fi/prices/current/${tokenId}`;

  const response = await fetch(priceUrl);
  const json = (await response.json()) as FetchPriceResponse;
  return json.coins[tokenId];
}
