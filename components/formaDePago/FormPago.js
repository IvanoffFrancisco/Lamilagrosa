import React, { useState } from "react";

export default function FormPago() {
  const [formaDePago, setFormaDePago] = useState("");
  const [tarjeta, setTarjeta] = useState({
    nombreTitular: "",
    DNI: "",
    NumeroDeTarjetar: "",
    vencimiento: "",
    codigoDeSeguridad: "",
  });

  const hendleFormaDePago = (e) => {
    const forma = String(e.target.value);
    setFormaDePago(forma);
  };

  const handleSubmit = () => {
    e.preventDefault();
  };

  const handleChange = (e) => {
    setTarjeta({
      ...tarjeta,
      [e.target.id]: e.target.value,
    });
  };

  return (
    <>
      <div className="w-full bg-white shadow-sm shadow-gray-500 rounded-sm mt-2">
        <div className="flex flex-col p-3">
          <h3 className="font-bold text-lg pb-2">Elija un metodo de pago</h3>
          <hr className="text-gray-700 pb-2" />
          <div className="flex justify-center gap-3 mb-4 mt-2 font-semibold">
            <input
              type="radio"
              id="pago"
              name="FormaDePago"
              value="Delivery"
              onChange={hendleFormaDePago}
            />
            <label htmlFor="html">Pago al Delivery</label>
            <input
              type="radio"
              id="pago"
              name="FormaDePago"
              value="Tarjeta"
              onChange={hendleFormaDePago}
            />
            <label htmlFor="css">Pago con tarjeta</label>
          </div>
          <form
            onSubmit={handleSubmit}
            className="w-full flex flex-col gap-2"
            action=""
          >
            {formaDePago === "Delivery" ? (
              <h2 className="text-center py-2 font-semibold">
                Su pedido deberá ser abonado al delivery
              </h2>
            ) : null}
            {formaDePago === "Tarjeta" ? (
              <div className="flex flex-col gap-2">
                <div className="w-full text-center text-sm ">
                  <label className="text-center " htmlFor="nombreTitular">
                    Nombre del Titular
                  </label>
                  <input
                    onChange={handleChange}
                    className="w-full bg-gray-200 py-1.5 rounded-md pl-3 outline-none border border-blue-400"
                    type="text"
                    id="nombreTitular"
                    name="titular"
                    placeholder="Ingrese su nombre"
                  />
                </div>

                <div className="w-full text-center text-sm">
                  <label htmlFor="DNI">DNI</label>
                  <input
                    onChange={handleChange}
                    className="w-full bg-gray-200 py-1.5 rounded-md pl-3 outline-none border border-blue-400"
                    type="text"
                    id="DNI"
                    name="dni"
                    minLength={7}
                    maxLength={8}
                    placeholder="Ingrese su DNI"
                  />
                </div>

                <div className="w-full text-center text-sm">
                  <label className="text-center" htmlFor="numeroDeTarjeta">
                    N° de Tarjeta
                  </label>
                  <input
                    onChange={handleChange}
                    className="w-full bg-gray-200 py-1.5 rounded-md pl-3 outline-none border border-blue-400"
                    type="text"
                    id="NumeroDeTarjetar"
                    name="numeroDeTarjeta"
                    placeholder="**** **** **** ****"
                    minLength={16}
                    maxLength={18}
                  />
                </div>

                <div className="w-full text-center">
                  <label className="text-center text-sm" htmlFor="vencimiento">
                    Vencimiento
                  </label>
                  <input
                    onChange={handleChange}
                    className="w-full bg-gray-200 py-1.5 rounded-md pl-3 outline-none border border-blue-400"
                    type="text"
                    id="vencimiento"
                    placeholder="mm/aa"
                    minLength={5}
                    maxLength={7}
                  />
                </div>

                <div className="w-full text-center text-sm">
                  {" "}
                  <label className="text-center" htmlFor="codigoDeSeguridad">
                    Cod. Seguridad
                  </label>
                  <input
                    onChange={handleChange}
                    className="w-full bg-gray-200 py-1.5 rounded-md pl-3 outline-none border border-blue-400"
                    type="text"
                    id="codigoDeSeguridad"
                    placeholder="###"
                    maxLength={3}
                  />
                </div>
              </div>
            ) : null}

            <button
              className={`w-full md:w-1/2 lg:w-full xl:w-1/2 mx-auto mt-5 mb-2 bg-red-600 text-white py-2 rounded-md font-semibold  ${
                formaDePago ? "display-block" : "hidden"
              }`}
            >
              Pagar Ahora
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
