import { useContext } from "react";
import Layout from "../components/Layout";
import ProductCard from "../components/ProductCard";
import { CarritoContext } from "../contexts/CarritoContext";

const Carrito = () => {
  const [carrito, setCarrito] = useContext(CarritoContext);

  const productosCarrito = [
    {
      menu: "Milanesa a caballo",
      tipoMila: "carne",
      cantidad: "1",
      guarnicion: "papas fritas",
      direccion: "newton 1663",
      precio: 1337,
      envio: 100,
    },
    {
      menu: "Milanesa a caballo",
      tipoMila: "carne",
      cantidad: "1",
      guarnicion: "papas fritas",
      direccion: "newton 1663",
      precio: 1337,
      envio: 100,
    },
    {
      menu: "Milanesa a caballo",
      tipoMila: "carne",
      cantidad: "1",
      guarnicion: "papas fritas",
      direccion: "newton 1663",
      precio: 1337,
      envio: 100,
    },
  ];

  const { menu, tipoMila, cantidad, guarnicion, direccion, precio, envio } =
    productosCarrito[0];

  return (
    <Layout>
      <div className="mt-20 w-full h-scren flex flex-col justify-center items-center bg-gray-200">
        <ul className="w-full pt-5 max-w-[95%] flex flex-col gap-3">
          {/* Lista Productos */}
          {carrito.map((producto) => (
            <ProductCard producto={producto} key={producto.id} />
          ))}
        </ul>

        {/* Resumen a pagar */}
        <div className="w-full h-22 bg-white mt-2">
          <div className="flex flex-col px-3">
            <div className="text-blue-600 text-xs flex justify-between border-b border-gray-300">
              <span>Envio a: {direccion}</span>
              <span>{envio}</span>
            </div>

            <div className="text-black flex justify-between mt-1">
              <span>Total con envio</span>
              <span>$ {precio + envio}</span>
            </div>
            <button className="my-2 bg-blue-600 text-white py-2 rounded-md">
              Continuar compra
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Carrito;
