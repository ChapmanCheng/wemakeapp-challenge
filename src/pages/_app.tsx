import type { AppProps } from "next/app";
import React from "react";
import ApolloProviderWithAuth from "../context/apollo";
import TokenProvider from "../context/token";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <TokenProvider>
      <ApolloProviderWithAuth>
        <Component {...pageProps} />
      </ApolloProviderWithAuth>
    </TokenProvider>
  );
}

export default MyApp;
