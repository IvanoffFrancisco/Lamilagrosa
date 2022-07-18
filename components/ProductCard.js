import React from "react";

const ProductCard = ({producto}) => {
  const { menu, tipoMila, cantidad, guarnicion, direccion, precio, envio } =
  producto;

  return (
    <div className="flex justify-start gap-2 bg-white p-2 relative">
      <div className="flex flex-col items-center gap-2">
        <div className="w-[80px] h-[80px] border border-black">I. menu</div>
        <div className="w-[80px] h-[80px] border border-black">
          I. Guarnicion
        </div>
      </div>
      <div className="flex flex-col items-start">
        <h3 className="font-bold tracking-widest text-xs">
          {menu}
        </h3>
        <h3 className="font-bold tracking-widest text-xs">
          con {guarnicion}
        </h3>
        <div>
          <p className="text-blue-600">Cantidad {cantidad}</p>
          <p className="text-red-600">${ precio}</p>
        </div>
      </div>
      <button className="text-xs text-red-600 absolute right-0 bottom-0 mr-2 mb-1">Eliminar</button>
    </div>
  );
};

export default ProductCard;
