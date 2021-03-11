import React from "react";
import Head from "next/head";
import Layout from "../src/layout";
import App from "../src/container";

export default function Home() {
  return (
    <div className="">
      {/* <Head>
        <title>Translate Moni</title>
        <link rel="icon" href="/favicon.ico" />
      </Head> */}
      <Layout>
        <App />
      </Layout>
    </div>
  );
}
