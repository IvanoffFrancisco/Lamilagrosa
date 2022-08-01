import Image from "next/image";
import { useContext, useState } from "react";
import { CarritoContext } from "../contexts/CarritoContext";

import { AiOutlineClose } from "react-icons/ai";

export default function GuarnicionCarritoCard({ producto }) {
    const { eliminarCarrito } = useContext(CarritoContext);

    const [cantidadGuarnicion, setCantidadGuarnicion] = useState(producto.cantidad);
    
    const { id,guarnicion, imagenGuarnicion, precio } = producto;

    const handleChange = (e) => {
      setCantidadGuarnicion(parseInt(e.target.value));
    };
    
  
    return (
        <div className="flex justify-start gap-3 bg-white p-2 shadow-sm shadow-gray-500 md:pl-5 rounded-sm">
             <div className="flex flex-col items-center justify-center">
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
              {/* <h3 className="font-bold tracking-widest text-xs xs:text-lg">{menu}</h3>
              {tipoMila && (
                <p className="font-bold tracking-widest text-xs">
                  de{" "}
                  <span className="text-blue-600 xs:text-base capitalize">
                    {tipoMila}
                  </span>
                </p>
              )} */}
              <p className="font-bold tracking-widest text-xs">
                con{" "}
                <span className="text-blue-600 xs:text-base capitalize">
                  {guarnicion}
                </span>
              </p>
              <div>
                <label className="font-semibold xl:text-xl">
                  Cantidad de Menues:
                </label>
                <select
                  onChange={handleChange}
                  className="border border-gray-900 ml-1 font-bold"
                  name="cantidad"
                  value={cantidadGuarnicion}
                >
                  <option value="1" defaultValue>
                    1
                  </option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="10">10</option>
                </select>
              </div>
              {/* <p className=" py-1">Cantidad: {cantidad}</p> */}
              <p className="font-semibold text-lg pt-2">
                Total:<span className="text-red-600"> ${precio * cantidadGuarnicion }</span>
              </p>
      
              {/* <button className="bg-blue-600 text-white text-xs px-1.5 py-1 shadow-sm shadow-blue-800 rounded-sm tracking-wide absolute bottom-0 right-0 md:mb-1 md:mr-1">
                Editar
              </button> */}
              <AiOutlineClose
                onClick={() => eliminarCarrito(producto.id)}
                className="absolute top-0 right-0 text-red-600 text-xl cursor-pointer md:mt-1 md:mr-1"
              />
            </div>
          </div>
        )
}
