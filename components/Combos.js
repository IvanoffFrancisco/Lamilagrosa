import React, { useContext } from "react";
import { UsuarioContext } from "../contexts/UsuarioContext";
import Image from "next/dist/client/image";
import Link from "next/link";
import FoodImg from "../public/img/menues/barbacoa.jpg";
import { TiStarFullOutline } from "react-icons/ti";

export default function Combos() {
  const { userGlobal, islogged } = useContext(UsuarioContext);

  return (
    <div className="pt-32">
      <div className="bg-gradient-to-r from-blue-700 via-blue-600 to-blue-700 w-full text-center border-t-4 border-b-4 border-double border-white shadow-sm mb-20">
        <h1 className="font-bold text-xl md:text-2xl xl:text-3xl text-white py-2 md:py-3">
          Combos Grosos!
        </h1>
      </div>

      <div className="bg-white w-full my-4  flex-wrap flex justify-evenly items-center">
        <div className="w-60 p-2 bg-white rounded-xl border-2 border-dashed border-red-800 transform transition-all hover:-translate-y-2 duration-300 shadow-lg hover:shadow-2xl ">
          <Image
            className=" object-cover rounded-xl h-40"
            src={FoodImg}
            alt=""
          ></Image>
          <div className="flex flex-row">
            <TiStarFullOutline className="block text-yellow-500 text-xl w-6 h-8" />
            <TiStarFullOutline className="block text-yellow-500 text-xl w-6 h-8" />
            <TiStarFullOutline className="block text-yellow-500 text-xl w-6 h-8" />
          </div>
          <div className="p-2">
            <h2 className="font-bold text-2xl text-red-800 mb-2 ">Combo 1</h2>
            <p className="leading-relaxed font-bold text-slate-800">
              En La<span className="text-red-900">Mila</span>Grosa encontre una
              de las mejores servicios en cuanto a atention y calidad, uno de
              los mejores lugares.
            </p>
          </div>
          <div className="m-2">
            {islogged ? (
              <Link href="menu">
                <button className="mt-2 p-2 w-40 font-bold text-red-800 border-2 border-red-800 bg-white rounded-2xl hover:bg-red-600 hover:text-white hover:border-red-800">
                  Combo 1
                </button>
              </Link>
            ) : (
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
            src={FoodImg}
            alt=""
          ></Image>
          <div className="flex flex-row">
            <TiStarFullOutline className="block text-yellow-500 text-xl w-6 h-8" />
            <TiStarFullOutline className="block text-yellow-500 text-xl w-6 h-8" />
            <TiStarFullOutline className="block text-yellow-500 text-xl w-6 h-8" />
            <TiStarFullOutline className="block text-yellow-500 text-xl w-6 h-8" />
          </div>
          <div className="p-2">
            <h2 className="font-bold text-2xl text-red-800 mb-2">Combo 2</h2>
            <p className="leading-relaxed font-bold text-slate-800">
              En La<span className="text-red-900">Mila</span>Grosa encontre una
              de las mejores servicios en cuanto a atention y calidad, uno de
              los mejores lugares.
            </p>
          </div>
          <div className="m-2">
            {islogged ? (
              <Link href="menu">
                <button className="mt-2 p-2 w-40 font-bold text-red-800 border-2 border-red-800 bg-white rounded-2xl hover:bg-red-600 hover:text-white hover:border-red-800">
                  Combo 2
                </button>
              </Link>
            ) : (
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
            src={FoodImg}
            alt=""
          ></Image>
          <div className="flex flex-row">
            <TiStarFullOutline className="block text-yellow-500 text-xl w-6 h-8" />
            <TiStarFullOutline className="block text-yellow-500 text-xl w-6 h-8" />
            <TiStarFullOutline className="block text-yellow-500 text-xl w-6 h-8" />
          </div>
          <div className="p-2">
            <h2 className="font-bold text-2xl text-red-800 mb-2">Combo 3</h2>
            <p className="leading-relaxed font-bold text-slate-800">
              En La<span className="text-red-900">Mila</span>Grosa encontre una
              de las mejores servicios en cuanto a atention y calidad, uno de
              los mejores lugares.
            </p>
          </div>
          <div className="m-2">
            {islogged ? (
              <Link href="menu">
                <button className="mt-2 p-2 w-40 font-bold text-red-800 border-2 border-red-800 bg-white rounded-2xl hover:bg-red-600 hover:text-white hover:border-red-800">
                  Combo 3
                </button>
              </Link>
            ) : (
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
            src={FoodImg}
            alt=""
          ></Image>
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
              En La<span className="text-red-900">Mila</span>Grosa encontre una
              de las mejores servicios en cuanto a atention y calidad, uno de
              los mejores lugares.
            </p>
          </div>
          <div className="m-2">
            {islogged ? (
              <Link href="menu">
                <button className="mt-2 p-2 w-40 font-bold text-red-800 border-2 border-red-800 bg-white rounded-2xl hover:bg-red-600 hover:text-white hover:border-red-800">
                  Combo 4
                </button>
              </Link>
            ) : (
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
