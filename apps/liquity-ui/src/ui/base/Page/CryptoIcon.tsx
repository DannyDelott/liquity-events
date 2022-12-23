import Image from "next/image";

export enum CryptoName {
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

const CryptoImgSrc: Record<CryptoName, string> = {
  ETH: "/svg/eth.svg",
  LQTY: "/svg/lqty.svg",
  LUSD: "/svg/lusd.svg",
};

const CryptoIconSize: Record<
  CryptoName,
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
    small: { height: 24, width: 24 },
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
  icon: CryptoName;
  size: IconSize;
  className?: string;
}

export function CryptoIcon({ icon, size, className }: CryptoIconProps) {
  return (
    <Image
      src={CryptoImgSrc[icon]}
      alt={CryptoName[icon]}
      width={CryptoIconSize[icon][size].width}
      height={CryptoIconSize[icon][size].height}
      className={className}
    />
  );
}
