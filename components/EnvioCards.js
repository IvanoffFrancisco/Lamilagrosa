import { useContext, useState } from "react";
import { UsuarioContext } from "../contexts/UsuarioContext";

import { BtnSeleccionar } from "../components/BtnSeleccionar";
import Mensaje from "./Mensaje";

const EnvioCards = ({
  direccion,
  editarDomicilio,
  seteditarDomicilio,
  handleDomicilio,
  metodoEnvio,
  setMetodoEnvio,
  handleLocal,
  local,
}) => {
  const { userGlobal } = useContext(UsuarioContext);

  const [tipoError, setTipoError] = useState("");
  const [mensaje, setMensaje] = useState("");

  const handleEnvio = (e) => {
    if (e.target.name === "enviar") {
      setMetodoEnvio(e.target.name);
    } else if (local === undefined) {
      setTipoError("error");
      setMensaje("Selecciona un local");
      eliminarMensaje();
      return;
    } else setMetodoEnvio(e.target.name);
  };

  const eliminarMensaje = () => {
    setTimeout(() => {
      setTipoError("");
    }, 2500);
  };

  return (
    <>
      <div
        className={`w-full bg-white shadow-sm shadow-gray-500 rounded-sm ${
          metodoEnvio === "retira" && "border-l-4 border-r-4 border-blue-600"
        }`}
      >
        <div className="flex flex-col pl-3 pr-3 pb-3">
          <div className="flex justify-between items-center py-2">
            <h3 className="font-semibold">Retirá tu pedido</h3>
            <BtnSeleccionar handleEnvio={handleEnvio} name="retira" />
          </div>
          <hr className="text-gray-700 pb-2" />
          <p className="text-xs font-bold pb-1">Elije un local:</p>
          <form className="text-xs flex flex-col gap-1">
            <div className="flex items-center gap-1">
              <input
                type="radio"
                id="direccion1"
                name="direccion"
                value="Dorrego 27, Bahía Blanca, Provincia de Buenos Aires"
                onChange={handleLocal}
              />
              <label htmlFor="direccion1">
                Dorrego 27, Bahía Blanca, Provincia de Buenos Aires
              </label>
              <br />
            </div>
            <div className="flex items-center gap-1">
              <input
                type="radio"
                id="direccion2"
                name="direccion"
                value="Carlos Pellegrini 1252 Corrientes, Provincia de Corrientes"
                onChange={handleLocal}
              />
              <label htmlFor="direccion2">
                Carlos Pellegrini 1252 Corrientes, Provincia de Corrientes
              </label>
              <br />
            </div>
            <div className="flex items-center gap-1">
              <input
                type="radio"
                id="direccion3"
                name="direccion"
                value="Av. Sarmiento 266 Resistencia, Chaco"
                onChange={handleLocal}
              />
              <label htmlFor="direccion3">
                Av. Sarmiento 266 Resistencia, Chaco
              </label>
            </div>
            {/* <button className="bg-blue-600 py-1.5 px-4 text-white text-xs rounded-md mt-1">
            Cancelar Retiro
          </button> */}
          </form>
        </div>
      </div>
      {tipoError === "error" ? (
        <Mensaje mensaje={mensaje} tipoError={tipoError} />
      ) : null}
      <div
        className={`w-full bg-white mt-3 lg:mt-2 mb-2 shadow-sm shadow-gray-500 rounded-sm ${
          metodoEnvio === "enviar" && "border-l-4 border-r-4 border-blue-600"
        }`}
      >
        <div className="relative pl-3 pr-3 pb-3 mb-3 h-[143px]">
          <div className="flex justify-between items-center py-2">
            <h3 className="font-semibold">Recibí tu pedido</h3>
            <BtnSeleccionar handleEnvio={handleEnvio} name="enviar" />
          </div>
          <hr className="text-gray-700 pb-2" />
          <div className="flex justify-between items-baseline">
            <p className="text-xs">
              {userGlobal?.direcciones?.[0].calle === "" ? "" : "En tu domicilio: "}

              <span className="text-blue-600 capitalize">{userGlobal?.direcciones?.[0].calle}</span>
            </p>
            <p
              onClick={() => seteditarDomicilio(true)}
              className="text-xs text-red-600 cursor-pointer pt-1"
            >
              {userGlobal?.direcciones?.[0].calle === "" ? "" : "Editar domicilio"}
            </p>
          </div>

          <div
            // Mestra o no el input
            className={`w-full mt-1 ${
              editarDomicilio || userGlobal?.direcciones?.[0].calle === "" ? "" : "hidden"
            }`}
          >
            {/* <label className="text-xs text-blue-600">
              
            </label> */}
            <div className="flex justify-between gap-1">
              <input
                onBlur={handleDomicilio}
                type="text"
                className="bg-gray-100 outline-none text-sm py-1 pl-2 rounded-md w-full text-blue-600 capitalize border border-blue-600"
                placeholder={
                  userGlobal?.direcciones?.[0].calle === ""
                    ? "Ingresa un domicilio"
                    : "Edita tu domicilio"
                }
              />
              <input
                onBlur={handleDomicilio}
                type="text"
                className="bg-gray-100 outline-none text-sm py-1 pl-2 rounded-md w-full text-blue-600 capitalize border border-blue-600"
                placeholder="Departamento N°"
              />
              <button className="bg-blue-600 text-xs text-white py-1 px-3 rounded-md">
                Aceptar
              </button>
            </div>
          </div>
          <p className="w-full text-xs text-red-600 text-center pt-3 animate-pulse absolute bottom-3">
            Con tu compra superior a $5000 el envio es sin cago
          </p>
        </div>
      </div>
    </>
  );
};

export default EnvioCards;
