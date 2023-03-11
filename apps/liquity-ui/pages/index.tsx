import { LQTY_TOKEN_ADDRESS } from "liquity";
import Head from "next/head";
import { ReactElement } from "react";
import { HomeView } from "src/ui/home/HomeView/HomeView";
import { useTokenPrice } from "src/ui/price/useTokenPrice";

export default function IndexPage(): ReactElement {
  const { data: price } = useTokenPrice(LQTY_TOKEN_ADDRESS);

  return (
    <>
      <Head>
        <title>${price?.price.toFixed(2)} | Liquity.events</title>
      </Head>
      <HomeView />
    </>
  );
}
