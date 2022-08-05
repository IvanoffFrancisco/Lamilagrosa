import React from "react";
import Image from "next/image";
import Link from "next/link";
import ProfileSideBar from "../components/ProfileSideBar";
import FoodImg from "../public/img/menues/barbacoa.jpg";

export default function OrderHistory() {
  return (
    <>
      <ProfileSideBar />
      <div>
        <div className="bg-blue-500 h-full py-4">
          <h1 className="text-center font-bold text-2xl  text-white m-auto">
            Historial de Compras
          </h1>
        </div>
        <div className="border-2 border-sky-300 rounded-full w-full"></div>
        <div className="mx-auto overflow-hidden rounded-3xl bg-sky-100  shadow-xl shadow-gray-400 mt-10  lg:w-7/12 lg:flex lg:flex-row lg:h-auto">
          <Image
            src={FoodImg}
            layout="responsive"
            sizes="50vw"
            alt="Picture of the author"
            height={280}
            width={360}
          />
          <div className="bg-sky-100 w-full p-2">
            <p className="flex items-start justify-start ">
              <h1 className="text-blue-600 font-bold m-auto  text-center border-b border-sky-600 text-lg">
                Pedido 1
              </h1>
            </p>
            <h3 className="text-blue-800 font-bold p-2">
              id-venta: <span className="text-md"> "venta"</span>
            </h3>
            <h3 className="text-blue-800 font-bold p-2">
              Nombre: <span className="text-md"> "Nombre de la comida"</span>
            </h3>
            <h3 className="text-blue-800 font-bold p-2">
              Cantidad: <span className="text-md"> "Cantidad pedida"</span>
            </h3>
            <h3 className="text-blue-800 font-bold p-2">
              Monto del Pedido:{" "}
              <span className=" text-md"> "Precio total gastado"</span>
            </h3>
            <h3 className="text-blue-800 font-bold p-2">
              Fecha: <span className=" text-md"> "Fecha del pedido"</span>
            </h3>
            <div className="flex justify-end">
              <Link href="contacto">
                <a className="text-base py-1 mr-10 text-blue-600 hover:text-sky-500 font-bold hover:border-b hover:border-sky-400">
                  Para contacto haga click aqui
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
