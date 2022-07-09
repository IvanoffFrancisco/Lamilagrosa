import Layout from "../components/Layout";
import ProductList from "../components/ProductList";

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

const carta = [
  {
    imagen: "/img/menues/Capresse.jpg",
    nombre: "Milanesa Capresse",
    ingredientes: ["muzzarella", "tomate", "pesto", "albahaca fresca"],
    precio: 1337,
    id: 1,
  },
  {
    imagen: "/img/menues/Clásica.png",
    nombre: "Milanesa clasica",
    ingredientes: ["perefil"],
    precio: 1215,
  },
  {
    imagen: "/img/menues/de la casa.jpg",
    nombre: "Milanesa de la casa",
    ingredientes: ["muzzarella", "jamón", "tomate", "huevo frito"],
    precio: 1400,
    id: 2,
  },
  {
    imagen: "/img/menues/cheddar.jpg",
    nombre: "Milanesa cheddar",
    ingredientes: [
      "muzzarella",
      "cheddar",
      "panceta crocante",
      "cebollita de verdeo",
    ],
    precio: 1518,
    id: 3,
  },
  {
    imagen: "/img/menues/napolitana.png",
    nombre: "Milanesa napolitana",
    ingredientes: ["Salsa fileto", "muzzarella", "jamón cocido", "orégano"],
    precio: 1337,
    id: 4,
  },
  {
    imagen: "/img/menues/liviana.jpg",
    nombre: "Milanesa liviana",
    ingredientes: [
      "muzzarella",
      "rodajas de tomate",
      "rucula fresca",
      "parmesano",
      "aceite de oliva",
    ],
    precio: 1337,
    id: 5,
  },
  {
    imagen: "/img/menues/americana.jpg",
    nombre: "Milanesa americana",
    ingredientes: ["cebolla caramelizada", "panceta crocante", "huevo frito"],
    precio: 1400,
    id: 6,
  },
  {
    imagen: "/img/menues/patagonica.jpg",
    nombre: "Milanesa patagonica",
    ingredientes: [
      "muzzarella",
      "rúcula",
      "lomito ahumado",
      "tomate con hierbas",
      "salsa de mayonesa ahumada",
    ],
    precio: 1518,
    id: 7,
  },
  {
    imagen: "/img/menues/a caballo.jpg",
    nombre: "Milanesa a caballo",
    ingredientes: ["2 huevos fritos"],
    precio: 1337,
    id: 8,
  },
  {
    imagen: "/img/menues/Fondue de Quesos.jpg",
    nombre: "Milanesa Fondue de Quesos",
    ingredientes: [
      "muzzarella",
      "provolone",
      "queso azul",
      "sardo",
      "ciboulette",
    ],
    precio: 1518,
    id: 9,
  },
  {
    imagen: "/img/menues/la Gringa.png",
    nombre: "Milanesa la Gringa",
    ingredientes: [
      "salsa barbacoa",
      "queso cheddar",
      "panceta crocante",
      "huevo frito",
    ],
    precio: 1518,
    id: 10,
  },
  {
    imagen: "/img/menues/Tex Mex.jpg",
    nombre: "Milanesa Tex Mex",
    ingredientes: ["guacamole", "queso blanco", "salsa criolla", "semillas"],
    precio: 1518,
    id: 11,
  },
  {
    imagen: "/img/menues/Criminal.jpg",
    nombre: "Milanesa Criminal",
    ingredientes: [
      "muzzarella",
      "cheddar",
      "cebolla morada y verdeo",
      "huevos revueltos",
      "panceta",
      "pimentón",
    ],
    precio: 1518,
    id: 12,
  },
  {
    imagen: "/img/menues/provolone.jpg",
    nombre: "Milanesa provolone",
    ingredientes: ["muzzarella", "provolone fundido", "criolla", "perejil"],
    precio: 1400,
    id: 13,
  },
  {
    imagen: "/img/menues/fugazzeta.jpg",
    nombre: "Milanesa fugazzeta",
    ingredientes: ["muzzarella", "colchon de cebolla", "oregano"],
    precio: 1400,
    id: 14,
  },

  {
    imagen: "/img/menues/Vegana Clásica.png",
    nombre: "Milanesa Vegana Clásica",
    ingredientes: ["perejil", "limón"],
    precio: 1320,
    id: 15,
  },

  {
    imagen: "/img/menues/Vegana Texmex.png",
    nombre: "Milanesa Vegana Texmex",
    ingredientes: [
      "guacamole",
      "cebolla morada",
      "tomate",
      "ciboulette",
      "mix de semillas",
    ],
    precio: 1320,
    id: 16,
  },
  {
    imagen: "/img/menues/Vegana tranca.png",
    nombre: "Sándwich Milanesa Vegana Tranca",
    ingredientes: ["lechuga", "tomate", "guacamole"],
    precio: 1095,
    id: 17,
  },
  {
    imagen: "/img/menues/Vegana recargado.png",
    nombre: "Sándwich Milanesa Vegana Recargado",
    ingredientes: [
      "cebolla caramelizada",
      "salsa barbacoa",
      "tomate",
      "pepinillos",
    ],
    precio: 1095,
    id: 18,
  },
  {
    imagen: "/img/menues/Sándwich de milanesa.png",
    nombre: "Sándwich de milanesa",
    ingredientes: [
      "peceto o pollo",
      "lechuga",
      "tomate",
      "papas fritas",
      "bebida a elección",
    ],
    precio: 900,
    id: 19,
  },
  {
    imagen: "/img/menues/Doble Criminal.jpg",
    nombre: "Sándwich Doble Criminal",
    ingredientes: [
      "sésamo",
      "doble milanesa de ternera o pollo",
      "cheddar",
      "panceta",
      "cebolla caramelizada",
      "barbacoa",
      "huevo frito",
      "papas fritas",
    ],
    precio: 1000,
    id: 20,
  },
  {
    imagen: "/img/menues/Doble tex mex.jpg",
    nombre: "Sándwich Doble Tex-Mex",
    ingredientes: [
      "sésamo",
      "doble milanesa de ternera o pollo",
      "muzzarella",
      "nachos",
      "cebolla morada",
      "guacamole",
      "papas fritas",
    ],
    precio: 1000,
    id: 21,
  },
  {
    imagen: "/img/menues/Sandwich Crispy.png",
    nombre: "Sándwich Crispy",
    ingredientes: [
      "doble de milanesa de pollo y muzza",
      "empanado crocante",
      "cebolla crispy",
      "panceta",
      "barbacoa",
      "huevo frito",
      "papas fritas",
    ],
    precio: 1090,
    id: 22,
  },
  {
    imagen: "/img/menues/Sándwich Superclásico.png",
    nombre: "Sándwich Superclásico",
    ingredientes: [
      "ternera o pollo",
      "muzarella",
      "jamon cocido",
      "lechuga",
      "tomate",
      "papas fritas",
    ],
    precio: 1000,
    id: 23,
  },
  {
    imagen:
      "https://images.rappi.com.ar/products/86c32484-c45d-41eb-b217-cee3b6209acf-1629229103546.png",
    nombre: "Milanesa Vegana de Calabaza",
    ingredientes: [
      "Milanesa de calabaza con miel",
      "semillas de chia",
      "semillas de lino",
      "canela",
    ],
    precio: 906,
    id: 24,
  },
  {
    imagen:
      "https://images.rappi.com.ar/products/eb783756-4318-4bd6-967f-c260f159b1ab-1629229315501.png",
    nombre: "Milanesa Vegana de Calabaza Napolitana",
    ingredientes: [
      "Milanesa Vegana de calabaza con miel",
      "semillas de chia",
      "lino y canela",
      "muzzarella",
      "tomate",
      "pesto de albahaca",
    ],
    precio: 906,
    id: 25,
  },
  {
    imagen:
      "https://images.rappi.com.ar/products/874e6f52-6156-4cf3-9b7c-f5137d76c714-1629229271646.png",
    nombre: "Milanesa Vegana de Calabaza Capresse",
    ingredientes: [
      "Dúo de medallones de calabaza con un toque de miel",
      "semillas de chia",
      "lino y canela",
      "topping de muzzarella",
      "tomate",
      "pesto de albahac",
    ],
    precio: 906,
    id: 26,
  },
];
const menu = () => {
  return (
    <Layout>
      <div className="mt-20">
        <ProductList carta={carta} />;
      </div>
    </Layout>
  );
};
export default menu;
