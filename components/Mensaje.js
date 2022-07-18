import React from "react";

const Mensaje = ({ mensaje, tipoError }) => {
  return (
    <>
      {tipoError === "error" ? (
        <p className="bg-red-600 w-full py-2  text-white uppercase font-semibold rounded-md text-center my-1 text-xs">
          {mensaje}
        </p>
      ) : (
        <p className="bg-green-600 w-full py-2  text-white uppercase font-semibold rounded-md text-center my-1 text-xs">
          {mensaje}
        </p>
      )}
    </>
  );
};

export default Mensaje;
