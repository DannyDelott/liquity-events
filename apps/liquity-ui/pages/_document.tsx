import { Html, Head, Main, NextScript } from "next/document";

const showTailwindDebugScreens = process.env.NODE_ENV === "development";
export default function Document() {
  return (
    <Html data-theme="winter">
      <Head />
      <title>Liquity.events</title>
      <body className={showTailwindDebugScreens ? "debug-screens" : ""}>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
