export function makeEtherscanAddressUrl(address: string) {
  return `https://etherscan.io/address/${address}`;
}

export function makeEtherscanTxUrl(txHash: string) {
  return `https://etherscan.io/tx/${txHash}`;
}

export function makeEtherscanBlockUrl(blockNumber: number) {
  return `https://etherscan.io/block/${blockNumber}`;
}
