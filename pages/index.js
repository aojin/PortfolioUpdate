import Head from "next/head";
import styles from "./styles/Home.module.css";
import SpotLightBG from "../components/SpotLightBG/SpotLightBG";
import TreeViewNav from "../components/TreeViewNav/TreeViewNav";
import Resume from "../components/Resume/Resume";
import ResumeViewer from "../components/ResumeViewer/ResumeViewer";
import ProjectsGrid from "../components/ProjectsGrid/ProjectsGrid";
import SocialsNav from "../components/SocialsNav/SocialsNav";

export default function Home({ isMobile }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Alex Jin - Portfolio</title>
        <link
          rel="icon"
          href="https://raw.githubusercontent.com/aojin/PortfolioUpdate/master/public/favicon.ico"
        />
      </Head>
      <TreeViewNav />
      <SocialsNav />
      <SpotLightBG isMobile={isMobile} />
      <main className={styles.main}>
        <section id="resume">
          <Resume />
        </section>
        {/* <section id="projects">
          <ProjectsGrid />
        </section> */}
      </main>
    </div>
  );
}

Home.getInitialProps = ({ req }) => {
  let userAgent;
  if (req) {
    // if you are on the server and you get a 'req' property from your context
    userAgent = req.headers["user-agent"]; // get the user-agent from the headers
  } else {
    userAgent = navigator.userAgent; // if you are on the client you can access the navigator from the window object
  }

  let isMobile = Boolean(
    userAgent.match(
      /Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i
    )
  );

  return { isMobile };
};
