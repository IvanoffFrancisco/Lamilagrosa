import React, { useContext } from 'react'
import { UsuarioContext } from "../contexts/UsuarioContext";
import Image from "next/dist/client/image";
import Link from "next/link";
import FoodImg from "../public/img/menues/Doble Criminal.jpg";
// import FoodImg2 from "../public/img/menues/Vegana-Texmex.png";
import FoodImg3 from "../public/img/menues/Doble Criminal.jpg";
import FoodImg4 from "../public/img/menues/Doble Criminal.jpg";
import { TiStarFullOutline } from "react-icons/ti";

export default function Combos() {

  const { userGlobal, islogged } = useContext(UsuarioContext);

  return (
    <div className="my-12 py-12">
        <div className="bg-gray-200 w-full m-auto my-10 text-center overflow-hidden">
        <div className='border-2 border-orange-300 rounded-full w-full text-start'></div>
        <h1 className=' font-bold m-auto text-center text-3xl text-red-900 my-4'>Combos Grosos:</h1>
        <div className='border-2 border-orange-300 rounded-full w-full text-start'></div>
        </div>
      <div className="bg-white w-full my-4  flex-wrap flex justify-evenly items-center">
        <div className="w-60 p-2 bg-white rounded-xl border-2 border-dashed border-red-800 transform transition-all hover:-translate-y-2 duration-300 shadow-lg hover:shadow-2xl ">
          <Image 
            className=" object-cover rounded-xl h-40" 
            src={FoodImg}
            alt="">
          </Image>
          <div className="flex flex-row">
              <TiStarFullOutline className="block text-yellow-500 text-xl w-6 h-8" />
              <TiStarFullOutline className="block text-yellow-500 text-xl w-6 h-8" />
              <TiStarFullOutline className="block text-yellow-500 text-xl w-6 h-8" />
            </div>
          <div className="p-2">
            <h2 className="font-bold text-2xl text-red-800 mb-2 ">Combo 1</h2>
            <p className="leading-relaxed font-bold text-slate-800">
              Primer
            </p>
          </div>
          <div className="m-2">
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
        <div className="w-60 p-2 my-4 bg-white rounded-xl border-2 border-dashed border-red-800 transform transition-all hover:-translate-y-2 duration-300 shadow-lg hover:shadow-2xl">
        <Image 
            className="object-cover rounded-xl" 
            src={FoodImg}
            alt="">
          </Image>
          <div className="flex flex-row">
              <TiStarFullOutline className="block text-yellow-500 text-xl w-6 h-8" />
              <TiStarFullOutline className="block text-yellow-500 text-xl w-6 h-8" />
              <TiStarFullOutline className="block text-yellow-500 text-xl w-6 h-8" />
              <TiStarFullOutline className="block text-yellow-500 text-xl w-6 h-8" />
            </div>
          <div className="p-2">
            <h2 className="font-bold text-2xl text-red-800 mb-2">Combo 2</h2>
            <p className="leading-relaxed font-bold text-slate-800">
              Combo 2
            </p>
          </div>
          <div className="m-2">
          {islogged ? (
              <Link href="menu">
                <button className="mt-2 p-2 w-40 font-bold text-red-800 border-2 border-red-800 bg-white rounded-2xl hover:bg-red-600 hover:text-white hover:border-red-800">
                  Combo 2
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
        <div className="w-60 p-2 my-4 bg-white rounded-xl border-2 border-dashed border-red-800 transform transition-all hover:-translate-y-2 duration-300 shadow-lg hover:shadow-2xl">
        <Image 
            className=" object-cover rounded-xl h-40" 
            src={FoodImg3}
            alt="">
          </Image>
          <div className="flex flex-row">
              <TiStarFullOutline className="block text-yellow-500 text-xl w-6 h-8" />
              <TiStarFullOutline className="block text-yellow-500 text-xl w-6 h-8" />
              <TiStarFullOutline className="block text-yellow-500 text-xl w-6 h-8" />
            </div>
          <div className="p-2">
            <h2 className="font-bold text-2xl text-red-800 mb-2">Combo 3</h2>
            <p className="leading-relaxed font-bold text-slate-800">
              Combo 3
            </p>
          </div>
          <div className="m-2">
          {islogged ? (
              <Link href="menu">
                <button className="mt-2 p-2 w-40 font-bold text-red-800 border-2 border-red-800 bg-white rounded-2xl hover:bg-red-600 hover:text-white hover:border-red-800">
                  Combo 3
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
        <div className="w-60 p-2 my-4 bg-white rounded-xl border-2 border-dashed border-red-800 transform transition-all hover:-translate-y-2 duration-300 shadow-lg hover:shadow-2xl">
        <Image 
            className=" object-cover rounded-xl h-40" 
            src={FoodImg4}
            alt="">
          </Image>
          <div className="flex flex-row">
              <TiStarFullOutline className="block text-yellow-500 text-xl w-6 h-8" />
              <TiStarFullOutline className="block text-yellow-500 text-xl w-6 h-8" />
              <TiStarFullOutline className="block text-yellow-500 text-xl w-6 h-8" />
              <TiStarFullOutline className="block text-yellow-500 text-xl w-6 h-8" />
              <TiStarFullOutline className="block text-yellow-500 text-xl w-6 h-8" />
            </div>
          <div className="p-2">
            <h2 className="font-bold text-2xl text-red-800 mb-2">Combo 4</h2>
            <p className="leading-relaxed font-bold text-slate-800">
              Combo 4
            </p>
          </div>
          <div className="m-2">
          {islogged ? (
                <Link href="menu">
                  <button className="mt-2 p-2 w-40 font-bold text-red-800 border-2 border-red-800 bg-white rounded-2xl hover:bg-red-600 hover:text-white hover:border-red-800">
                    Combo 4
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
  );
}


