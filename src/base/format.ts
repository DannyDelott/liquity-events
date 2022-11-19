import { BigNumber } from "ethers";
import { commify, formatEther } from "ethers/lib/utils.js";

export function formatPoolShare(poolShare?: number) {
  if (!poolShare) {
    return `0%`;
  }
  return `${(poolShare * 100).toFixed(4)}%`;
}

export function formatEtherLabel(amount?: BigNumber, fixedPoint = 2) {
  if (!amount) {
    return "0.0";
  }
  return commify((+formatEther(amount)).toFixed(fixedPoint));
}

export function formatLUSDLabel(amount?: BigNumber) {
  if (!amount) {
    return "0.00";
  }
  const commified = commify((+formatEther(amount)).toFixed(2));

  // LUSD should always be formatted with 2 numbers after the decimal, just like
  // the dollar. This inserts a 0 at the end where needed.
  if (commified.charAt(commified.length - 3) !== ".") {
    return `${commified}0`;
  }
  return commified;
}

export function formatLQTYLabel(amount?: BigNumber) {
  if (!amount) {
    return "0.00";
  }
  const commified = commify((+formatEther(amount)).toFixed(2));

  // LQTY should always be formatted with 2 numbers after the decimal, since
  // it's value likely won't ever go over $100.
  if (commified.charAt(commified.length - 3) !== ".") {
    return `${commified}0`;
  }
  return commified;
}
