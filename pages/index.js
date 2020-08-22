import Head from "next/head";
import styles from "./styles/Home.module.css";
import SpotLightBG from "./components/SpotLightBG/SpotLightBG";
import TreeViewNav from "./components/TreeViewNav/TreeViewNav";

export default function Home({ isMobile }) {
  console.log("isMobile?: ", isMobile);
  return (
    <div className={styles.container}>
      <Head>
        <title>Alex Jin - Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <TreeViewNav />
      <SpotLightBG isMobile={isMobile} />
      <main className={styles.main}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Facilisi nullam
        vehicula ipsum a arcu cursus vitae congue mauris. Eget duis at tellus at
        urna condimentum mattis pellentesque. Diam quam nulla porttitor massa id
        neque aliquam. Pretium vulputate sapien nec sagittis aliquam. Ut eu sem
        integer vitae justo. Dui nunc mattis enim ut tellus elementum sagittis
        vitae. Eu feugiat pretium nibh ipsum consequat nisl vel pretium lectus.
        Sit amet mattis vulputate enim nulla aliquet porttitor. Amet purus
        gravida quis blandit turpis. Eros donec ac odio tempor orci. Adipiscing
        bibendum est ultricies integer quis auctor elit sed vulputate. Arcu
        cursus euismod quis viverra nibh cras pulvinar mattis nunc. Lorem dolor
        sed viverra ipsum nunc aliquet. Ornare suspendisse sed nisi lacus.
        Venenatis urna cursus eget nunc scelerisque viverra mauris in aliquam.
        Pulvinar mattis nunc sed blandit libero volutpat sed cras ornare. Eros
        donec ac odio tempor orci dapibus ultrices in iaculis. Tortor id aliquet
        lectus proin nibh nisl condimentum. Egestas pretium aenean pharetra
        magna. Amet mattis vulputate enim nulla aliquet porttitor lacus luctus
        accumsan. Lorem donec massa sapien faucibus et molestie ac feugiat.
        Risus sed vulputate odio ut enim blandit. Odio tempor orci dapibus
        ultrices in. Arcu vitae elementum curabitur vitae. Volutpat blandit
        aliquam etiam erat velit scelerisque in. Dui vivamus arcu felis bibendum
        ut tristique et. In dictum non consectetur a erat nam at lectus urna.
        Egestas fringilla phasellus faucibus scelerisque eleifend donec pretium
        vulputate sapien. Malesuada proin libero nunc consequat interdum varius
        sit amet. Id diam maecenas ultricies mi eget. Amet mattis vulputate enim
        nulla aliquet. Vestibulum rhoncus est pellentesque elit ullamcorper
        dignissim cras tincidunt lobortis. Vulputate sapien nec sagittis aliquam
        malesuada bibendum arcu. Egestas pretium aenean pharetra magna ac
        placerat vestibulum lectus. Arcu non odio euismod lacinia at quis risus.
        Dis parturient montes nascetur ridiculus mus mauris vitae ultricies.
        Sapien pellentesque habitant morbi tristique senectus et. Pretium
        vulputate sapien nec sagittis aliquam malesuada. Habitasse platea
        dictumst vestibulum rhoncus. Justo nec ultrices dui sapien. Pellentesque
        elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus.
        Dictum fusce ut placerat orci nulla pellentesque. Eu tincidunt tortor
        aliquam nulla. Vivamus at augue eget arcu dictum varius duis. Massa
        ultricies mi quis hendrerit. Aenean pharetra magna ac placerat
        vestibulum lectus mauris ultrices. Sit amet est placerat in egestas erat
        imperdiet. Non diam phasellus vestibulum lorem sed risus ultricies
        tristique. Vel pharetra vel turpis nunc eget lorem. Ultricies tristique
        nulla aliquet enim tortor at auctor. Sollicitudin tempor id eu nisl nunc
        mi. Feugiat sed lectus vestibulum mattis. Euismod lacinia at quis risus
        sed vulputate odio ut. Dignissim diam quis enim lobortis scelerisque.
        Ultrices in iaculis nunc sed. Senectus et netus et malesuada fames ac
        turpis egestas sed. Gravida arcu ac tortor dignissim. Eu feugiat pretium
        nibh ipsum consequat nisl vel pretium lectus. Rhoncus mattis rhoncus
        urna neque viverra justo nec. Blandit libero volutpat sed cras ornare
        arcu dui. Tincidunt lobortis feugiat vivamus at augue eget. Cursus vitae
        congue mauris rhoncus aenean vel elit scelerisque mauris. Dui vivamus
        arcu felis bibendum ut tristique et egestas. Velit ut tortor pretium
        viverra suspendisse potenti nullam ac. In nisl nisi scelerisque eu
        ultrices vitae auctor eu. Mi ipsum faucibus vitae aliquet nec. In eu mi
        bibendum neque. Eget mi proin sed libero enim sed faucibus. Amet
        venenatis urna cursus eget nunc scelerisque viverra. Tristique senectus
        et netus et malesuada fames. Augue mauris augue neque gravida in
        fermentum et sollicitudin.
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
