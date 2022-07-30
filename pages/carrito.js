import { useContext, useState } from "react";
import Layout from "../components/Layout";
import ProductCard from "../components/ProductCard";
import { UsuarioContext } from "../contexts/UsuarioContext";
import { CarritoContext } from "../contexts/CarritoContext";
import EnvioCard from "../components/EnvioCard";

const Carrito = () => {
  const { userGlobal } = useContext(UsuarioContext);
  const { carrito, totalCarrito } = useContext(CarritoContext);

  const [direccion, setDireccion] = useState(
    userGlobal?.direcciones?.[0].calle
  );
  const [editarDomicilio, seteditarDomicilio] = useState(false);

  const hendleDomicilio = (e) => {
    setDireccion(e.target.value);
  };

  return (
    <Layout pagina={"carrito de compras"}>
      <main className="mt-20 pb-10 w-full bg-gray-200">
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
          <>
            <h2 className="bg-blue-600 text-white text-center uppercase md:text-xl font-semibold py-3">
              Carrito de Compras
            </h2>
            <div className="pb-5">
              <div className="flex flex-col justify-center items-center lg:flex-row lg:items-start lg:max-w-[85%] lg:mx-auto lg:gap-x-2">
                <ul className="w-full pt-5 max-w-[95%] mx-auto flex flex-col gap-2">
                  {/* Lista Productos */}
                  {carrito?.map((producto) => (
                    <ProductCard
                      producto={producto}
                      key={producto.id}
                    />
                  ))}
                </ul>
                <div className="w-full flex flex-col max-w-[95%] mx-auto lg:w-1/2">
                  {/* Domicilio */}
                  <EnvioCard
                    userGlobal={userGlobal}
                    hendleDomicilio={hendleDomicilio}
                    direccion={direccion}
                    editarDomicilio={editarDomicilio}
                  />

                  <div className="w-full bg-white mt-3 lg:mt-2 shadow-sm shadow-gray-500 rounded-sm">
                    <div className="flex flex-col p-3">
                      <h3 className="font-semibold pb-2">Retirá tu pedido</h3>
                      <hr className="text-gray-700 pb-2" />
                      <p className="text-xs">
                        En nuestra tienda:{" "}
                        <span className="text-blue-600 capitalize">
                          Dorrego 27
                        </span>{" "}
                        , B8000FLB Bahía Blanca, Provincia de Buenos Aires
                      </p>
                    </div>
                  </div>

                  {/* Resumen a pagar */}
                  <div className="w-full bg-white mt-2 shadow-sm shadow-gray-500 rounded-sm">
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
                              previousValue +
                              parseInt(currentValue.precio) *
                                currentValue.cantidad,
                            0
                          )}
                        </span>
                      </div>

                      {/* Envio */}
                      {carrito?.reduce(
                        (previousValue, currentValue) =>
                          previousValue +
                          currentValue.precio * currentValue.cantidad,
                        0
                      ) < 5000 ? (
                        <div className="flex justify-between mt-1">
                          <span className="font-semibold">
                            Envío a:{" "}
                            <span className="text-blue-600 capitalize">
                              {userGlobal?.direcciones?.[0].calle}
                            </span>
                          </span>
                          <span className="font-bold">$200</span>{" "}
                        </div>
                      ) : (
                        <div className="flex justify-between mt-1">
                          <span className="font-semibold">
                            Envío a:{" "}
                            <span className="text-blue-600 capitalize">
                              {userGlobal?.direcciones?.[0].calle}
                            </span>{" "}
                          </span>
                          <span className="font-semibold text-xs">
                            Sin Cargo
                          </span>{" "}
                        </div>
                      )}

                      {/* Descuentos */}
                      <div className="flex justify-between mt-1">
                        <span className="font-semibold">Desc.</span>
                        <span className="font-bold">$ 0</span>
                      </div>
                      <hr className="text-gray-700 mt-2" />
                      {/* Total */}
                      <div className="flex justify-between mt-1">
                        <span className="font-bold pb-2 text-red-600">
                          Total
                        </span>
                        <span className="font-bold pb-2 text-red-600">
                          $
                          {totalCarrito < 5000
                            ? carrito?.reduce(
                                (previousValue, currentValue) =>
                                  previousValue +
                                  currentValue.precio * currentValue.cantidad,
                                0
                              ) +200
                            : carrito?.reduce(
                                (previousValue, currentValue) =>
                                  previousValue +
                                  currentValue.precio * currentValue.cantidad,
                                0
                              ) }
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
          </>
        )}
      </main>
    </Layout>
  );
};

export default Carrito;
