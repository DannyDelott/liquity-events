import { ReactElement } from "react";
import {
  CryptoIcon,
  IconNameByTokenAddress,
  IconSize,
} from "src/ui/crypto/CryptoIcon";
import { useTokenPrice } from "src/ui/price/useTokenPrice";

interface PriceWidgetProps {
  tokenAddress: string;
}

export function PriceWidget({ tokenAddress }: PriceWidgetProps): ReactElement {
  const { data: price } = useTokenPrice(tokenAddress);
  const iconName = IconNameByTokenAddress[tokenAddress];
  return (
    <div className="flex gap-1.5 items-center lg:text-lg">
      <CryptoIcon icon={iconName} size={IconSize.SMALL} />
      <span>${price?.price.toFixed(2)}</span>
    </div>
  );
}
