import Head from "next/head";
import { useState } from "react";

import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = ({ children, pagina }) => {
  const [editarProducto, setEditarProducto] = useState("");

  return (
    <div>
      <Head>
        <title>La Mila Grosa - {pagina}</title>
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
