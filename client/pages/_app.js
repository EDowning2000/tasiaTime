import "../styles/globals.css";
import Head from "next/head";
import { InfoProvider } from "../Components/InfoContext";

function MyApp({ Component, pageProps }) {
  return (
    <InfoProvider>
      <Head>
        <title>Fantasia Gardens Mini Golf</title>
        <meta charSet="utf-8" />
      </Head>

      <Component {...pageProps} />
    </InfoProvider>
  );
}

export default MyApp;
