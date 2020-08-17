import Head from "next/head";
import styles from "./styles/Home.module.css";
import NavLayer from "./components/NavLayer/NavLayer";

import SpringHero from "./components/SpringHero/SpringHero";

export default function Home() {
  return (
    <>
      <NavLayer>
        <div className={styles.container}>
          <Head>
            <title>Alex Jin - Portfolio</title>
            <link rel="icon" href="/favicon.ico" />
          </Head>

          <main id="heroLanding" className={styles.main}>
            <SpringHero />
          </main>

          <footer className={styles.footer}></footer>
        </div>
      </NavLayer>
    </>
  );
}
