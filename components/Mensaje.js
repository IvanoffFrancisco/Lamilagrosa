import React from "react";

const Mensaje = ({ mensaje, tipoError }) => {
  return (
    <>
      {tipoError === "error" ? (
        <p className="bg-red-600 w-full py-1.5 text-white font-semibold rounded-md text-center my-1 text-md">
          {mensaje}
        </p>
      ) : (
        <p className="bg-green-600 w-full py-1.5 text-white font-semibold rounded-md text-center my-1 text-md">
          {mensaje}
        </p>
      )}
    </>
  );
};

export default Mensaje;
