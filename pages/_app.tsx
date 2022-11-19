import "../styles/globals.css";
import type { AppProps } from "next/app";

import { WagmiConfig } from "wagmi";
import { client } from "../src/wagmi/client";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <WagmiConfig client={client}>
      <Component {...pageProps} />
    </WagmiConfig>
  );
}
