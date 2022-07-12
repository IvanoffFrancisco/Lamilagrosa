import Link from "next/link";
import Image from "next/image";

import LoginImage from "../public/img/login-and-register.png";

import {
  FaFacebook,
  FaLinkedinIn,
  FaGoogle,
  FaRegEnvelope,
} from "react-icons/fa";
import { MdLockOutline } from "react-icons/md";

export default function Login() {
  return (
    <div className="w-full h-screen bg-gray-100 flex items-center">
      <main className="w-[900px] mx-auto flex flex-col-reverse md:flex-row justify-center text-center max-w-[85%]">
        <div className="w-full md:w-1/2 bg-white py-6 flex justify-center items-center rounded-l-lg ">
          <form action="#" method="GET" className="pt-6">
            <Image
              src={LoginImage}
              alt="Picture of the author"
              width={190}
              height={120}
            />
            <h2 className="text-3xl font-bold text-sky-500 pt-4 pb-6">
              Iniciar Sesión
            </h2>

            <div className="flex justify-center gap-x-3">
              <Link href="/">
                <a className="rounded-full bg-white shadow-sm shadow-gray-800 p-2 cursor-pointer flex ease-in duration-200 hover:text-blue-600">
                  <FaFacebook size="15px" className="" />
                </a>
              </Link>
              <Link href="/">
                <a className="rounded-full bg-white shadow-sm shadow-gray-800 p-2 cursor-pointer flex ease-in duration-300 hover:text-blue-500">
                  <FaLinkedinIn size="15px" className="" />
                </a>
              </Link>
              <Link href="/">
                <a className="rounded-full bg-white shadow-sm shadow-gray-800 p-2 cursor-pointer flex ease-in duration-200 hover:text-red-600">
                  <FaGoogle size="15px" className="" />
                </a>
              </Link>
            </div>

            {/* Social login section */}
            <p className="text-gray-400 py-4">o usa tu email</p>
            <div className="flex flex-col items-center">
              <div className="bg-gray-100 w-full py-2 flex items-center max-w-[90%] mb-3 rounded-sm">
                <FaRegEnvelope className="text-sky-400 mx-2" />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="bg-gray-100 outline-none text-sm flex-1 mr-2 border-sky-400"
                  required={true}
                />
              </div>
              <div className="bg-gray-100 w-full py-2 flex items-center max-w-[90%] mb-1 rounded-sm">
                <MdLockOutline className="text-sky-400 mx-[6px]" size="20px" />
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  className="bg-gray-100 outline-none text-sm mr-2 border-sky-400"
                  required={true}
                />
              </div>
              <div className="flex justify-between w-64 m-5 pb-6">
                <label className="flex items-center text-xs">
                  <input
                    type="checkbox"
                    name="remember"
                    className="mr-1 cursor-pointer"
                  />
                  Recordar Sesión
                </label>
                <a
                  href="#"
                  className="text-xs justify-between hover:text-sky-400 ease-in duration-200 border-sky-400"
                >
                  Olvidaste tu contraseña?
                </a>
              </div>
              <button className="border-2 border-sky-400 text-sky-600 rounded-full px-12 py-2 mb-10 inline-block font-semibold hover:bg-sky-500 ease-in duration-300 hover:text-white tracking-widest">
                Inicia Sesión
              </button>
            </div>
          </form>
        </div>
        {/* Sign in section */}
        <div className="hidden w-full md:w-1/2 bg-sky-500 text-white md:flex justify-center items-center p-8 rounded-r-lg">
          <form action="#" method="Get">
            <h2 className="text-3xl font-bold py-5 tracking-wide">Bienvenido!</h2>
            {/* <div className="border w-10 border-white inline-block mb-2"></div> */}
            <p >
              Si todavia no sos parte de los{" "}
              <span className="text-red-600 font-semibold">Grosos</span>
            </p>
            <p className="mb-5">registrate aca</p>
            <Link href="/register">
              <button className="border-2 border-white rounded-full px-12 py-2 inline-block font-semibold hover:bg-white hover:text-sky-500 ease-in duration-300">
                Registrate
              </button>
            </Link>
          </form>
        </div>
        {/* Sign up section */}
      </main>
    </div>
  );
}
