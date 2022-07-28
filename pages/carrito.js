import { useContext } from "react";
import Layout from "../components/Layout";
import ProductCard from "../components/ProductCard";
import { UsuarioContext } from "../contexts/UsuarioContext";
import { CarritoContext } from "../contexts/CarritoContext";

const Carrito = () => {
  const { userGlobal } = useContext(UsuarioContext);
  const { carrito } = useContext(CarritoContext);

  const direccion = userGlobal?.direcciones?.[0].calle;
  // console.log(userGlobal);
  console.log(direccion);
  return (
    <Layout pagina={"carrito de compras"}>
      <main className="mt-20 w-full  bg-gray-200">
        <h2 className="text-center text-blue-600 uppercase text-2xl font-semibold pt-5 ">
          Carrito de Compras
        </h2>
        {/* <div className="w-full max-w-[85%] mx-auto text-xl">
          Tu pedido sera enviado a la siguiente direccion:{" "}
          <span className="text-red-600 font-bold text-2xl">{direccion}</span>
        </div> */}
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
          <div className=" pb-5">
            <div className="flex flex-col justify-center items-center lg:flex-row lg:items-start lg:max-w-[85%] lg:mx-auto lg:gap-x-2">
              <ul className="w-full pt-5 max-w-[95%] mx-auto flex flex-col gap-3">
                {/* Lista Productos */}
                {carrito?.map((producto) => (
                  <ProductCard producto={producto} key={producto.id} />
                ))}
              </ul>
              <div className="w-full flex flex-col max-w-[95%] mx-auto lg:w-1/2">
                {/* Domicilio */}
                <div className="w-full bg-gray-300 mt-5 shadow-sm shadow-gray-400">
                  <div className="flex flex-col p-3">
                    <h3 className="font-bold text-lg py-2">Domicilio</h3>
                    <hr className="text-gray-700 pb-2" />
                    <p>
                      Tu domicilio es:{" "}
                      <span className="text-blue-600 capitalize">
                        {direccion}
                      </span>
                    </p>
                    <p className="text-xs text-blue-600 pt-2">
                      Editar o elegir otro
                    </p>
                  </div>
                </div>
                {/* Resumen a pagar */}
                <div className="w-full bg-white mt-2 shadow-sm shadow-gray-400">
                  <div className="flex flex-col p-3">
                    <h3 className="font-bold text-lg pb-2">Resumen</h3>
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
                      <span className="font-semibold">
                        Envío a:{" "}
                        <span className="text-blue-600 capitalize">
                          {direccion}
                        </span>
                      </span>
                      <span className="font-bold">$200</span>
                    </div>
                    {/* Descuentos */}
                    <div className="flex justify-between mt-1">
                      <span className="font-semibold">Desc.</span>
                      <span className="font-bold">$ 0</span>
                    </div>
                    <hr className="text-gray-700 mt-2" />
                    {/* Total */}
                    <div className="flex justify-between mt-1">
                      <span className="font-bold pb-2 text-red-600">Total</span>
                      <span className="font-bold pb-2 text-red-600">
                        $ Total
                      </span>
                    </div>
                    <button className="w-full md:w-1/2 lg:w-full xl:w-1/2 mx-auto my-2 bg-red-600 text-white py-2 rounded-md font-semibold">
                      Continuar compra
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
    </Layout>
  );
};

export default Carrito;
