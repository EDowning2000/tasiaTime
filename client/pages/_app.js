import { useState } from "react";
import "../styles/globals.css";
import Head from "next/head";
import { UserContext } from "../Components/UserContext";

function MyApp({ Component, pageProps }) {
  const [value, setValue] = useState("Hello world");
  return (
    <>
      <Head>
        <title>Fantasia Gardens Mini Golf</title>
        <meta charSet="utf-8" />
      </Head>
      <UserContext.Provider value={{ value, setValue }}>
        <Component {...pageProps} />
      </UserContext.Provider>
    </>
  );
}

export default MyApp;
