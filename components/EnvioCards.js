import { BtnSeleccionar } from "../components/BtnSeleccionar";

const EnvioCards = ({
  direccion,
  editarDomicilio,
  seteditarDomicilio,
  handleDomicilio,
  metodoEnvio,
  setMetodoEnvio,
}) => {
  const handleEnvio = (e) => {
    setMetodoEnvio(e.target.name);
  };

  return (
    <>
      <div
        className={`w-full bg-white mt-3 lg:mt-5 shadow-sm shadow-gray-500 rounded-sm ${
          metodoEnvio === "retira" && "border-l-4 border-r-4 border-blue-600"
        }`}
      >
        <div className="flex flex-col pl-3 pr-3 pb-3">
          <div className="flex justify-between items-center py-2">
            <h3 className="font-semibold">Retirá tu pedido</h3>
            <BtnSeleccionar handleEnvio={handleEnvio} name="retira" />
          </div>
          <hr className="text-gray-700 pb-2" />
          <p className="text-xs">
            En nuestra tienda:{" "}
            <span className="text-blue-600 capitalize">Dorrego 27</span> ,
            B8000FLB Bahía Blanca, Provincia de Buenos Aires
          </p>
        </div>
      </div>

      <div
        className={`w-full bg-white mt-3 lg:mt- 2 shadow-sm shadow-gray-500 rounded-sm ${
          metodoEnvio === "enviar" && "border-l-4 border-r-4 border-blue-600"
        }`}
      >
        <div className="flex flex-col pl-3 pr-3 pb-3">
          <div className="flex justify-between items-center py-2">
            <h3 className="font-semibold">Recibí tu pedido</h3>
            <BtnSeleccionar handleEnvio={handleEnvio} name="enviar" />
          </div>
          <hr className="text-gray-700 pb-2" />
          <div className="flex justify-between items-center">
            <p className="text-xs">
              En tu domicilio:{" "}
              <span className="text-blue-600 capitalize">{direccion}</span>
            </p>
            <p
              onClick={() => seteditarDomicilio(true)}
              className="text-[10px] text-red-600 cursor-pointer pt-1"
            >
              {direccion === "" ? "" : "Editar domicilio"}
            </p>
          </div>

          <div
            // Mestra o no el input
            className={`w-full ${
              editarDomicilio || direccion === "" ? "" : "hidden"
            }`}
          >
            <label className="text-[10px] text-blue-600">
              {direccion === "" ? "Ingresa un domicilio" : "Edita tu domicilio"}
            </label>
            <div className="flex justify-between gap-1">
              <input
                onBlur={handleDomicilio}
                type="text"
                className="bg-gray-100 outline-none text-sm py-1 pl-2 rounded-md w-full text-blue-600 capitalize border border-blue-600"
                placeholder="Domicilio"
              />
              <button className="bg-blue-600 text-[10px] text-white py-1 px-3 rounded-md">
                Aceptar
              </button>
            </div>
            {/* {direccion === "" ? (
              <div className="flex justify-between gap-1">
                <input
                  onBlur={handleDomicilio}
                  type="text"
                  className="bg-gray-100 outline-none text-sm py-1 pl-2 rounded-md w-full text-blue-600 capitalize border border-blue-600"
                  placeholder="Domicilio"
                />
                <button className="bg-blue-600 text-[10px] text-white py-1 px-3 rounded-md">
                  Aceptar
                </button>
              </div>
            ) : (
              <input
                onChange={handleDomicilio}
                type="text"
                className="bg-gray-100 outline-none text-sm py-1 pl-2 rounded-md w-full text-blue-600 capitalize border border-blue-600"
                value={direccion}
              />
            )} */}
          </div>

          <p className="text-xs text-red-600 text-center pt-3 animate-pulse">
            Con tu compra superior a $5000 el envio es sin cago
          </p>
        </div>
      </div>
    </>
  );
};

export default EnvioCards;
