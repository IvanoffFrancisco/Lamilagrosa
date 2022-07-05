import Image from "next/image";
import React from "react";

const MenuCard = ({ item }) => {
  return (
    <li className="w-[400px] h-[260px] bg-transparent cursor-pointer group perspective">
      <div className="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000 bg-blue-400">
        <div className="absolute backface-hidden border-2 w-full h-full">
          <Image
            src={item.imagen}
            layout="responsive"
            width="600"
            height="400"
            alt="producto"
            objectFit="cover"
          />
        </div>
        <div className="absolute my-rotate-y-180 w-full h-full bg-blue-600 backface-hidden">
          <div className="text-center flex flex-col items-center justify-center h-full text-white px-2 pb-24">
            <h2 className="text-3xl font-semibold">{item.nombre}</h2>
            <strong className="text-xs font-semibold 2xl:text-sm">
              Ingredientes:
            </strong>
            <sapan className="flex justify-center pb-2 text-xs 2xl:text-sm">
              ({item.ingredientes.map((ingrediente) => ingrediente).join(", ")})
            </sapan>
            <button className="bg-white px-6 py-2 font-semibold text-black rounded-md absolute -bottom-20 delay-500 duration-700 group-hover:bottom-20 scale-0 group-hover:scale-125">
              Añadir
            </button>
          </div>
        </div>
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

{
  /* <li className="text-center bg-white shadow-md shadow-gray-700 cursor-pointer hover:ring-4 hover:ring-blue-600 over:bg-black ">
      <div>
        <Image
          src={item.imagen}
          layout="responsive"
          width="600"
          height="400"
          alt="producto"
          objectFit="cover"
          // className="hover:scale-125 transition-all duration-300 origin-right"
        />
        <h2 className="font-bold text-md text-blue-600 py-2 lg:text-lg xl:text-xl">
          {item.nombre}
        </h2>
        <strong className="text-xs font-semibold 2xl:text-sm">
          Ingredientes:
        </strong>
        <sapan className="flex justify-center pb-2 text-xs 2xl:text-sm">
          ({item.ingredientes.map((ingrediente) => ingrediente).join(", ")})
        </sapan>
      </div>
    </li> */
}
