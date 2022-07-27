import Image from "next/image";
import Link from "next/link";
import { useState, useContext, useEffect } from "react";
// import { CarritoContext } from "../contexts/CarritoContext";
import { UsuarioContext } from "../contexts/UsuarioContext";

import { MdOutlineLocalGroceryStore } from "react-icons/md";
import { AiOutlineMenu, AiOutlineClose, AiFillInstagram } from "react-icons/ai";
import { FaFacebook, FaYoutube, FaTwitter } from "react-icons/fa";
import { BiUserCircle } from "react-icons/bi";

const Navbar = ({ carrito }) => {
  const [nav, setNav] = useState(false);

  //contextUsuario
  const { userGlobal, setUserGlobal, isloged, setIsloged } =
    useContext(UsuarioContext);
  //contextCarrito
  // const { carrito, setCarrito } = useContext(CarritoContext);

  useEffect(() => {
    // console.log("chequeando localStorage");
    // const localCarrito = JSON.parse(localStorage.getItem("LMG-Carrito"));
    // if (localCarrito) {
    //   console.log("localCarrito no es null");
    //   setCarrito(localCarrito);
    // }
    // setCarrito(JSON.parse(localStorage.getItem("LMG-Carrito")));
    setUserGlobal(JSON.parse(localStorage.getItem("LMG-user")));
    setIsloged(localStorage.getItem("isLogged"));
  }, []);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="fixed w-full h-20 z-[900] top-0 shadow-lg bg-white">
      <div className="max-w-[95%] xs:max-w-[90%] md:max-w-[85%] mx-auto flex justify-between items-center w-full h-full ">
        <Link href="/">
          <a className="pt-1">
            <div className="w-[100px] xs:w-[110px] md:w-[130px]">
              <Image
                width="130"
                height="80"
                src="/img/logo-web-LaMilaGrosa2.png"
                alt="logo"
                className="cursor-pointer"
              />
            </div>
          </a>
        </Link>

        <div>
          <ul className="hidden md:flex cursor-pointer md:gap-x-4 md:text-xs lg:gap-x-6 lg:text-base xl:gap-x-10 2xl:gap-x-16 uppercase">
            <Link href="/">
              <li className="hover:ring ring-blue-400 px-2 rounded-sm ease-in duration-200">
                Inicio
              </li>
            </Link>
            <Link href="/menu">
              <li className="hover:ring ring-blue-400 px-2 rounded-sm ease-in duration-200">
                Menu
              </li>
            </Link>
            <Link href="/nosotros">
              <li className="hover:ring ring-blue-400 px-2 rounded-sm ease-in duration-200">
                Nosotros
              </li>
            </Link>
            <Link href="/locales">
              <li className="hover:ring ring-blue-400 px-2 rounded-sm ease-in duration-200">
                Locales
              </li>
            </Link>
            <Link href="/contacto">
              <li className="hover:ring ring-blue-400 px-2 rounded-sm ease-in duration-200">
                Contacto
              </li>
            </Link>
          </ul>
        </div>

        {/* logica para poder mostrar el avatar o el nombre de usuario */}
        <div className="flex transition-transform ease-in duration-200 items-center xs:gap-x-1 md:gap-x-3 lg:gap-x-4 ">
          {isloged ? (
            <div className="flex items-center">
              <div className="flex flex-col text-center">
                <p className="text-[10px]">Bienvenido</p>
                <p className="text-[10px] font-bold capitalize ">
                  {userGlobal?.user}
                </p>
              </div>
              <BiUserCircle
                size="32"
                className="text-gray-600 hover:text-blue-600 hover:scale-105 ease-in duration-200 cursor-pointer mr-2"
              />
            </div>
          ) : (
            <div className="md:flex md:flex-col lg:flex-row  justify-center items-center gap-1 lg:gap-2 hidden ">
              <Link href="/login">
                <a className="md:text-xs font-semibold tracking-widest hover:ring-1 ring-blue-600 px-1 py-1 rounded-md ease-in duration-200">
                  Iniciá sesión
                </a>
              </Link>
              <Link href="/register">
                <button className="bg-blue-600 text-white py-1.5 md:py-1 md:px-2 md:text-xs cursor-pointer rounded-md font-semibold tracking-widest hover:bg-white hover:text-black hover:ring-1 ring-blue-600 px-1 ease-in duration-200 lg:mr-5 ">
                  Registrate
                </button>
              </Link>
            </div>
          )}

          <Link href="/carrito">
            <div className="relative flex justify-between">
              <MdOutlineLocalGroceryStore
                size="30px"
                className="text-blue-600 relative hover:scale-110 ease-in duration-200"
              />
              <span className="text-xs font-semibold">{carrito?.length}</span>
            </div>
          </Link>
          <div
            onClick={handleNav}
            className="flex md:hidden cursor-pointer ml-3"
          >
            <AiOutlineMenu size="30" />
          </div>
        </div>
      </div>

      <div
        className={
          nav ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70" : ""
        }
      >
        <div
          className={
            nav
              ? "fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-white px-8 pt-2 ease-in duration-300"
              : "fixed left-[-120%] top-0 px-8 pt-2 ease-in duration-500 border-b-2"
          }
        >
          <div>
            <div className="flex w-full items-center justify-between pb-2 border-b border-gray-300">
              <Image
                src="/img/logo-web-LaMilaGrosa2.png"
                width="100"
                height="65"
                alt="logo"
              />

              <div
                onClick={handleNav}
                className="rounded-full bg-blue-500 shadow-md shadow-gray-800 p-3 cursor-pointer"
              >
                <AiOutlineClose />
              </div>
            </div>
          </div>

          {isloged ? null : (
            <div className="w-full flex flex-col mt-5 justify-center items-center gap-3">
              <Link href="/login">
                <a className="text-black lg:text-xs font-semibold tracking-widest hover:text-blue-600">
                  Iniciar sesión
                </a>
              </Link>
              <Link href="/register">
                <button className="flex bg-blue-600 text-white py-1.5 px-4 lg:text-xs cursor-pointer rounded-lg font-semibold tracking-widest hover:bg-white hover:text-black border-2 border-blue-600 ease-in duration-200 lg:mr-5 ">
                  Registrate
                </button>
              </Link>
            </div>
          )}

          <div className="pl-4 mt-16 flex flex-col">
            <ul className="uppercase text-md">
              <Link href="/">
                <li className="mb-8 cursor-pointer">Inicio</li>
              </Link>
              <Link href="/menu">
                <li className="mb-8 cursor-pointer">Menu</li>
              </Link>
              <Link href="/nosotros">
                <li className="mb-8 cursor-pointer">Nosotros</li>
              </Link>
              <Link href="/locales">
                <li className="mb-8 cursor-pointer">Locales</li>
              </Link>
              <Link href="/contacto">
                <li className="mb-8 cursor-pointer">Contacto</li>
              </Link>
            </ul>
            <div className="pt-10">
              <p className="uppercase mb-2 tracking-widest text-blue-500 text-center font-semibold text-sm">
                Seguinos En Nuestras Redes
              </p>
              <div className="flex items-center justify-around mx-auto py-4">
                <div className="rounded-full bg-white hover:bg-blue-500 shadow-md shadow-gray-800 p-3 cursor-pointer flex hover:scale-105 ease-in duration-300">
                  <FaFacebook size="20px" />
                </div>
                <div className="rounded-full bg-white hover:bg-blue-500 shadow-md shadow-gray-800 p-3 cursor-pointer flex hover:scale-105 ease-in duration-300">
                  <AiFillInstagram size="20px" />
                </div>
                <div className="rounded-full bg-white hover:bg-blue-500 shadow-md shadow-gray-800 p-3 cursor-pointer flex hover:scale-105 ease-in duration-300">
                  <FaTwitter size="20px" />
                </div>
                <div className="rounded-full bg-white hover:bg-blue-500 shadow-md shadow-gray-800 p-3 cursor-pointer flex hover:scale-105 ease-in duration-300">
                  <FaYoutube size="20px" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
