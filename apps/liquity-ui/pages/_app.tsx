import { QueryClientProvider } from "@tanstack/react-query";
import { ReactElement } from "react";
import { queryClient } from "src/queryClient";
import type { AppProps } from "next/app";

import "@rainbow-me/rainbowkit/styles.css";
import "react-loading-skeleton/dist/skeleton.css";

import "src/globals.css";
import { WagmiConfigWithAlchemyPromiseProvider } from "src/ui/wagmi/WagmiConfigWithAlchemyPromiseProvider";
import { Header } from "src/ui/navigation/Header";
import { Footer } from "../src/ui/navigation/Footer";

function App({ Component, pageProps }: AppProps): ReactElement {
  return (
    <QueryClientProvider client={queryClient}>
      <WagmiConfigWithAlchemyPromiseProvider>
        <main className="h-full w-full absolute flex flex-col justify-between">
          <Header />
          <Component {...pageProps} />
          <Footer />
        </main>
      </WagmiConfigWithAlchemyPromiseProvider>
    </QueryClientProvider>
  );
}

export default App;
