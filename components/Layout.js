import Head from "next/head";

import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = ({ children, pagina }) => {
  return (
    <div>
      <Head>
        <title>La Mila Grosa - </title>
        <meta name="description" content="Sitio Web de venta de comida" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
