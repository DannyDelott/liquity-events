import Image from "next/image";

export enum IconName {
  LUSD = "LUSD",
  LQTY = "LQTY",
  ETH = "ETH",
}
export enum IconSize {
  EXTRA_SMALL = "x-small",
  SMALL = "small",
  MEDIUM = "medium",
  LARGE = "large",
}

const CryptoImgSrc: Record<IconName, string> = {
  ETH: "/svg/eth.svg",
  LQTY: "/svg/lqty.svg",
  LUSD: "/svg/lusd.svg",
};

const CryptoIconSize: Record<
  IconName,
  Record<IconSize, { height: number; width: number }>
> = {
  ETH: {
    "x-small": { height: 18, width: 18 },
    small: { height: 24, width: 24 },
    medium: { height: 24, width: 24 },
    large: { height: 42, width: 42 },
  },
  LQTY: {
    "x-small": { height: 18, width: 18 },
    // lqty icon isn't a perfect square, so we bump up the size to be consistent
    // with the other logos
    small: { height: 28, width: 28 },
    medium: { height: 24, width: 24 },
    large: { height: 42, width: 42 },
  },
  LUSD: {
    "x-small": { height: 18, width: 18 },
    small: { height: 24, width: 24 },
    medium: { height: 24, width: 24 },
    large: { height: 42, width: 42 },
  },
};

interface CryptoIconProps {
  icon: IconName;
  size: IconSize;
  className?: string;
}

export function CryptoIcon({ icon, size, className }: CryptoIconProps) {
  return (
    <Image
      src={CryptoImgSrc[icon]}
      alt={IconName[icon]}
      width={CryptoIconSize[icon][size].width}
      height={CryptoIconSize[icon][size].height}
      className={className}
    />
  );
}
