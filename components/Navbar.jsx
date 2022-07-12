import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { MdOutlineLocalGroceryStore } from "react-icons/md";
import { AiOutlineMenu, AiOutlineClose, AiFillInstagram } from "react-icons/ai";
import { FaFacebook, FaYoutube, FaTwitter} from "react-icons/fa";
import { BiUser } from "react-icons/bi";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="fixed w-full h-20 z-[900] top-0 shadow-lg bg-white">
      <div className="max-w-[80%] mx-auto flex justify-between items-center w-full h-full ">
        <Link href="/">
          <a className="pt-1">
            <Image
              layout="fixed"
              width="130"
              height="80"
              src="/img/logo-LaMilaGrosa-final.png"
              alt="logo"
              className="cursor-pointer hover:scale-105"
            />
          </a>
        </Link>

        <div>
          <ul className="hidden md:flex cursor-pointer md:gap-x-4 md:text-sm lg:gap-x-6 lg:text-base xl:gap-x-10 2xl:gap-x-16 uppercase">
            <Link href="/">
              <li className=" hover:border-b hover:border-blue-400">Inicio</li>
            </Link>
            <Link href="/menu">
              <li className=" hover:border-b hover:border-blue-400">Menu</li>
            </Link>
            <Link href="/nosotros">
              <li className=" hover:border-b hover:border-blue-400">
                Nosotros
              </li>
            </Link>
            <Link href="/locales">
              <li className=" hover:border-b hover:border-blue-400">Locales</li>
            </Link>
            <Link href="/contacto">
              <li className=" hover:border-b hover:border-blue-400">
                Contacto
              </li>
            </Link>
            {/* <Link href="/login">
              <li className=" hover:border-b hover:border-blue-400">
                Login
              </li>
            </Link> */}
          </ul>
        </div>

        <div className="flex gap-10  transition-transform ease-in duration-200 items-center">
          <div className="flex justify-center items-center">
            <BiUser size="39px" className="hover: text-blue-600" />
            <div className="flex flex-col">
            <Link href="/login">
              <p className="text-sm cursor-pointer hover:text-red-600">Identificate</p>
            </Link>
            <Link href="/register">
              <p className="text-sm cursor-pointer tracking-wide hover:text-red-600">Registrate</p>
            </Link>
            </div>
          </div>

          <Link href="/">
            <a>
              <MdOutlineLocalGroceryStore
                size="30px"
                className="text-blue-600 relative hover:scale-110"
              />
            </a>
          </Link>
          <div
            onClick={handleNav}
            className="flex gap-x-3 md:hidden cursor-pointer"
          >
            <AiOutlineMenu size={25} />
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
              : "fixed left-[-100%] top-0 px-8 pt-2 ease-in duration-500 border-b-2"
          }
        >
          <div>
            <div className="flex w-full items-center justify-between pb-2 border-b border-gray-300">
              <Image
                src="/img/logo-LaMilaGrosa-final.png"
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
            <div className="my-6">
              <p className="w-[85%] md:w-[90%] py-4 text-center text-blue-600">
                La Mila Grosa
              </p>
            </div>
          </div>

          <div className="pl-4 mt-16 flex flex-col">
            <ul className="uppercase text-md">
              <Link href="/">
                <li className="mb-8 cursor-pointer">Inicio</li>
              </Link>
              <Link href="/menu">
                <li className="mb-8 cursor-pointer">Menu</li>
              </Link>
              <Link href="/">
                <li className="mb-8 cursor-pointer">Nosotros</li>
              </Link>
              <Link href="/">
                <li className="mb-8 cursor-pointer">Locales</li>
              </Link>
              <Link href="/">
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
