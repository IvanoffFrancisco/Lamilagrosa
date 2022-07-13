import { useState } from "react";

import Link from "next/link";
import Image from "next/image";
import Error from "../components/error";

import {
  FaFacebook,
  FaLinkedinIn,
  FaGoogle,
  FaRegEnvelope,
} from "react-icons/fa";
import { MdLockOutline } from "react-icons/md";

/**
 * Datos validos:
 * Email: seba@test.com
 * Password: seba
 */

export default function Login() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  //state that saves the error message to print on the screen
  const [message, setMessage] = useState("");

  //state that checks if there is an error in the form data
  const [error, setError] = useState(false);

  //extract values ​​from user state
  const { email, password } = user;

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // if ([email, password].includes("")) {
    //   setMessage("Todos los Campos son requeridos");
    //   setError(true);
    //   return;
    // }
    // setError(false);

    if (email === "seba@test.com" && password === "seba") {
      //Reinicia el formulario
      setUser({
        email: "",
        password: "",
      });

      return;
    } else {
      setError(true);
      setMessage("Nombre de Usuario o Clave Incorrectas");
    }
  };

  return (
    <div className="w-full h-screen bg-gray-200 flex items-center">
      <main className="w-[800px] mx-auto flex flex-col-reverse md:flex-row justify-center text-center max-w-[85%]">
        <div className="w-full md:w-1/2 max-w-[400px] mx-auto bg-white py-6 flex justify-center items-center rounded-l-lg ">
          <form
            action="#"
            method="GET"
            onSubmit={handleSubmit}
            className="w-full px-9 py-6"
          >
            <Image
              src="/img/logo-web-LaMilaGrosa2.png"
              alt="Picture of the author"
              width={190}
              height={120}
            />
            <h2 className="text-3xl font-semibold text-sky-500 pt-5 pb-5 ">
              Iniciar Sesión
            </h2>
            {error && <Error message={message} setError={setError} />}
            <div className="flex flex-col items-center">
              <div className="bg-gray-100 w-full py-2 flex items-center mb-3 rounded-sm">
                <FaRegEnvelope className="text-sky-400 mx-2" />
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email"
                  className="w-full bg-gray-100 outline-none text-sm mr-2 border-sky-400"
                  required={true}
                  value={email}
                  onChange={handleChange}
                />
              </div>
              <div className="bg-gray-100 w-full py-2 flex items-center mb-1 rounded-sm">
                <MdLockOutline className="text-sky-400 mx-[6px]" size="20px" />
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Password"
                  className="w-full bg-gray-100 outline-none text-sm mr-2 border-sky-400"
                  required={true}
                  value={password}
                  onChange={handleChange}
                />
              </div>
              <div className="flex justify-around w-full py-3">
                <label className="text-[10px] md:text-[11px] flex items-center ">
                  <input
                    type="checkbox"
                    name="remember"
                    className="mr-1 cursor-pointer"
                  />
                  Recordar Sesión
                </label>
                <Link href="/password">
                  <a className="text-[10px] md:text-[11px] hover:text-sky-400 ease-in duration-200 border-sky-400">
                    Olvidaste tu contraseña?
                  </a>
                </Link>
              </div>

              <button className="px-10 py-2 mb-12 mt-6 text-sky-400 font-bold border-2 border-sky-400 rounded-full hover:bg-sky-500 ease-in duration-200 hover:text-white tracking-wide uppercase">
                Iniciar Sesión
              </button>

              <p className="text-gray-400 pb-3 ">o inicia con</p>
              {/* Social login section */}
              <div className="flex justify-center gap-x-6">
                <Link href="/">
                  <a className="rounded-full bg-blue-600 shadow-sm shadow-gray-800 p-2 cursor-pointer flex ease-in duration-200 hover:text-blue-600 hover:shadow-md hover:shadow-black">
                    <FaFacebook size="20px" color="white" className="" />
                  </a>
                </Link>
                <Link href="/">
                  <a className="rounded-full bg-blue-500 shadow-sm shadow-gray-800 p-2 cursor-pointer flex ease-in duration-200 hover:text-blue-500 hover:shadow-md hover:shadow-black">
                    <FaLinkedinIn size="20px" color="white" className="" />
                  </a>
                </Link>
                <Link href="/">
                  <a className="rounded-full bg-red-600 shadow-sm shadow-gray-800 p-2 cursor-pointer flex ease-in duration-200 hover:text-red-600 hover:shadow-md hover:shadow-black">
                    <FaGoogle size="20px" color="white" className="" />
                  </a>
                </Link>
              </div>
            </div>
          </form>
        </div>

        {/* Sign in section */}
        <div className="hidden w-full md:w-1/2 bg-sky-500 text-white md:flex justify-center items-center rounded-r-lg px-9">
          <form action="#" method="Get">
            <h2 className="text-3xl font-semibold pb-5 tracking-wide">
              Bienvenido!
            </h2>

            {/* <div className="border w-10 border-white inline-block mb-2"></div> */}
            <p>
              Todavia no sos parte de{" "}
              <span className="text-black font-semibold">La </span>
              <span className="text-red-600 font-semibold">Mila </span>
              <span className="text-black font-semibold">Grosa?</span>
            </p>
            <p className="mb-5 mt-2">
              Registrate ya y accede a todas nuestras promociones y descuentos
              exclusivos para los Grosos como vos!{" "}
            </p>
            <Link href="/register">
              <button className="border-2 border-white rounded-full px-12 py-2 inline-block font-semibold hover:bg-white hover:text-sky-500 ease-in duration-200 uppercase">
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
