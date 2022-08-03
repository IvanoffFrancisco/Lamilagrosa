import React, { useState } from "react";

export default function FormPago() {
  const [formaDePago, setFormaDePago] = useState("");

  const hendleFormaDePago = (e) => {
    const forma = String(e.target.value);
    setFormaDePago(forma);
  };

  return (
    <>
      <div className="w-full bg-white shadow-sm shadow-gray-500 rounded-sm mt-2">
        <div className="flex flex-col p-3">
          <h3 className="font-bold text-lg pb-2">Elija un medio de pago</h3>
          <hr className="text-gray-700 pb-2" />
          <div className="flex justify-center gap-3">
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
          {formaDePago === "Delivery" ? (
            <h2>Pago Al Delivery</h2>
          ) : (
            <form className="flex flex-col" action="">
              <div>
                <label htmlFor="nombreTitular">Nombre del Titular</label>
                <input
                  className="w-full bg-gay-200 ring-1 rounded-sm pl-2"
                  type="text"
                  id="nombreTitular"
                  name="titular"
                />
              </div>

              <div>
                <label htmlFor="DNI">DNI</label>
                <input
                  className="w-full bg-gay-200 ring-1 rounded-sm pl-2"
                  type="text"
                  id="DNI"
                  name="dni"
                  minLength={7}
                  maxLength={8}
                />
              </div>

              <div>
                <label htmlFor="numeroDeTarjeta">N° de Tarjeta</label>
                <input
                  className="w-full bg-gay-200 ring-1 rounded-sm pl-2"
                  type="text"
                  id="NumeroDeTarjetar"
                  name="numeroDeTarjeta"
                  placeholder="**** **** **** ****"
                  minLength={16}
                  maxLength={18}
                />
              </div>

              <div>
                <label htmlFor="vencimiento">Vencimiento</label>
                <input
                  className="w-full bg-gay-200 ring-1 rounded-sm pl-2"
                  type="text"
                  id="vencimiento"
                  placeholder="mm/aaaa"
                  minLength={5}
                  maxLength={7}
                />
              </div>

              <div>
                {" "}
                <label htmlFor="codigoDeSeguridad">Cod. Seguridad</label>
                <input
                  className="w-full bg-gay-200 ring-1 rounded-sm pl-2"
                  type="text"
                  id="codigoDeSeguridad"
                  placeholder="###"
                  maxLength={3}
                />
              </div>

              <button className="w-full md:w-1/2 lg:w-full xl:w-1/2 mx-auto mt-5 mb-2 bg-red-600 text-white py-2 rounded-md font-semibold">
                Pagar Ahora
              </button>
            </form>
          )}
        </div>
      </div>
    </>
  );
}
