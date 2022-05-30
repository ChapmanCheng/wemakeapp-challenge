import type { AppProps } from "next/app";
import React from "react";
import Layout from "../components/layout";
import TokenProvider from "../context/token";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <TokenProvider>
        <Layout>
        <Component {...pageProps} />
        </Layout>
    </TokenProvider>
  );
}

export default MyApp;
