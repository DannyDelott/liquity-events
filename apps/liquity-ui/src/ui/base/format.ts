import { BigNumber } from "ethers";
import { commify, formatEther, parseEther } from "ethers/lib/utils.js";

export function formatAddress(address: string): string {
  const first4 = address.slice(0, 5);
  const last4 = address.slice(-4);
  return `${first4}...${last4}`;
}

export function formatPoolShare(poolShare?: number) {
  if (!poolShare) {
    return `0%`;
  }
  return `${(poolShare * 100).toFixed(4)}%`;
}

export function formatLQTYLabel(amount?: BigNumber | string): string {
  if (!amount) {
    return "0.00";
  }

  let amountAsBigNumber: BigNumber = BigNumber.from(0);
  if (typeof amount === "string") {
    amountAsBigNumber = parseEther(amount);
  } else {
    amountAsBigNumber = amount;
  }

  const commified = commify((+formatEther(amountAsBigNumber)).toFixed(2));

  // LQTY should always be formatted with 2 numbers after the decimal, since
  // it's value likely won't ever go over $100.
  if (commified.charAt(commified.length - 3) !== ".") {
    return `${commified}0`;
  }
  return commified;
}
