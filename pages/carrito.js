import { useContext, useState } from "react";
import Layout from "../components/Layout";
import ProductCard from "../components/ProductCard";
import { UsuarioContext } from "../contexts/UsuarioContext";
import { CarritoContext } from "../contexts/CarritoContext";
import EnvioCards from "../components/EnvioCards";
import ResumenCarrito from "../components/ResumenCarrito";
import GuarnicionCarritoCard from '../components/GuarnicionCarritoCard';

const Carrito = () => {
  const { userGlobal } = useContext(UsuarioContext);
  const { carrito } = useContext(CarritoContext);
  const [sumaCarrito, setSumaCarrito] = useState(
    carrito?.reduce(
      (previousValue, currentValue) =>
        previousValue + (parseInt(currentValue.precio) + currentValue.adicional) * currentValue.cantidad,
      0
    )
  );
  const [direccion, setDireccion] = useState(
    userGlobal?.direcciones?.[0].calle || ""
  );

  const [metodoEnvio, setMetodoEnvio] = useState("retira");
  const [editarDomicilio, seteditarDomicilio] = useState(false);

  const handleDomicilio = (e) => {
    if (e.target.value==="") {
      alert("Domicilio no valido");
      return;
    }
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
                  {
                    carrito?.map(menus=>{
                      if(menus.hasOwnProperty('menu')){
                        return <ProductCard
                                  producto={menus}
                                  key={menus.id}
                                  setSumaCarrito={setSumaCarrito}
                              />
                      }else{
                          return <GuarnicionCarritoCard producto={menus} setSumaCarrito={setSumaCarrito}/>
                      }
                    })
                  }
                </ul>

                <div className="w-full flex flex-col max-w-[95%] mx-auto lg:w-1/2">
                  <EnvioCards
                    direccion={direccion}
                    editarDomicilio={editarDomicilio}
                    seteditarDomicilio={seteditarDomicilio}
                    handleDomicilio={handleDomicilio}
                    metodoEnvio={metodoEnvio}
                    setMetodoEnvio={setMetodoEnvio}
                  />

                  <ResumenCarrito
                    carrito={carrito}
                    direccion={direccion}
                    sumaCarrito={sumaCarrito}
                    metodoEnvio={metodoEnvio}
                  />
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