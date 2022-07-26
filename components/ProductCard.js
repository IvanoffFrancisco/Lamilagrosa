import Image from "next/image";
import { useContext } from "react";

import { CarritoContext } from "../contexts/CarritoContext";

import { AiOutlineClose } from "react-icons/ai";

const ProductCard = ({ producto }) => {
  const [carrito, setCarrito] = useContext(CarritoContext);

  const {
    menu,
    imagenMenu,
    cantidad,
    guarnicion,
    imagenGuarnicion,
    precio,
    tipoMila,
  } = producto;

  const handleDelete = () => {
    const respuesta = confirm("Deseas eliminar este producto?");
    if (respuesta) {
      const carritoActualizado = carrito.filter(
        (elemento) => elemento.id !== producto.id
      );
      setCarrito(carritoActualizado);
    }
  };

  return (
    <div className="flex justify-start gap-3 bg-white p-2 shadow-sm shadow-gray-400 md:pl-5">
      <div className="flex flex-col items-center justify-center">
        <article className="w-[90px] md:w-[100px] border border-black">
          <Image
            src={imagenMenu}
            alt={menu}
            layout="responsive"
            width="500"
            height="300"
            objectFit="cover"
          />
        </article>
        <p>+</p>
        <article className="w-[90px] md:w-[100px] border border-black">
          <Image
            src={imagenGuarnicion}
            alt={guarnicion}
            layout="responsive"
            width="500"
            height="300"
            objectFit="cover"
          />
        </article>
      </div>

      <div className="w-full flex flex-col justify-between items-start relative">
        <h3 className="font-bold tracking-widest text-xs xs:text-lg">{menu}</h3>
        {tipoMila && (
          <p className="font-bold tracking-widest text-xs">
            de{" "}
            <span className="text-blue-600 xs:text-base capitalize">
              {tipoMila}
            </span>
          </p>
        )}
        <p className="font-bold tracking-widest text-xs">
          con{" "}
          <span className="text-blue-600 xs:text-base capitalize">
            {guarnicion}
          </span>
        </p>

        <p className=" py-1">Cantidad: {cantidad}</p>
        <p className="font-semibold text-lg pt-2">
          Total:<span className="font-bold"> ${precio}</span>
        </p>

        {/* <button className="bg-blue-600 text-white text-xs px-1.5 py-1 shadow-sm shadow-blue-800 rounded-sm tracking-wide absolute bottom-0 right-0 md:mb-1 md:mr-1">
          Editar
        </button> */}
        <AiOutlineClose
          onClick={handleDelete}
          className="absolute top-0 right-0 text-red-600 text-xl cursor-pointer md:mt-1 md:mr-1"
        />
      </div>
    </div>
  );
};

export default ProductCard;
