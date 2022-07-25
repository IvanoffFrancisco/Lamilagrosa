import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProductCard = ({ producto }) => {
  const { menu, tipoMila, cantidad, guarnicion, precio } = producto;

  const handleDelete = (e) => {
    console.log();
  };

  return (
    <div className="flex justify-start gap-3 bg-white p-2 shadow-sm shadow-gray-700">
      <div className="flex flex-col items-center justify-between">
        <article className="w-[100px] h-[60px] border border-black">
          <Image
            src="/img/menues/Capresse.jpg"
            alt={menu}
            layout="responsive"
            width="500"
            height="300"
            objectFit="cover"
          />
        </article>
        <p>+</p>
        <article className="w-[100px] h-[60px] border border-black">
          <Image
            src="https://images.rappi.com.ar/products/3d9120f7-f3ef-455c-8acd-cda3e4098807-1629229510757.png"
            alt={guarnicion}
            layout="responsive"
            width="500"
            height="300"
            objectFit="cover"
          />
        </article>
      </div>

      <div className="w-full flex flex-col justify-between items-start">
        <h3 className="font-bold tracking-widest text-xs xs:text-lg">{menu}</h3>
        <p className="font-bold tracking-widest text-xs">
          de{" "}
          <span className="text-blue-600 xs:text-base capitalize">
            {tipoMila}
          </span>
        </p>
        <p className="font-bold tracking-widest text-xs">
          con{" "}
          <span className="text-blue-600 xs:text-base capitalize">
            {guarnicion}
          </span>
        </p>

        <div className="w-full">
          <p className="text-blue-600">Cantidad {cantidad}</p>
          <p className="text-red-600 text-xl">${precio}</p>
        </div>

        <div className="w-full flex justify-end gap-x-2">
          <button className="bg-blue-600 text-white text-xs px-1.5 py-1 shadow-sm shadow-blue-800 rounded-sm tracking-wide">
            Editar
          </button>
          <button
            onClick={handleDelete}
            className="bg-red-600 text-white text-xs px-1.5 py-1 shadow-sm shadow-red-800 rounded-sm tracking-wide"
          >
            Eliminar
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
