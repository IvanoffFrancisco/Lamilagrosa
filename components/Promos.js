import React from "react";
import Image from "next/image";
import Link from "next/link";
import PromoImg from '../public/img/PromoImg.png'
import PromoImg2 from '../public/img/PromoImg2.png'
import PromoImg3 from '../public/img/PromoImg3.png'
import PromoImg4 from '../public/img/PromoImg4.png'
import { FaPercent } from "react-icons/fa";

export default function Promos() {
  return (
    <>
      <div className="my-auto ml-44">
        <h1 className=' text-start font-bold text-3xl text-red-900 mt-6 mb-0'>Promociones Grosas</h1>
        <div className='border-2 border-orange-300 rounded-full w-72 text-start'></div>
        </div>
      <div className="flex justify-around md:flex-row my-auto">
      <div className="flex justify-around min-h-fit">
        <div className="max-w-fit-md my-auto px-10 pt-20">
          <div className="bg-green-500 md:h-48 rounded-lg shadow-lg shadow-gray-400 flex flex-wrap flex-col-reverse md:flex-col">
            <div className="w-full h-full md:w-1/2 p-4">
                <div className="flex flex-row bg-green-100 py-2 px-4 max-w-fit shadow-md shadow-gray-800 -mt-8 -ml-8 rounded-full">
                    <p className="font-bold text-green-800 text-xl flex flex-col m-0 p-0">20<span className="text-sm mt-auto text-center">OFF</span></p>
                    <FaPercent className="text-sm text-green-800 mt-auto mb-auto"/>
                </div>
              <div className="m-auto text-center -mr-32">
                <h3 className="text-3xl -mt-4 font-bold text-green-900 py-2">Promo Saludable</h3>
                <p className="font-semibold text-md text-white">
                  Veni los miercoles y con tu compra en nuestro vegano obtenes hasta un 20% de descuento en tu pedido!
                </p>
                <p className="font-bold text-sm text-white">
                  (Solo valido si el pedido es en efectivo)
                </p>
              </div>
              <Link href="login">
                <button className="mt-4 p-2 font-bold text-green-800 border-2 border-green-800 bg-white rounded-2xl hover:bg-green-600 hover:text-white hover:border-green-800">Obtener Promo</button>
              </Link>
            </div>
            <div className="w-full text-center m-auto -mr-12 md:w-1/2 p-4 md:p-0">
              <Image 
                src={PromoImg}
                alt="" 
                height={150}
                width={150}
                className=""
                ></Image>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-around min-h-fit">
        <div className="max-w-fit-md my-auto px-10 pt-20">
          <div className="bg-red-500 md:h-48 rounded-lg shadow-lg shadow-gray-400 flex flex-wrap flex-col-reverse md:flex-col">
            <div className="w-full md:w-1/2 p-4">
                <div className="flex flex-row bg-red-100 py-2 shadow-md shadow-gray-800 px-4 max-w-fit -mt-8 -ml-8 rounded-full">
                    <p className="font-bold text-red-800 text-xl flex flex-col m-0 p-0">15<span className="text-sm mt-auto">OFF</span></p>
                    <FaPercent className="text-sm text-red-800 mt-auto mb-auto"/>
                </div>
              <div className="m-auto text-center -mr-32">
                <h3 className="text-3xl -mt-4 font-bold text-red-900 py-2">Promo Sandwiches</h3>
                <p className="font-semibold text-md text-white">
                  Los Viernes y Sabados con tu compra en nuestro menu de Sandwiches obtene hasta un 15% de descuento en tu pedido!
                </p>
                <p className="font-bold text-sm text-white">
                  (Solo valido pagos con tarjeta de debito)
                </p>
              </div>
              <Link href="login">
                <button className="mt-4 p-2 font-bold text-red-800 border-2 border-red-800 bg-white rounded-2xl hover:bg-red-600 hover:text-white hover:border-red-800">Obtener Promo</button>
              </Link>
            </div>
            <div className="w-full text-center m-auto -mr-12 md:w-1/2 p-4 md:p-0">
              <Image 
                src={PromoImg2}
                alt="" 
                height={150}
                width={150}
                className=""
                ></Image>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="flex justify-around md:flex-row my-auto">
      <div className="flex justify-around min-h-fit">
        <div className="max-w-fit-md my-auto px-10 pt-20">
          <div className="bg-blue-500 md:h-48 ml-1 rounded-lg shadow-lg shadow-gray-400 flex flex-wrap flex-col-reverse md:flex-col">
            <div className="w-full md:w-1/2 p-4">
                <div className="flex flex-row bg-blue-200 py-2 shadow-md shadow-gray-800 px-4 max-w-fit -mt-8 -ml-8 rounded-full">
                    <p className="font-bold text-blue-800 text-xl flex flex-col m-0 p-0">15<span className="text-sm mt-auto text-center">OFF</span></p>
                    <FaPercent className="text-sm text-blue-800 mt-auto mb-auto"/>
                </div>
              <div className="m-auto text-center -mr-32">
                <h3 className="text-3xl -mt-4 font-bold text-blue-900">Promo Los Pibes</h3>
                <p className="font-semibold text-md text-white">
                  Los Martes y jueves hacete el groso e invita a un amigo
                </p>
                <p className="font-semibold text-md text-white">
                  Con la compra en nuestro menu de napolitanas obtene hasta un 15% de descuento en tu pedido, venite!
                </p>
                <p className="font-bold text-sm text-white">
                  (Solo valido si el pedido es en efectivo)
                </p>
              </div>
              <Link href="login">
                <button className="mt-2 p-2 font-bold text-blue-800 border-2 border-blue-800 bg-white rounded-2xl hover:bg-blue-600 hover:text-white hover:border-blue-800">Obtener Promo</button>
              </Link>
            </div>
            <div className="w-fit text-center m-auto -mr-8 md:w-1/2 p-4 md:p-0">
              <Image 
                src={PromoImg3}
                alt="" 
                height={150}
                width={150}
                className=""
                ></Image>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-around min-h-fit">
        <div className="max-w-fit-md my-auto px-10 pt-20">
          <div className="bg-pink-500 md:h-48 rounded-lg shadow-lg shadow-gray-400 flex flex-wrap flex-col-reverse md:flex-col">
            <div className="w-full md:w-1/2 p-4">
                <div className="flex flex-row bg-pink-200 py-2 shadow-md shadow-gray-800 px-4 max-w-fit -mt-8 -ml-8 rounded-full">
                    <p className="font-bold text-pink-600 text-xl flex flex-col m-0 p-0">20<span className="text-sm mt-auto">OFF</span></p>
                    <FaPercent className="text-sm text-pink-600 mt-auto mb-auto"/>
                </div>
                <div className="m-auto text-center -mr-32">
                <h3 className="text-3xl -mt-4 font-bold text-pink-900 py-2">Promo Sandwiches</h3>
                <p className="font-semibold text-md text-white">
                  Los Domingos veni a disfrutar con tu pareja y obtene hasta un 15% de descuento en tu pedido, pasate por nuestro local!
                </p>
                <p className="font-bold text-sm text-white">
                  (Solo valido pagos con tarjeta de debito)
                </p>
              </div>
              <Link href="login">
                <button className="mt-4 p-2 font-bold text-pink-800 border-2 border-pink-800 bg-white rounded-2xl hover:bg-pink-600 hover:text-white hover:border-pink-800">Obtener Promo</button>
              </Link>
            </div>
            <div className="w-full text-center m-auto -mr-12 md:w-1/2 p-4 md:p-0">
              <Image 
                src={PromoImg4}
                alt="" 
                height={150}
                width={150}
                className=""
                ></Image>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}


// La milagrosa promos.

// *Promociones:

// 1-Saludable: Miércoles verde, si venís a nuestro local, con la compra de dos comidas de nuestro menú vegano tenés un 40% con tu compra!
// 2-Hamburguesas: Los Viernes y Sábados, con la compra de 4 comidas de nuestro menú de hamburguesas te llevas un 30% de descuento con tu compra.
// 3-Los pibes: Los martes y jueves, con la compra 2 milanesas caballo, te llevas un descuento del 25% y dos botellitas corona de regalo con tu compra.
// 4-Parejas: Los domingos, la promo de parejas te invita a probar dos comidas de nuestro menú de hamburguesas o dos milanesas a la napolitana, te llevas un 30% de descuento con tu comida y dos latas Patagonia de regalo.


