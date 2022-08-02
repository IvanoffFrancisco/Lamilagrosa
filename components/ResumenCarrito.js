const ResumenCarrito = ({ carrito, sumaCarrito, direccion, metodoEnvio }) => {
  return (
    <div className="w-full bg-white mt-2 shadow-sm shadow-gray-500 rounded-sm">
      <div className="flex flex-col p-3">
        <h3 className="font-bold text-lg pb-2">Resumen</h3>
        <hr className="text-gray-700 pb-2" />
        {/* Sub Total */}
        <div className="flex justify-between mt-1">
          <span className="font-semibold ">Sub Total</span>
          <span className="font-bold">
            ${/* {sumaCarrito} */}
            {carrito?.reduce(
              (previousValue, currentValue) =>
                previousValue +
                (parseInt(currentValue.precio) + currentValue.adicional) * currentValue.cantidad  ,
              0
            )}
          </span>
        </div>

        {/* Envio */}
        <div className="flex justify-between mt-1">
          <span className="font-semibold">
            Envío a:{" "} 
            <span className="text-blue-600 capitalize">
              {metodoEnvio === "retira" ? "Retira" : direccion}
            </span>
          </span>
          <span className="font-bold text-xs">
            {sumaCarrito > 5000 || metodoEnvio === "retira"
              ? "sin cargo"
              : "$200"}
          </span>
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
            $
            {sumaCarrito > 5000 || metodoEnvio === "retira"
              ? sumaCarrito
              : sumaCarrito + 200}
          </span>
        </div>
        <button className="w-full md:w-1/2 lg:w-full xl:w-1/2 mx-auto my-2 bg-red-600 text-white py-2 rounded-md font-semibold">
          Continuar compra
        </button>
      </div>
    </div>
  );
};

export default ResumenCarrito;
