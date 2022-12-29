export function makeEtherscanAddressUrl(addressOrEns: string): string {
  return `https://etherscan.io/address/${addressOrEns}`;
}

export function makeEtherscanTxUrl(txHash: string): string {
  return `https://etherscan.io/tx/${txHash}`;
}

export function makeEtherscanBlockUrl(block: number): string {
  return `https://etherscan.io/block/${block}`;
}
