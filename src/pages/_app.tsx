import type { AppProps } from "next/app";
import React from "react";
import TokenProvider from "../context/token";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <TokenProvider>
      <Component {...pageProps} />
    </TokenProvider>
  );
}

export default MyApp;
