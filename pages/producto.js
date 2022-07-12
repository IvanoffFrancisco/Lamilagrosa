import Image from "next/image";
import Layout from "../components/Layout";
import ListadoGuarniciones from "../components/ListadoGuarniciones";

import { TiHeartOutline } from "react-icons/ti";
import ListadoIngredientes from "../components/ListadoIngredientes";

const guarniciones = [
  {
    imagen:
      "https://images.rappi.com.ar/products/3d9120f7-f3ef-455c-8acd-cda3e4098807-1629229510757.png",
    nombre: "Papas fritas",
    ingredientes: ["papa"],
    precio: 688,
    id: 1,
  },
  {
    imagen: "https://images.rappi.com.ar/products/1937429-1617886917008.jpg",
    nombre: "Papas fritas a caballo",
    ingredientes: ["Papa", "huevo frito"],
    precio: 825,
    id: 1,
  },
  {
    imagen: "https://images.rappi.com.ar/products/546594-1617886929209.jpg",
    nombre: "Papas cheddar",
    ingredientes: ["Papa", "cheddar", "panceta crocante", "ciboulette"],
    precio: 825,
    id: 1,
  },
  {
    imagen: "https://images.rappi.com.ar/products/546595-1617886953216.jpg",
    nombre: "Papas Criminales",
    ingredientes: [
      "Papas fritas",
      "cheddar",
      "cebolla de verdeo y colorada",
      "panceta ahumada",
      "huevo revuelto",
      "pimentón dulce",
    ],
    precio: 1100,
    id: 1,
  },
  {
    imagen:
      "https://images.rappi.com.ar/products/12368191-8b4c-4336-9b94-42fdb50e09d5-1628272889480.png",
    nombre: "Nachos",
    ingredientes: ["nachos", "salsa a eleccion"],
    precio: 600,
    id: 1,
  },
  {
    imagen: "https://images.rappi.com.ar/products/546599-1617886889264.jpg",
    nombre: "Aros de Cebolla",
    ingredientes: ["Aros de cebolla", "salsa barbacoa"],
    precio: 653,
    id: 1,
  },
  {
    imagen:
      "https://images.rappi.com.ar/products/6287d03b-3082-4275-9de6-6a8e4f3d6732-1645118117215.png",
    nombre: "Triángulo de Provolone",
    ingredientes: ["provolone", "salsa criolla"],
    precio: 600,
    id: 1,
  },
  {
    imagen:
      "https://images.rappi.com.ar/products/e3cec65d-8bb5-48c5-bbdb-1d22284a3d5e-1650463523409.png",
    nombre: "Bastoncitos de Muzzarella",
    ingredientes: ["muzzarella", "salsa fileto"],
    precio: 600,
    id: 1,
  },
  {
    imagen: "https://images.rappi.com.ar/products/1784419-1617887000030.jpg",
    nombre: "Pechuguitas Crispy",
    ingredientes: ["Pechuguitas pollo", "muzzarella", "salsa barbacoa"],
    precio: 575,
    id: 1,
  },
  {
    imagen: "https://images.rappi.com.ar/products/546624-1617888077361.jpg",
    nombre: "Ensalada Clásica",
    ingredientes: [
      "Cebolla",
      "Huevo",
      "Lechuga",
      "Parmesano",
      "Tomate",
      "Zanahoria",
      "Rúcula",
    ],
    precio: 614,
    id: 1,
  },
  {
    imagen: "https://images.rappi.com.ar/products/546627-1617888105700.jpg",
    nombre: "Ensalada Caesar",
    ingredientes: [
      "lechuga",
      "pollo",
      "croutones",
      "salsa Caesar",
      "parmesano",
    ],
    precio: 800,
    id: 1,
  },
  {
    imagen: "https://images.rappi.com.ar/products/546629-1617888112237.jpg",
    nombre: "Ensalada Caesar de Rúcula",
    ingredientes: [
      "lechuga",
      "pollo",
      "croutones",
      "salsa Caesar",
      "parmesano",
    ],
    precio: 800,
    id: 1,
  },
  {
    imagen: "https://images.rappi.com.ar/products/546622-1617888090814.jpg",
    nombre: "Wrap Milanesitas de Pollo",
    ingredientes: [
      "Wrap de milanesas de pollo",
      "mayonesa",
      "verdes",
      "cebolla caramelizada",
      "tomate confitado",
      "nachos",
    ],
    precio: 700,
    id: 1,
  },
];

const productoPrueba = {
  imagen: "/img/menues/Capresse.jpg",
  nombre: "Milanesa Capresse",
  ingredientes: ["muzzarella", "tomate", "pesto", "albahaca fresca"],
  precio: 1337,
  id: 1,
};

const producto = () => {
  const handleLeftClick = () => {};
  const handleRightClick = () => {};

  return (
    <Layout>
      <main className="w-full h-auto mt-20">
        <div className="max-w-[85%] mx-auto w-full flex flex-col md:flex-row md:justify-center md:gap-x-3 pt-5">
          <div className="flex justify-between pt-1">
            <h2 className="text-center text-2xl font-semibold md:hidden">
              {productoPrueba?.nombre}
            </h2>
            <TiHeartOutline
              size="30px"
              className="cursor-pointer md:hidden"
              onClick={() => alert("añadido a favorito")}
            />
          </div>
          <div className="flex justify-start pb-2 text-xs 2xl:text-sm md:hidden">
            <ListadoIngredientes productoPrueba={productoPrueba} />
          </div>

          <section className="w-full md:w-1/2 lg:w-3/5 flex flex-col gap-2">
            <article className="w-full">
              <Image
                src={productoPrueba.imagen}
                alt="producto"
                layout="responsive"
                width="500"
                height="300"
                objectFit="cover"
              />
            </article>

            <p className="text-center uppercase">
              Elige una guarnición{" "}
              <span className="text-red-600 font-semibold">Grosa!</span>
            </p>

            <section className="w-full flex">
              {/* <button
                className="w-6 h-[66px] bg-black bg-opacity-30 flex justify-center items-center mr-[2px]"
                onClick={handleLeftClick}
              >
                <Image
                  src="/img/arrowl.png"
                  alt=""
                  layout="fixed"
                  width={15}
                  height={15}
                  objectFit="contain"
                />
              </button> */}
              <ListadoGuarniciones guarniciones={guarniciones} />
              {/* <button
                className="w-5 h-[66px] bg-black opacity-30 flex justify-center items-center ml-[2px]"
                onClick={handleRightClick}
              >
                <Image
                  src="/img/arrowr.png"
                  alt=""
                  layout="fixed"
                  width={15}
                  height={15}
                  objectFit="contain"
                />
              </button> */}
            </section>
          </section>

          <section className="w-full md:w-1/2 lg:w-2/5">
            <div className="flex justify-between">
              <h2 className="text-start text-2xl hidden md:block font-semibold">
                {productoPrueba.nombre}
              </h2>
              <TiHeartOutline
                size="30px"
                className="cursor-pointer hidden md:block"
                onClick={() => alert("hola")}
              />
            </div>
            <div className="md:flex justify-start pb-2 text-xs 2xl:text-sm hidden">
              <ListadoIngredientes productoPrueba={productoPrueba} />
            </div>

            <p className="text-red-600 text-3xl font-bold py-6">
              ${productoPrueba.precio}
            </p>

            <div className="md:py-5 flex justify-between">
              <div>
                <button className="p-2 border">-</button>
                <div className="w-fit border p-2 inline-block">
                  {"contador"}
                </div>
                <button className="p-2 border">+</button>
              </div>
              <button className="bg-red-600 py-2 px-4 text-white rounded-md uppercase">
                Añadir
              </button>
            </div>

            <div className="py-5">
              <p>
                Aca iria la descripcion del menu Curabitur non lectus tellus.
                Vestibulum pulvinar vestibulum leo, id sagittis sapien aliquet
                in. Nunc ac urna vel neque feugiat laoreet non finibus sem. In
                rutrum sapien non lorem rhoncus cursus. Donec felis felis,
                venenatis eleifend hendrerit mollis, dictum et nisi. Nunc dolor
                nulla, pulvinar non venenatis vitae, sagittis eget nisl. Fusce
                accumsan tellus augue.
              </p>
            </div>
          </section>
        </div>
      </main>
    </Layout>
  );
};

export default producto;
