import Image from "next/image";
import React from "react";

const MenuCard = ({ item }) => {
  return (
    <li className="text-center bg-black shadow-md shadow-gray-700 cursor-pointer hover:ring-4 hover:ring-blue-600 over:bg-black ">
      <div>
        <Image
          src={item.imagen}
          layout="responsive"
          width="600"
          height="400"
          alt="producto"
          objectFit="cover"
        />
        <h2 className="font-bold text-md text-white py-2 lg:text-lg xl:text-xl">
          {item.nombre}
        </h2>
      </div>
    </li>
  );
};

export default MenuCard;

{
  /* <div className="text-center px-2">
        <h2 className="font-bold text-md pt-2 lg:text-lg xl:text-xl">
          {item.nombre}
        </h2>
        <strong className="text-xs font-semibold 2xl:text-sm">
          Ingredientes:
        </strong>
        <sapan className="flex justify-center pb-2 text-xs 2xl:text-sm">
          ({item.ingredientes.map((ingrediente) => ingrediente).join(", ")})
        </sapan>
      </div> */
}
