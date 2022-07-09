import Image from "next/image";
import React from "react";

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
  return (
    <main className="w-full h-auto mt-20">
      <div className="max-w-[85%] mx-auto">
        <h2 className="text-center py-5 text-2xl text-blue-600">
          {productoPrueba?.nombre}
        </h2>

        <section className="w-full flex flex-col">
          <article className="w-full">
            <Image
              src="/img/menues/a caballo.jpg"
              alt="producto"
              layout="responsive"
              width="500"
              height="300"
              objectFit="cover"
            />
          </article>

          <section className="w-full my-2 ">
            <ul className="grid grid-cols-3 grid-rows-2 gap-2">
              {guarniciones.map((item, i) => (
                <li className="w-full" key={i}>
                  <Image
                    src={item.imagen}
                    alt="producto"
                    layout="responsive"
                    width="500"
                    height="300"
                    objectFit="cover"
                  />
                </li>
              ))}
            </ul>
          </section>
        </section>
      </div>
    </main>
  );
};

export default producto;

{
  /* <Image
  src={imagen}
  alt="producto"
  layout="responsive"
  width="600"
  height="400"
  objectFit="cover"
/>; */
}
{
  /* <div className="text-center px-2">
        <h2 className="font-bold text-md pt-2 lg:text-lg xl:text-xl">
          {item.nombre}
        </h2>
        <strong className="text-xs font-semibold 2xl:text-sm">
          Ingredientes:
        </strong>
        <sapan className="flex justify-center pb-2 text-xs 2xl:text-sm">
          ({item.ingredientes.map((ingrediente) => ingrediente).join(", ")})
        </sapan>
      </div> */
}
