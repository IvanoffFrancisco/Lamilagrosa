import React from "react";

const EnvioCard = ({
  userGlobal,
  hendleDomicilio,
  direccion,
  editarDomicilio,
}) => {
  
  return (
    <div className="w-full bg-white mt-3 lg:mt-5 shadow-sm shadow-gray-500 rounded-sm">
      <div className="flex flex-col p-3">
        <h3 className="font-semibold pb-2">Recibí tu pedido</h3>
        <hr className="text-gray-700 pb-2" />
        <p className="text-xs">
          En tu domicilio:{" "}
          <span className="text-blue-600 capitalize">
            {userGlobal?.direcciones?.[0].calle}
          </span>
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

        {/* editar domicilio */}
        <div className={`w-full ${editarDomicilio ? "" : "hidden"}`}>
          <label className="text-xs">Edita tu domicilio: </label>
          <input
            onChange={hendleDomicilio}
            type="text"
            className="bg-gray-100 outline-none text-sm py-1.5 pl-2 rounded-sm w-full text-blue-600 capitalize"
            value={direccion}
            laceholder="Domicilio"
          />
        </div>
      </div>
    </div>
  );
};

export default EnvioCard;
