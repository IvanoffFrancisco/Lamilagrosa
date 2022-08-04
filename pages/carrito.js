import { useContext, useState } from "react";
import Layout from "../components/Layout";
import ProductCard from "../components/ProductCard";
import EnvioCards from "../components/EnvioCards";
import ResumenCarrito from "../components/ResumenCarrito";
import GuarnicionCarritoCard from "../components/GuarnicionCarritoCard";
import FormPago from "../components/formaDePago/FormPago";
import { UsuarioContext } from "../contexts/UsuarioContext";
import { CarritoContext } from "../contexts/CarritoContext";

import { FaTrash } from "react-icons/fa";

const Carrito = () => {
  const { userGlobal } = useContext(UsuarioContext);
  const { carrito, eliminarTodo, totalCarrito } = useContext(CarritoContext);
  const [sumaCarrito, setSumaCarrito] = useState(
    carrito?.reduce(
      (previousValue, currentValue) =>
        previousValue +
        (parseInt(currentValue.precio) +
          (currentValue.adicional ? currentValue.adicional : 0)) *
          currentValue.cantidad,
      0
    )
  );

  const [direccion, setDireccion] = useState(
    userGlobal?.direcciones?.[0].calle || ""
  );
  const [local, setLocal] = useState();
  const [metodoEnvio, setMetodoEnvio] = useState("");
  const [editarDomicilio, seteditarDomicilio] = useState(false);

  const [pago, setPago] = useState(false);
  const [formaDePago, setFormaDePago] = useState("");

  const handleDomicilio = (e) => {
    if (e.target.value === "") {
      alert("Domicilio no valido");
      return;
    }
    setDireccion(e.target.value);
  };

  const handleLocal = (e) => {
    setLocal(e.target.value);
  };

  const handleContinuar = (e) => {
    if (metodoEnvio === "retira" || metodoEnvio === "enviar") setPago(true);
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
            <h2 className="bg-blue-600 text-white text-center uppercase md:text-xl font-semibold py-3 mb-3">
              Carrito de Compras
            </h2>
            <div className="pb-5">
              <div className="flex flex-col justify-center items-center lg:flex-row lg:items-start lg:max-w-[85%] lg:mx-auto lg:gap-x-2">
                <ul className="w-full max-w-[95%] mx-auto flex flex-col gap-2 relative">
                  {carrito?.map((menus) => {
                    if (menus.hasOwnProperty("menu")) {
                      return (
                        <ProductCard
                          producto={menus}
                          key={menus.id}
                          setSumaCarrito={setSumaCarrito}
                        />
                      );
                    } else {
                      return (
                        <GuarnicionCarritoCard
                          producto={menus}
                          key={menus.id}
                          setSumaCarrito={setSumaCarrito}
                        />
                      );
                    }
                  })}
                  <FaTrash
                    onClick={() => eliminarTodo()}
                    className="text-xl absolute right-2 -bottom-8 text-red-600 cursor-pointer"
                  />
                </ul>

                <div className="w-full flex flex-col max-w-[95%] mx-auto lg:w-1/2">
                  <p
                    className={`text-center text-white font-bold py-3 bg-red-600 mb-2 rounded-md shadow-sm shadow-red-900 ${
                      metodoEnvio !== "" ? "hidden" : ""
                    }`}
                  >
                    Seleccione el metodo de envio
                  </p>
                  <div
                    className={`${
                      pago && metodoEnvio === "enviar"
                        ? "translate-x-[700px] ease-in duration-300"
                        : ""
                    }`}
                  >
                    <EnvioCards
                      direccion={direccion}
                      editarDomicilio={editarDomicilio}
                      seteditarDomicilio={seteditarDomicilio}
                      handleDomicilio={handleDomicilio}
                      metodoEnvio={metodoEnvio}
                      setMetodoEnvio={setMetodoEnvio}
                      handleLocal={handleLocal}
                      local={local}
                    />
                  </div>
                  <div
                    className={`${
                      pago && metodoEnvio === "enviar"
                        ? "-translate-y-[304px] top-0 ease-in duration-500"
                        : ""
                    }`}
                  >
                    <ResumenCarrito
                      carrito={carrito}
                      direccion={direccion}
                      sumaCarrito={sumaCarrito}
                      metodoEnvio={metodoEnvio}
                      totalCarrito={totalCarrito}
                      handleContinuar={handleContinuar}
                      pago={pago}
                      formaDePago={formaDePago}
                    />
                    {pago ? (
                      <FormPago
                        formaDePago={formaDePago}
                        setFormaDePago={setFormaDePago}
                        metodoEnvio={metodoEnvio}
                      />
                    ) : null}
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
