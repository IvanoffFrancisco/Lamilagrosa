import Link from "next/link";
import React from "react";

const Articulo1 = () => {
  return (
    <div className="w-full h-auto flex flex-col items-center my-20 gap-y-7">
      <h2 className="text-3xl font-bold text-red-800 mx-auto tracking-wide">
        No dejes para mañana lo que puedas comer hoy!!!
      </h2>
      <h2 className="text-2xl text-black font-bold mx-auto tracking-wide">
        Date el gusto con nuestra amplia variedad de menúes
      </h2>
      <Link href="/menu">
        <button className="py-2 px-6 mt-6 text-white font-semibold border-2 border-blue-800 text-md bg-blue-600 rounded-xl hover:font-bold uppercase shadow-blue-900 hover:bg-white hover:border-2 hover:border-blue-600 hover:text-blue-600  transform transition-all hover:-translate-y-2 duration-300 shadow-md hover:shadow-2xl">
          Menú
        </button>
      </Link>
    </div>
  );
};

export default Articulo1;
