import fetch from "node-fetch";
export interface PriceInfo {
  price: number; // in USD
}

interface FetchPriceResponse {
  coins: {
    // id defined as {chain}:{address}
    [id: string]: PriceInfo;
  };
}

export function makeTokenId(tokenAddress: string) {
  return `ethereum:${tokenAddress}`;
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
  const tokenId = makeTokenId(tokenAddress);
  const priceUrl = timestampMS
    ? `https://coins.llama.fi/prices/historical/${timestampMS}/${tokenId}`
    : `https://coins.llama.fi/prices/current/${tokenId}`;

  console.log("priceUrl", priceUrl);
  const response = await fetch(priceUrl);
  console.log("response", response.status, response.statusText);
  const json = (await response.json()) as FetchPriceResponse;
  return json.coins[tokenId];
}

type BatchPriceInfo = Record<
  // id defined as {chain}:{address}
  string,
  {
    prices: PriceInfo[];
  }
>;

interface FetchBatchPriceResponse {
  coins: BatchPriceInfo;
}
export async function fetchBatchHistoricalPrice(
  tokenAddresses: string[],
  timestamps: number[]
): Promise<BatchPriceInfo> {
  const batchPriceRequestObject: Record<string, number[]> = {};
  tokenAddresses.forEach((tokenAddress) => {
    batchPriceRequestObject[makeTokenId(tokenAddress)] = timestamps;
  });

  const encoded = encodeURI(JSON.stringify(batchPriceRequestObject));
  const priceUrl = `https://coins.llama.fi/batchHistorical?coins=${encoded}`;
  const response = await fetch(priceUrl);
  console.log("response", response.status, response.statusText);
  const json = (await response.json()) as FetchBatchPriceResponse;
  return json.coins;
}
