import { useContext } from "react";
import { UsuarioContext } from "../contexts/UsuarioContext";

const ResumenCarrito = ({
  carrito,
  sumaCarrito,
  metodoEnvio,
  handleContinuar,
  pago,
  formaDePago,
  procesando,
}) => {
  const { userGlobal } = useContext(UsuarioContext);

  return (
    <>
      <div className="w-full bg-white shadow-sm shadow-gray-500 rounded-sm">
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
                  (parseInt(currentValue.precio) +
                    (currentValue.adicional ? currentValue.adicional : 0)) *
                    currentValue.cantidad,
                0
              )}
            </span>
          </div>

          {/* Envio */}
          <div className="flex justify-between mt-1">
            <span className="font-semibold">
              Envío a:{" "}
              <span className="text-blue-600 capitalize">
                {metodoEnvio === "retira"
                  ? "Retira"
                  : userGlobal?.direcciones?.[0].calle}
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
              ${" "}
              {carrito?.reduce(
                (previousValue, currentValue) =>
                  previousValue +
                  (parseInt(currentValue.precio) +
                    (currentValue.adicional ? currentValue.adicional : 0)) *
                    currentValue.cantidad,
                0
              ) > 5000 || metodoEnvio === "retira"
                ? carrito?.reduce(
                    (previousValue, currentValue) =>
                      previousValue +
                      (parseInt(currentValue.precio) +
                        (currentValue.adicional ? currentValue.adicional : 0)) *
                        currentValue.cantidad,
                    0
                  )
                : carrito?.reduce(
                    (previousValue, currentValue) =>
                      previousValue +
                      (parseInt(currentValue.precio) +
                        (currentValue.adicional ? currentValue.adicional : 0)) *
                        currentValue.cantidad,
                    0
                  ) + 200}
            </span>
          </div>

          {metodoEnvio !== "" ? (
            <>
              {metodoEnvio === "retira" ? (
                <button
                  onClick={handleContinuar}
                  className={`w-full md:w-1/2 lg:w-full xl:w-1/2 mx-auto my-2 bg-red-600 text-white py-2 rounded-md font-semibold flex justify-center items-center ${
                    pago ? "hidden" : ""
                  }`}
                >
                  {procesando ?<div role="status">
                    <svg
                      aria-hidden="true"
                      className="mr-2 w-6 h-6 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                      viewBox="0 0 100 101"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                        fill="currentColor"
                      />
                      <path
                        d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                        fill="currentFill"
                      />
                    </svg>
                    <span className="sr-only">Loading...</span>
                  </div> :""}
                  
                  Confirmar
                </button>
              ) : (
                <button
                  onClick={handleContinuar}
                  className={`w-full md:w-1/2 lg:w-full xl:w-1/2 mx-auto my-2 bg-red-600 text-white py-2 rounded-md font-semibold ${
                    pago ? "hidden" : ""
                  }`}
                >
                  Continuar compra
                </button>
              )}
            </>
          ) : null}
        </div>
      </div>
      {pago && metodoEnvio === "enviar" ? (
        <p
          className={`text-center text-white font-bold py-3 bg-red-600 my-2 rounded-sm shadow-sm shadow-red-900 ${
            formaDePago !== "" ? "hidden" : ""
          }`}
        >
          Seleccione el metodo de pago
        </p>
      ) : (
        ""
      )}
    </>
  );
};

export default ResumenCarrito;
