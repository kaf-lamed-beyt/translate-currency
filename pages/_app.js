import React from "react";
import "../styles/globals.css";
import "../styles/variables.css";
import Head from "next/head";

import { Provider } from "react-redux";
import store from "../src/store";

function MyApp({ Component, pageProps }) {
  return (
    <React.Fragment>
      <Head>
        <title>Translate Moni</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#072a4d" />
      </Head>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </React.Fragment>
  );
}

export default MyApp;
