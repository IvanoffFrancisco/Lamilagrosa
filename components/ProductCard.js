import Image from "next/image";
import React from "react";

const ProductCard = ({ producto }) => {
  const { menu, tipoMila, cantidad, guarnicion, precio } = producto;

  return (
    <div className="flex justify-start gap-2 bg-white p-2 relative">
      <div className="flex flex-col items-center gap-2">
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
      <div className="flex flex-col items-start">
        <h3 className="font-bold tracking-widest text-xs xs:text-lg">{menu}</h3>
        <h3 className="font-bold tracking-widest text-xs mb-3">
          con{" "}
          <span className="text-blue-600 xs:text-base capitalize">
            {guarnicion}
          </span>
        </h3>
        <div>
          <p className="text-blue-600 mb-5">Cantidad {cantidad}</p>
          <p className="text-red-600 text-xl">${precio}</p>
        </div>
      </div>
      <button className="text-xs text-red-600 absolute right-0 bottom-0 mr-2 mb-1">
        Eliminar
      </button>
    </div>
  );
};

export default ProductCard;
