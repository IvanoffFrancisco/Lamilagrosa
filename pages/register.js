import Link from "next/link";
import Image from "next/image";

import LoginImage from "../public/img/login-and-register.png";

import {
  FaFacebook,
  FaLinkedinIn,
  FaGoogle,
  FaRegEnvelope,
  FaUser,
} from "react-icons/fa";
import { MdLockOutline, MdLock, MdAddLocationAlt } from "react-icons/md";

export default function register() {
  return (
    <div className="w-full h-screen bg-gray-200 flex items-center">
      <main className="w-[850px] mx-auto flex flex-col-reverse md:flex-row-reverse justify-center text-center max-w-[85%]">
        <div className="w-full md:w-1/2 max-w-[425px] mx-auto bg-white py-10 flex justify-center items-center rounded-l-lg ">
          <form action="#" method="GET" className="w-full px-9 py-1">
            <Image
              src={LoginImage}
              alt="Picture of the author"
              width={190}
              height={120}
            />
            <h2 className="text-3xl font-semibold text-sky-500 pt-3 pb-5 ">
              Crea tu Cuenta
            </h2>

            <div className="w-full flex flex-col items-center">
              <div className="w-full my-1 bg-gray-100 flex items-center rounded-sm">
                <FaUser className="text-sky-400 mx-2" />
                <input
                  type="text"
                  name="name"
                  placeholder="Usuario"
                  className="bg-gray-100 outline-none text-sm py-3 w-full"
                  required
                />
              </div>
              <div className="w-full my-1 bg-gray-100 flex items-center rounded-sm">
                <FaRegEnvelope className="text-sky-400 mx-2" />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="bg-gray-100 outline-none text-sm py-3 w-full"
                  required
                />
              </div>
              <div className="w-full my-1 bg-gray-100 flex items-center rounded-sm">
                <MdLockOutline className="text-sky-400 mx-2" />
                <input
                  type="password"
                  name="password"
                  placeholder="Contraseña"
                  className="bg-gray-100 outline-none text-sm py-3 w-full"
                  required
                />
              </div>
              <div className="w-full my-1 bg-gray-100 flex items-center rounded-sm">
                <MdLock className="text-sky-400 mx-2" />
                <input
                  type="password"
                  name="password"
                  placeholder="Confirmar contraseña"
                  className="bg-gray-100 outline-none text-sm py-3 w-full"
                  required
                />
              </div>
              <div className="w-full my-1 bg-gray-100 flex items-center rounded-sm">
                <MdAddLocationAlt className="text-sky-400 mx-2" />
                <input
                  type="text"
                  name="direccion"
                  placeholder="Agregar una dirección"
                  className="bg-gray-100 outline-none text-sm py-3 w-full"
                  required
                />
              </div>
              <button className="px-10 py-2  mt-7 text-sky-400 font-bold border-2 border-sky-400 rounded-full hover:bg-sky-500 ease-in duration-300 hover:text-white tracking-wide uppercase">
                Registrarse
              </button>
              <label className="flex items-center text-[11px] mt-1 mb-6">
                <input type="checkbox" name="remember" className="mr-1" />
                Acepta someter su paladar a una nueva experiencia?
              </label>
            </div>

            {/* Social login section */}
            <p className="text-gray-400 pb-3">o registrate con</p>
            <div className="flex justify-center gap-x-6">
              <Link href="/">
                <a className="rounded-full bg-blue-600 shadow-sm shadow-gray-800 p-2 cursor-pointer flex ease-in duration-200 hover:shadow-md hover:shadow-black">
                  <FaFacebook size="20px" color="white" />
                </a>
              </Link>
              <Link href="/">
                <a className="rounded-full bg-blue-500 shadow-sm shadow-gray-800 p-2 cursor-pointer flex ease-in duration-200 hover:shadow-md hover:shadow-black">
                  <FaLinkedinIn size="20px" color="white" />
                </a>
              </Link>
              <Link href="/">
                <a className="rounded-full bg-red-600 shadow-sm shadow-gray-800 p-2 cursor-pointer flex ease-in duration-200 hover:shadow-md hover:shadow-black">
                  <FaGoogle size="20px" color="white" />
                </a>
              </Link>
            </div>
          </form>
        </div>

        <div className="hidden md:w-1/2 bg-sky-500 text-white md:flex justify-center items-center rounded-r-lg px-9">
          <div>
            <h2 className="text-3xl font-semibold pb-3 tracking-wide">
              Bienvenido!
            </h2>
            <p>
              Estas a punto de ingresar a nuestra gran familia de
              <span className="text-red-600 font-semibold"> Mila</span>
              <span className="text-black font-semibold">Grosos.</span>
            </p>
            <p>
              Al registrarte aceptas someter tu paladar a una nueva experiencia
              de la que nunca querras volver
              {/* <span className="text-black font-semibold">La </span>
              <span className="text-red-600 font-semibold">Mila </span>
              <span className="text-black font-semibold">Grosa</span> */}
            </p>

            <p className="mt-16 text-xs text-gray-800">
              Si ya tenes una cuenta hace click aquí
            </p>
            <Link href="/login">
              <button className="border-2 border-white rounded-full mt-2 px-12 py-2 inline-block font-semibold hover:bg-white hover:text-sky-500 ease-in duration-300 uppercase">
                Iniciar Sesión
              </button>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
