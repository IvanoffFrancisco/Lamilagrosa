import Head from "next/head";
import Articulo1 from "../components/Articulo1";
import Carrusel from "../components/Carrusel";

const images = [
  "/img/slideshow/sandwich-de-milanesa.jpg",
  "/img/slideshow/milanesa-de-pollo.jpg",
  "/img/slideshow/milanesa_de_carne.jpg",
];

export default function Home() {
  return (
    <div>
      <Head>
        <title>La Mila Grosa</title>
        <meta name="description" content="La mejor milanesa" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Carrusel
        controles={true}
        autoplay={false}
        velocidad="700"
        intervalo="4500"
        images={images}
      />
      <Articulo1 />
    </div>
  );
}
