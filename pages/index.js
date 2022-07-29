import Articulo1 from "../components/Articulo1";
import Articulo2 from "../components/Articulo2";
import Carrusel from "../components/Carrusel";
import Layout from "../components/Layout";

const images = [
  "/img/slideshow/sandwich-de-milanesa.jpg",
  "/img/slideshow/milanesa-de-pollo.jpg",
  "/img/slideshow/milanesa_de_carne.jpg",
];

export default function Home() {
  return (
    <Layout pagina={"Home"} >
      <Carrusel
        controles={true}
        autoplay={true}
        velocidad="700"
        intervalo="4500"
        images={images}
      />
      <Articulo1 />
      <hr className="my-4"></hr>
      <Articulo2 />
    </Layout>
  );
}
