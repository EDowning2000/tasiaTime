import "../styles/globals.css";
import Head from "next/head";
import Button from "../Components/button";
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Fantasia Gardens Mini Golf</title>
        <meta charSet="utf-8" />
      </Head>
      <Component {...pageProps} />
      <Button />
    </>
  );
}

export default MyApp;
