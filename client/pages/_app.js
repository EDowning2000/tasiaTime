import "../styles/globals.css";
import Head from "next/head";
import Input from "../Components/input";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Fantasia Gardens Mini Golf</title>
        <meta charSet="utf-8" />
      </Head>
      {/* <Component {...pageProps} /> */}
      <Input />
    </>
  );
}

export default MyApp;
