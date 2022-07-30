import React, { useContext } from 'react'
import { UsuarioContext } from "../contexts/UsuarioContext";
import Image from "next/dist/client/image";
import Link from "next/link";
import FoodImg from "../public/img/menues/barbacoa.jpg";
import { TiStarFullOutline } from "react-icons/ti";

export default function Combos() {

  const { userGlobal, islogged } = useContext(UsuarioContext);

  return (
    <>
      <div className="mx-auto p-10 bg-white">
        <div className="my-6 ml-32">
          <h1 className=" text-start font-bold text-2xl text-red-800 my-4">
            Combos Grosos
          </h1>
          <div className="border-2 border-orange-300 rounded-full w-44 text-start"></div>
        </div>
        <div className="flex justify-around p-5">
          <div className="h-full text-center ml-8 p-5 bg-white border-4 border-dashed border-red-900 rounded-3xl transform transition-all hover:-translate-y-2 duration-300 shadow-lg hover:shadow-2xl ">
            <Image
              src={FoodImg}
              alt=""
              width={400}
              height={200}
              className="object-cover rounded-md  inline-block border-2 border-orange-300 items-center justify-center"
            />
            <span className="inline-block h-1 w-80 rounded-full bg-red-800  mt-4 mb-2"></span>
            <div className="flex flex-row">
              <TiStarFullOutline className="block text-yellow-500 text-xl w-6 h-8" />
              <TiStarFullOutline className="block text-yellow-500 text-xl w-6 h-8" />
              <TiStarFullOutline className="block text-yellow-500 text-xl w-6 h-8" />
              <TiStarFullOutline className="block text-yellow-500 text-xl w-6 h-8" />
            </div>
            <p className="leading-relaxed ">
              En La<span>Mila</span>Grosa encontre una de las mejores servicios
              en cuanto a atention y calidad, uno de los mejores lugares.
            </p>
            <span className="inline-flex h-1 w-14 rounded bg-red-800 mt-4 mb-2"></span>
            <div>
            {islogged ? (
              <Link href="menu">
                <button className="mt-2 p-2 w-40 font-bold text-red-800 border-2 border-red-800 bg-white rounded-2xl hover:bg-red-600 hover:text-white hover:border-red-800">
                  Combo 1
                </button>
              </Link>
            
            ) 
            : (
            <Link href="login">
              <button className="mt-2 p-2 w-40 font-bold text-red-800 border-2 border-red-800 bg-white rounded-2xl hover:bg-red-600 hover:text-white hover:border-red-800">
                Acceder Combo
              </button>
            </Link>
            )}
            </div>
          </div>
          <div className="h-full text-center ml-8 p-5 bg-white border-4 border-dashed border-red-900 rounded-2xl transform transition-all hover:-translate-y-2 duration-300 shadow-lg hover:shadow-2xl ">
            <Image
              src={FoodImg}
              alt=""
              width={400}
              height={200}
              className="object-cover rounded-md inline-block border-2 border-orange-300 bg-opacity-10 items-center justify-center"
            />
            <span className="inline-block h-1 w-80 rounded-full bg-red-800  mt-4 mb-2"></span>
            <div className="flex flex-row">
              <TiStarFullOutline className="block text-yellow-500 text-xl w-6 h-8" />
              <TiStarFullOutline className="block text-yellow-500 text-xl w-6 h-8" />
              <TiStarFullOutline className="block text-yellow-500 text-xl w-6 h-8" />
            </div>
            <p className="leading-relaxed ">
              En La<span>Mila</span>Grosa encontre una de las mejores servicios
              en cuanto a atention y calidad, uno de los mejores lugares.
            </p>
            <span className="inline-flex h-1 w-14 rounded bg-red-800 mt-4 mb-2"></span>
            <div>
            {islogged ? (
              <Link href="menu">
                <button className="mt-2 p-2 w-40 font-bold text-red-800 border-2 border-red-800 bg-white rounded-2xl hover:bg-red-600 hover:text-white hover:border-red-800">
                  Combo 1
                </button>
              </Link>
            
            ) 
            : (
            <Link href="login">
              <button className="mt-2 p-2 w-40 font-bold text-red-800 border-2 border-red-800 bg-white rounded-2xl hover:bg-red-600 hover:text-white hover:border-red-800">
                Acceder Combo
              </button>
            </Link>
            )}
            </div>
          </div>
          <div className="h-full text-center ml-8 p-5 bg-white border-4 border-dashed border-red-900 rounded-2xl transform transition-all hover:-translate-y-2 duration-300 shadow-lg hover:shadow-2xl ">
            <Image
              src={FoodImg}
              alt=""
              width={400}
              height={200}
              className="object-cover rounded-md inline-block border-2 border-orange-300 bg-opacity-10 items-center justify-center"
            />
            <span className="inline-block h-1 w-80 rounded-full bg-red-800  mt-4 mb-2"></span>
            <div className="flex flex-row">
              <TiStarFullOutline className="block text-yellow-500 text-xl w-6 h-8" />
              <TiStarFullOutline className="block text-yellow-500 text-xl w-6 h-8" />
              <TiStarFullOutline className="block text-yellow-500 text-xl w-6 h-8" />
              <TiStarFullOutline className="block text-yellow-500 text-xl w-6 h-8" />
              <TiStarFullOutline className="block text-yellow-500 text-xl w-6 h-8" />
            </div>
            <p className="leading-relaxed ">
              En La<span>Mila</span>Grosa encontre una de las mejores servicios
              en cuanto a atention y calidad, uno de los mejores lugares.
            </p>
            <span className="inline-block h-1 w-14 rounded bg-red-800 mt-4 mb-2"></span>
            <div>
            {islogged ? (
              <Link href="menu">
                <button className="mt-2 p-2 w-40 font-bold text-red-800 border-2 border-red-800 bg-white rounded-2xl hover:bg-red-600 hover:text-white hover:border-red-800">
                  Combo 1
                </button>
              </Link>
            
            ) 
            : (
            <Link href="login">
              <button className="mt-2 p-2 w-40 font-bold text-red-800 border-2 border-red-800 bg-white rounded-2xl hover:bg-red-600 hover:text-white hover:border-red-800">
                Acceder Combo
              </button>
            </Link>
            )}
            </div>
          </div>
          <div className="h-full text-center ml-8 p-5 bg-white border-4 border-dashed border-red-900 rounded-2xl transform transition-all hover:-translate-y-2 duration-300 shadow-lg hover:shadow-2xl ">
            <Image
              src={FoodImg}
              alt=""
              width={400}
              height={200}
              className="object-cover rounded-md inline-block border-2 border-orange-300 bg-opacity-10 items-center justify-center"
            />
            <span className="inline-block h-1 w-80 rounded-full bg-red-800  mt-4 mb-2"></span>
            <div className="flex flex-row">
              <TiStarFullOutline className="block text-yellow-500 text-xl w-6 h-8" />
              <TiStarFullOutline className="block text-yellow-500 text-xl w-6 h-8" />
              <TiStarFullOutline className="block text-yellow-500 text-xl w-6 h-8" />
            </div>
            <p className="leading-relaxed ">
              En La<span>Mila</span>Grosa encontre una de las mejores servicios
              en cuanto a atention y calidad, uno de los mejores lugares.
            </p>
            <span className="inline-flex h-1 w-14 rounded bg-red-800 mt-4 mb-2"></span>
            <div>
              {islogged ? (
                <Link href="menu">
                  <button className="mt-2 p-2 w-40 font-bold text-red-800 border-2 border-red-800 bg-white rounded-2xl hover:bg-red-600 hover:text-white hover:border-red-800">
                    Combo 1
                  </button>
                </Link>
            ) 
            : (
              <Link href="login">
                <button className="mt-2 p-2 w-40 font-bold text-red-800 border-2 border-red-800 bg-white rounded-2xl hover:bg-red-600 hover:text-white hover:border-red-800">
                  Acceder Combo
                </button>
              </Link>
            )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}


