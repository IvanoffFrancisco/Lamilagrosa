import { useContext } from "react";
import Layout from "../components/Layout";
import ProductCard from "../components/ProductCard";
import { CarritoContext } from "../contexts/CarritoContext";
import { UsuarioContext } from "../contexts/UsuarioContext";

const Carrito = () => {
  const { carrito } = useContext(CarritoContext);
  const { userGlobal } = useContext(UsuarioContext);

  const direccion = userGlobal?.direcciones?.[0].calle;
  console.log(userGlobal);
  console.log(direccion);
  return (
    <Layout pagina={"carrito de compras"}>
      {carrito?.length === 0 || carrito == null ? (
        <div className="w-full h-screen flex flex-col justify-center items-center">
          <p className="text-lg font-semibold">
            Aún no tienes productos en tu carrito
          </p>{" "}
          <p className="text-lg font-semibold">
            Has click{" "}
            <a className="text-blue-600 font-black" href="/menu">
              aqui
            </a>{" "}
            para para comer algo muy{" "}
            <span className="text-red-600 font-black">groso!</span>
          </p>
        </div>
      ) : (
        <div className="mt-20 w-full  bg-gray-200 pb-5">
          <div className="flex flex-col justify-center items-center lg:flex-row lg:items-start lg:max-w-[85%] lg:mx-auto lg:gap-x-2">
            <ul className="w-full pt-5 max-w-[95%] mx-auto flex flex-col gap-3">
              {/* Lista Productos */}
              {carrito?.map((producto) => (
                <ProductCard producto={producto} key={producto.id} />
              ))}
            </ul>

            {/* Resumen a pagar */}
            <div className="w-full max-w-[95%] mx-auto lg:w-1/2 bg-white mt-5 shadow-sm shadow-gray-400">
              <div className="flex flex-col p-3">
                <p className="font-bold text-lg pb-2">Resumen</p>
                <hr className="text-gray-700 pb-2" />
                {/* Sub Total */}
                <div className="flex justify-between mt-1">
                  <span className="font-semibold ">Sub Total</span>
                  <span className="font-bold">
                    $
                    {carrito?.reduce(
                      (previousValue, currentValue) =>
                        previousValue + parseInt(currentValue.precio),
                      0
                    )}
                  </span>
                </div>
                {/* Envio */}
                <div className="flex justify-between mt-1">
                  <span className="font-semibold">Envío</span>
                  <span className="font-bold">costo envio</span>
                </div>
                {/* Descuentos */}
                <div className="flex justify-between mt-1">
                  <span className="font-semibold">Desc.</span>
                  <span className="font-bold">$ desc</span>
                </div>
                <hr className="text-gray-700 mt-2" />
                {/* Total */}
                <div className="flex justify-between mt-1">
                  <span className="font-bold pb-2 text-red-600">Total</span>
                  <span className="font-bold pb-2 text-red-600">$ Total</span>
                </div>
                <button className="w-full md:w-1/2 lg:w-full xl:w-1/2 mx-auto my-2 bg-red-600 text-white py-2 rounded-md font-semibold">
                  Continuar compra
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </Layout>
  );
};

export default Carrito;
