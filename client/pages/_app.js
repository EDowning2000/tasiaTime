import { useState, useContext } from "react";
import "../styles/globals.css";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Fantasia Gardens Mini Golf</title>
        <meta charSet="utf-8" />
      </Head>
      <InfoContext.Provider value={[selectedCourse, setSelectedCourse]}>
        <Component {...pageProps} />
      </InfoContext.Provider>
    </>
  );
}

export default MyApp;
