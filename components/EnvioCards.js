const EnvioCards = ({
  editarDomicilio,
  seteditarDomicilio,
  direccion,
  hendleDomicilio,
}) => {
  return (
    <>
      <div className="w-full bg-white mt-3 lg:mt-5 shadow-sm shadow-gray-500 rounded-sm">
        <div className="flex flex-col p-3">
          <h3 className="font-semibold pb-2">Recibí tu pedido</h3>
          <hr className="text-gray-700 pb-2" />
          <p className="text-xs">
            En tu domicilio:{" "}
            <span className="text-blue-600 capitalize">{direccion}</span>
          </p>

          <p
            onClick={() => seteditarDomicilio(true)}
            className="text-[10px] text-blue-600 cursor-pointer pt-1"
          >
            Editar o elegir otro
          </p>
          <p className="text-xs text-red-600 text-center pt-2">
            Con tu compra superior a $5000 el envio es sin cago
          </p>

          <div className={`w-full ${editarDomicilio ? "" : "hidden"}`}>
            <label className="text-xs">Edita tu domicilio: </label>
            <input
              onChange={hendleDomicilio}
              type="text"
              className="bg-gray-100 outline-none text-sm py-1.5 pl-2 rounded-md w-full text-blue-600 capitalize border border-blue-600"
              value={direccion}
              laceholder="Domicilio"
            />
          </div>
        </div>
      </div>

      <div className="w-full bg-white mt-3 lg:mt-2 shadow-sm shadow-gray-500 rounded-sm">
        <div className="flex flex-col p-3">
          <h3 className="font-semibold pb-2">Retirá tu pedido</h3>
          <hr className="text-gray-700 pb-2" />
          <p className="text-xs">
            En nuestra tienda:{" "}
            <span className="text-blue-600 capitalize">Dorrego 27</span> ,
            B8000FLB Bahía Blanca, Provincia de Buenos Aires
          </p>
        </div>
      </div>
    </>
  );
};

export default EnvioCards;
