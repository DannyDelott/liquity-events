import type { AppProps } from "next/app";
import { ReactElement } from "react";
import "src/globals.css";

function MyApp({ Component, pageProps }: AppProps): ReactElement {
  return <Component {...pageProps} />;
}

export default MyApp;
