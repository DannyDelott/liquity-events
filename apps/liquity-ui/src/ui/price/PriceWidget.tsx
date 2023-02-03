import { ReactElement } from "react";
import { useIsTailwindSmallScreen } from "src/ui/base/tailwindBreakpoints";
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
  const isSmallScreen = useIsTailwindSmallScreen();
  return (
    <div className="flex gap-1.5 items-center text-base lg:text-lg flex-shrink-0">
      <CryptoIcon
        icon={iconName}
        size={isSmallScreen ? IconSize.EXTRA_SMALL : IconSize.SMALL}
      />
      <span>${price?.price.toFixed(2)}</span>
    </div>
  );
}
