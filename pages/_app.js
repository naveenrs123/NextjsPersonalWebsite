import "../styles/globals.css";
import Head from "next/head";
import Footer from "../components/Footer";
import { AnimatePresence } from "framer-motion";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="description" content="A personal portfolio website" />
        <link rel="icon" href="./images/picrew-img.png" />
      </Head>
      <AnimatePresence exitBeforeEnter initial={false} onExitComplete={() => window.scrollTo(0, 0)}>
        <Component {...pageProps} />
      </AnimatePresence>
      <Footer></Footer>
    </>
  );
}

export default MyApp;
