import Link from "next/link";
import React from "react";

const Articulo1 = () => {
  return (
    <div className="w-full max-w-[90%] mx-auto flex flex-col text-center items-center mt-5 md:mt-10 lg:mt-15 xl:mt-20">
      <h2 className="text-xl lg:text-2xl xl:text-3xl font-bold text-red-700 mx-auto tracking-wide">
        No dejes para mañana lo que puedas comer hoy!!!
      </h2>
      <h2 className="lg:text-xl xl:text-xl text-black font-semibold mx-auto tracking-wide mt-8 lg:mt-10 xl:mt-14 mb-4">
        Date el gusto con nuestra amplia variedad de menúes
      </h2>
      <Link href="/menu">
        <button className="py-2.5 lg:text-lg px-6 text-white font-semibold text-md bg-blue-600 rounded-xl uppercase shadow-md shadow-blue-900 hover:shadow-2xl transform transition-all over:-translate-y-2 duration-200 hover:scale-110 hover:-rotate-3 text-xs border-4 border-double hover:border-double hover:border-blue-700 hover:bg-white hover:text-blue-600 hover:font-black ">
          Menú
        </button>
      </Link>
      {/* <h2 className="lg:text-xl xl:text-xl text-black font-semibold mx-auto tracking-wide mt-8 lg:mt-10 xl:mt-24">
        O disfruta ahorrando con estas increibles promos
      </h2> */}
    </div>
  );
};

export default Articulo1;
