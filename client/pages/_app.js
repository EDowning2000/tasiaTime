import { useState, useContext } from "react";
import "../styles/globals.css";
import Head from "next/head";
import { UserContext } from "../Components/UserContext";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Fantasia Gardens Mini Golf</title>
        <meta charSet="utf-8" />
      </Head>
      <UserContext.Provider value="hello from context">
        <Component {...pageProps} />
      </UserContext.Provider>
    </>
  );
}

export default MyApp;
