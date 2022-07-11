import Articulo1 from "../components/Articulo1";
import Carrusel from "../components/Carrusel";
import Layout from "../components/Layout";
import Promosiones from "../components/Promosiones";

const images = [
  "/img/slideshow/sandwich-de-milanesa.jpg",
  "/img/slideshow/milanesa-de-pollo.jpg",
  "/img/slideshow/milanesa_de_carne.jpg",
];

export default function Home() {
  return (
    <Layout>
      <Carrusel
        controles={true}
        autoplay={true}
        velocidad="700"
        intervalo="4500"
        images={images}
      />
      <Articulo1 />
    </Layout>
  );
}
