import "../styles/globals.css";
import Head from "next/head";
import Table from "../Components/table";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Fantasia Gardens Mini Golf</title>
        <meta charSet="utf-8" />
      </Head>
      {/* <Component {...pageProps} /> */}
      <Table />
    </>
  );
}

export default MyApp;
