import React, {useState, useContext } from 'react'
import { UsuarioContext } from "../contexts/UsuarioContext";
import Image from "next/image";
import Link from "next/link";
import PromoImg from '../public/img/PromoImg.png'
import PromoImg2 from '../public/img/PromoImg2.png'
import PromoImg3 from '../public/img/PromoImg3.png'
import PromoImg4 from '../public/img/PromoImg4.png'
import { FaPercent } from "react-icons/fa";

export default function Promos() {

  const { userGlobal, islogged } = useContext(UsuarioContext);

  return (
    <div className="my-4">
      <div className="bg-gray-100 w-full m-auto my-10 text-center overflow-hidden">
        <div className='border-2 border-orange-300 rounded-full w-full text-start'></div>
        <h1 className=' font-bold m-auto text-center text-3xl text-red-900 my-4'>Promociones Grosas:</h1>
        <div className='border-2 border-orange-300 rounded-full w-full text-start'></div>
        </div>
      <div className=" flex flex-col sm:flex-row">
        <div className="w-full">
          <div className="max-w-screen-md mx-auto px-10 pt-20">
            <div className="bg-green-500 md:h-80 sm:h-96  rounded-lg shadow-2xl shadow-gray-600 flex flex-wrap flex-col-reverse md:flex-col">
              <div className="w-full md:w-2/4 md:h-3/4 p-4">
                <div className="rounded-full bg-green-200 w-fit flex flex-row py-2 px-4 ring-2 ring-green-900  -mt-8 -ml-8">
                  <p className="font-bold text-green-800 text-xl flex flex-col m-0 p-0">
                    20<span className="text-sm mt-auto text-center">OFF</span>
                  </p>
                  <FaPercent className="text-sm text-green-800 mt-auto mb-auto" />
                </div>
                <div className="py-4 sm:py-0">
                  <h3 className="text-3xl font-bold text-green-900">
                    Promo Saludable
                  </h3>
                  <div className="md:mt-6 sm:mt-0">
                    <p className="text-white text-md font-bold ">
                      Veni los miercoles y con tu compra en nuestro vegano
                      obtenes hasta un 20% de descuento en tu pedido!
                    </p>
                    <p className="font-semibold text-green-900 md:mt-6 sm:mt-0">
                      (Solo valido si el pedido es en efectivo)
                    </p>
                  </div>
                  {islogged ? (
                    <Link href="menu">
                      <button className="mt-4 p-2 font-bold text-green-800 border-2 border-green-800 bg-white rounded-2xl hover:bg-green-600 hover:text-white hover:border-green-800">
                        Promo Saludable
                      </button>
                    </Link>
                  ) : (
                    <Link href="login">
                      <button className="mt-4 p-2 font-bold text-green-800 border-2 border-green-800 bg-white rounded-2xl hover:bg-green-600 hover:text-white hover:border-green-800">
                        Acceder Promo
                      </button>
                    </Link>
                  )}
                </div>
              </div>
              <div className="w-full md:mt-12 text-center sm:mt-0  md:w-1/2 p-4 md:p-0">
                <Image
                  src={PromoImg}
                  alt=""
                  height={220}
                  width={220}
                  className=""
                ></Image>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full">
          <div className="max-w-screen-md mx-auto px-10 pt-20">
            <div className="bg-red-500 md:h-80 sm:h-96  rounded-lg shadow-2xl shadow-gray-600 flex flex-wrap flex-col-reverse md:flex-col">
              <div className="w-full md:w-2/4 md:h-3/4 p-4">
                <div className="rounded-full bg-red-200 w-fit flex flex-row py-2 px-4 ring-2 ring-red-900  -mt-8 -ml-8">
                  <p className="font-bold text-red-800 text-xl flex flex-col m-0 p-0">
                    15<span className="text-sm mt-auto text-center">OFF</span>
                  </p>
                  <FaPercent className="text-sm text-red-800 mt-auto mb-auto" />
                </div>
                <div className="py-4 sm:py-0">
                  <h3 className="text-3xl font-bold text-red-900">
                    Promo Sandwiches
                  </h3>
                  <div className="md:mt-6 sm:mt-0">
                    <p className="text-white text-md font-bold ">
                      Los Viernes y Sabados con tu compra en nuestro menu de
                      Sandwiches obtene hasta un 15% de descuento en tu pedido!
                    </p>
                    <p className="font-semibold text-red-900 md:mt-6 sm:mt-0">
                      (Solo valido pagos con tarjeta de debito)
                    </p>
                  </div>
                  {islogged ? (
                    <Link href="menu">
                      <button className="mt-4 p-2 font-bold text-red-800 border-2 border-red-800 bg-white rounded-2xl hover:bg-red-600 hover:text-white hover:border-red-800">
                        Promo Sandwiches
                      </button>
                    </Link>
                  ) : (
                    <Link href="login">
                      <button className="mt-4 p-2 font-bold text-red-800 border-2 border-red-800 bg-white rounded-2xl hover:bg-red-600 hover:text-white hover:border-red-800">
                        Acceder Promo
                      </button>
                    </Link>
                  )}
                </div>
              </div>
              <div className="w-full md:mt-12 text-center sm:mt-0  md:w-1/2 p-4 md:p-0">
                <Image
                  src={PromoImg2}
                  alt=""
                  height={220}
                  width={220}
                  className=""
                ></Image>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" flex flex-col sm:flex-row">
        <div className="w-full">
          <div className="max-w-screen-md mx-auto px-10 pt-20">
            <div className="bg-blue-500 md:h-80 sm:h-96  rounded-lg shadow-2xl shadow-gray-600 flex flex-wrap flex-col-reverse md:flex-col">
              <div className="w-full md:w-2/4 md:h-3/4 p-4">
                <div className="rounded-full bg-blue-200 w-fit flex flex-row py-2 px-4 ring-2 ring-blue-900  -mt-8 -ml-8">
                  <p className="font-bold text-blue-800 text-xl flex flex-col m-0 p-0">
                    15<span className="text-sm mt-auto text-center">OFF</span>
                  </p>
                  <FaPercent className="text-sm text-blue-800 mt-auto mb-auto" />
                </div>
                <div className="py-4 sm:py-0">
                  <h3 className="text-3xl font-bold text-blue-900">
                    Promo Amigos
                  </h3>
                  <div className="md:mt-6 sm:mt-0">
                    <p className="text-white text-md font-bold ">
                      Con la compra en nuestro menu de napolitanas obtene hasta
                      un 15% de descuento en tu pedido, venite!
                    </p>
                    <p className="font-semibold text-blue-900 md:mt-6 sm:mt-0">
                      (Solo valido si el pedido es en efectivo)
                    </p>
                  </div>
                  {islogged ? (
                    <Link href="menu">
                      <button className="mt-4 p-2 font-bold text-blue-800 border-2 border-blue-800 bg-white rounded-2xl hover:bg-blue-600 hover:text-white hover:border-blue-800">
                        Promo Amigos
                      </button>
                    </Link>
                  ) : (
                    <Link href="login">
                      <button className="mt-4 p-2 font-bold text-blue-800 border-2 border-blue-800 bg-white rounded-2xl hover:bg-blue-600 hover:text-white hover:border-blue-800">
                        Acceder Promo
                      </button>
                    </Link>
                  )}
                </div>
              </div>
              <div className="w-full md:mt-12 text-center sm:mt-0  md:w-1/2 p-4 md:p-0">
                <Image
                  src={PromoImg3}
                  alt=""
                  height={220}
                  width={220}
                  className=""
                ></Image>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full">
          <div className="max-w-screen-md mx-auto px-10 pt-20">
            <div className="bg-pink-500 md:h-80 sm:h-96  rounded-lg shadow-2xl shadow-gray-600 flex flex-wrap flex-col-reverse md:flex-col">
              <div className="w-full md:w-2/4 md:h-3/4 p-4">
                <div className="rounded-full bg-pink-200 w-fit flex flex-row py-2 px-4 ring-2 ring-pink-900  -mt-8 -ml-8">
                  <p className="font-bold text-pink-800 text-xl flex flex-col m-0 p-0">
                    20<span className="text-sm mt-auto text-center">OFF</span>
                  </p>
                  <FaPercent className="text-sm text-pink-800 mt-auto mb-auto" />
                </div>
                <div className="py-4 sm:py-0">
                  <h3 className="text-3xl font-bold text-pink-900">
                    Promo Romantica
                  </h3>
                  <div className="md:mt-6 sm:mt-0">
                    <p className="text-white text-md font-bold ">
                      Los Domingos veni a disfrutar con tu pareja y obtene hasta
                      un 20% de descuento en tu pedido!
                    </p>
                    <p className="font-semibold text-pink-900 md:mt-6 sm:mt-0">
                      (Solo valido pagos con tarjeta de debito)
                    </p>
                  </div>
                  {islogged ? (
                    <Link href="menu">
                      <button className="mt-4 p-2 font-bold text-pink-800 border-2 border-pink-800 bg-white rounded-2xl hover:bg-pink-600 hover:text-white hover:border-pink-800">
                        Promo Romantica
                      </button>
                    </Link>
                  ) : (
                    <Link href="login">
                      <button className="mt-4 p-2 font-bold text-pink-800 border-2 border-pink-800 bg-white rounded-2xl hover:bg-pink-600 hover:text-white hover:border-pink-800">
                        Acceder Promo
                      </button>
                    </Link>
                  )}
                </div>
              </div>
              <div className="w-full md:mt-12 text-center sm:mt-0  md:w-1/2 p-4 md:p-0">
                <Image
                  src={PromoImg4}
                  alt=""
                  height={220}
                  width={220}
                  className=""
                ></Image>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}




