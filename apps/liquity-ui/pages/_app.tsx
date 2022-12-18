import { QueryClientProvider } from "@tanstack/react-query";
import { ReactElement } from "react";
import { queryClient } from "src/queryClient";
import type { AppProps } from "next/app";

import "src/globals.css";
import { WagmiConfigWithAlchemyPromiseProvider } from "src/ui/wagmi/WagmiConfigWithAlchemyPromiseProvider";
import { Navigation } from "src/ui/navigation/Navigation";

function App({ Component, pageProps }: AppProps): ReactElement {
  return (
    <QueryClientProvider client={queryClient}>
      <WagmiConfigWithAlchemyPromiseProvider>
        <Navigation />
        <Component {...pageProps} />
      </WagmiConfigWithAlchemyPromiseProvider>
    </QueryClientProvider>
  );
}

export default App;
