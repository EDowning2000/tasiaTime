import { useState } from "react";
import "../styles/globals.css";
import Head from "next/head";
import { GlobalState } from "../Components/GlobalState";

function MyApp({ Component, pageProps }) {
  const [value, setValue] = useState("Hello world");
  const [value2, setValue2] = useState("hello world 2");
  return (
    <>
      <Head>
        <title>Fantasia Gardens Mini Golf</title>
        <meta charSet="utf-8" />
      </Head>
      <GlobalState.Provider value={{ value, setValue, value2, setValue2 }}>
        <Component {...pageProps} />
      </GlobalState.Provider>
    </>
  );
}

export default MyApp;
