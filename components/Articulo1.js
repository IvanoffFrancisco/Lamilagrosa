import Link from "next/link";
import React from "react";

const Articulo1 = () => {
  return (
    <div className="w-full max-w-[90%] mx-auto flex flex-col text-center items-center mt-10">
      <h2 className="text-xl lg:text-2xl xl:text-3xl font-bold text-red-700 mx-auto tracking-wide">
        No dejes para mañana lo que puedas comer hoy!!!
      </h2>
      <h2 className="lg:text-xl xl:text-xl text-black font-semibold mx-auto tracking-wide mt-8 lg:mt-10 xl:mt-11 mb-2">
        Date el gusto con nuestra amplia variedad de menúes
      </h2>
      <Link href="/menu">
        <button className="py-2 lg:py-2.5 px-6 text-white font-semibold text-md bg-blue-600 rounded-xl uppercase shadow-md shadow-blue-900 hover:shadow-lg over:bg-white over:border-2 over:border-blue-600 over:text-blue-600  transform transition-all over:-translate-y-2 duration-200 hover:scale-110 hover:rotate-3 text-xs">
          Menú
        </button>
      </Link>
    </div>
  );
};

export default Articulo1;
