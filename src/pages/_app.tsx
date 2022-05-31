import { ApolloProvider } from "@apollo/client";
import type { AppProps } from "next/app";
import React from "react";
import client from "../apollo/client";
import Layout from "../components/layout";
import TokenProvider from "../context/token";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <TokenProvider>
      <ApolloProvider client={client}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ApolloProvider>
    </TokenProvider>
  );
}

export default MyApp;
