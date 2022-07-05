import Link from "next/link";
import React from "react";

const Articulo1 = () => {
  return (
    <div className="w-full h-auto flex flex-col items-center mt-10 gap-y-7">
      <h2 className="text-3xl mx-auto tracking-wide">
        No dejes para mañana lo que puedas comer hoy!!!
      </h2>
      <h2 className="text-xl mx-auto tracking-wide">
        Date el gusto con nuestra amplia variedad de menúes
      </h2>
      <Link href="/menu">
        <button className="p-3 px-6 text-white bg-blue-600 rounded-md uppercase shadow-md shadow-blue-900">
          Menu
        </button>
      </Link>
    </div>
  );
};

export default Articulo1;
