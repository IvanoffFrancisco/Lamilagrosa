import React, { useState } from "react";

const TipoMila = () => {
  const [tipoMenu, setTipoMenu] = useState("Todas");

  const handleSeleccion = (e) => {
    setTipoMenu(e.target.innerHTML);
  };

  return (
    <>
      <div className="sticky w-full h-auto bg-blue-600 top-20 z-[800] shadow-md shadow-gray-600">
        <ul className="flex justify-center items-center p-3 gap-x-5 text-white text-xs md:text-sm md:tracking-wide md:gap-x-7 lg:text-base lg:gap-x-8 xl:gap-x-10 2xl:gap-x-12 2xl:text-lg">
          <li onClick={handleSeleccion}>
            <p
              className={`cursor-pointer hover:border-b border-b-white ${
                tipoMenu === "Sandwich" ? "border-b border-b-white" : ""
              }`}
            >
              Sandwich
            </p>
          </li>
          <li onClick={handleSeleccion}>
            <p
              className={`cursor-pointer  hover:border-b border-b-white ${
                tipoMenu === "Carne" ? "border-b border-b-white" : ""
              }`}
            >
              Carne
            </p>
          </li>
          <li onClick={handleSeleccion}>
            <p
              className={`cursor-pointer hover:border-b border-b-white ${
                tipoMenu === "Pollo" ? "border-b border-b-white" : ""
              }`}
            >
              Pollo
            </p>
          </li>
          <li onClick={handleSeleccion}>
            <p
              className={`cursor-pointer hover:border-b border-b-white ${
                tipoMenu === "Veganas" ? "border-b border-b-white" : ""
              }`}
            >
              Veganas
            </p>
          </li>
          <li onClick={handleSeleccion}>
            <p
              className={`cursor-pointer  hover:border-b border-b-white ${
                tipoMenu === "Rellenas" ? "border-b border-b-white" : ""
              }`}
            >
              Rellenas
            </p>
          </li>
          <li onClick={handleSeleccion}>
            <p
              className={`cursor-pointer  hover:border-b border-b-white ${
                tipoMenu === "Todas" ? "border-b border-b-white" : ""
              }`}
            >
              Todas
            </p>
          </li>
        </ul>
      </div>
      <div className="max-w-[85%] mx-auto lg:px-8 xl:px-12 2xl:px-16 my-16 text-2xl tracking-wide font-semibold">
        <p>{tipoMenu}</p>
      </div>
    </>
  );
};

export default TipoMila;
