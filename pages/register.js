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
  import { useState } from "react";
  import Error from "../components/Error";

  export default function Register() {
    //stores the form fields
    const [user, setUser] = useState({
      nombreUsuario: "",
      email: "",
      direccion: "",
      password: "",
      passwordConfirm: "",
    });

    //state that checks if there is an error in the form data
    const [error, setError] = useState(false);
    //state that saves the error message to print on the screen
    const [message, setMessage] = useState("");

    //extract values ​​from user state
    const { nombreUsuario, email, direccion, password, passwordConfirm } = user;

    function handleSubmit(e) {
      e.preventDefault();

      if (password === passwordConfirm) {
        // console.log(
        //   `Los datos del registro son:
        //   Nombre de usuario: ${nombreUsuario}
        //   Direccion: ${direccion}
        //   Email ${email}
        //   Password ${password}`
        // );

        // Reset the form
        setUser({
          nombreUsuario: "",
          email: "",
          direccion: "",
          password: "",
          passwordConfirm: "",
        });

        setError(false);
      } else {
        setError(true);
        setMessage("Las contraseñas no coinciden");
      }
    }

    //stores the data entered in each field of the form
    function onChange(e) {
      setUser({
        ...user,
        [e.target.id]: e.target.value,
      });
    }

    return (
      <div className="w-full h-screen bg-gray-200 flex items-center">
        <main className="w-[850px] mx-auto flex flex-col-reverse md:flex-row-reverse justify-center text-center max-w-[85%]">
          <div className="w-full md:w-1/2 max-w-[425px] mx-auto bg-white py-10 flex justify-center items-center rounded-r-lg ">
            <form
              action="#"
              method="GET"
              className="w-full px-9 py-1"
              onSubmit={handleSubmit}
            >
              <Image
                src={LoginImage}
                alt="Picture of the author"
                width={190}
                height={120}
              />
              <h2 className="text-2xl font-semibold text-sky-500 pt-3 pb-5 ">
                Crea tu Cuenta
              </h2>
              {error && <Error message={message} />}
              <div className="w-full flex flex-col items-center">
                <div className="w-full my-1 bg-gray-100 flex items-center rounded-md px-1">
                  <FaUser className="text-sky-400 mx-2" />
                  <input
                    type="text"
                    value={nombreUsuario}
                    id="nombreUsuario"
                    placeholder="Nombre de usuario"
                    className="bg-gray-100 outline-none text-sm py-3 w-full"
                    required
                    onChange={onChange}
                  />
                </div>
                <div className="w-full my-1 bg-gray-100 flex items-center rounded-md px-1">
                  <FaRegEnvelope className="text-sky-400 mx-2" />
                  <input
                    type="email"
                    value={email}
                    id="email"
                    placeholder="Email"
                    className="bg-gray-100 outline-none text-sm py-3 w-full"
                    required
                    onChange={onChange}
                  />
                </div>
                <div className="w-full my-1 bg-gray-100 flex items-center rounded-md px-1">
                  <MdAddLocationAlt className="text-sky-400 mx-2" />
                  <input
                    type="text"
                    value={direccion}
                    id="direccion"
                    placeholder="Dirección postal"
                    className="bg-gray-100 outline-none text-sm py-3 w-full"
                    required
                    onChange={onChange}
                  />
                </div>
                <div className="w-full my-1 bg-gray-100 flex items-center rounded-md px-1">
                  <MdLockOutline className="text-sky-400 mx-2" />
                  <input
                    type="password"
                    value={password}
                    id="password"
                    placeholder="Contraseña"
                    className="bg-gray-100 outline-none text-sm py-3 w-full"
                    required
                    onChange={onChange}
                  />
                </div>
                <div className="w-full my-1 bg-gray-100 flex items-center rounded-md px-1">
                  <MdLock className="text-sky-400 mx-2" />
                  <input
                    type="password"
                    value={passwordConfirm}
                    id="passwordConfirm"
                    placeholder="Confirmar contraseña"
                    className="bg-gray-100 outline-none text-sm py-3 w-full"
                    required
                    onChange={onChange}
                  />
                </div>

                <button className="px-24 py-[10px] mt-7 text-xs text-sky-400 font-semibold border-2 border-sky-400 rounded-full hover:bg-sky-500 ease-in duration-200 hover:text-white tracking-widest uppercase">
                  Registrarse
                </button>

                <label className="flex items-center text-[10px] mt-2 mb-6 tracking-wide">
                  <input type="checkbox" name="remember" className="mr-1" />
                  Acepta someter su paladar a una nueva experiencia?
                </label>
              </div>

              {/* Social login section */}
              <p className="text-gray-400 pb-3">o registrate con</p>
              <div className="flex justify-center gap-x-6">
                <Link href="/">
                  <a className="rounded-full bg-blue-600 shadow-sm shadow-gray-800 p-2 cursor-pointer flex ease-in duration-200 hover:shadow-md hover:shadow-black">
                    <FaFacebook size="15px" color="white" />
                  </a>
                </Link>
                <Link href="/">
                  <a className="rounded-full bg-blue-500 shadow-sm shadow-gray-800 p-2 cursor-pointer flex ease-in duration-200 hover:shadow-md hover:shadow-black">
                    <FaLinkedinIn size="15px" color="white" />
                  </a>
                </Link>
                <Link href="/">
                  <a className="rounded-full bg-red-600 shadow-sm shadow-gray-800 p-2 cursor-pointer flex ease-in duration-200 hover:shadow-md hover:shadow-black">
                    <FaGoogle size="15px" color="white" />
                  </a>
                </Link>
              </div>
            </form>
          </div>

          <div className="hidden md:w-1/2 bg-sky-500 text-white md:flex justify-center items-center rounded-l-lg px-9">
            <div>
              <h2 className="text-3xl font-semibold pb-3 tracking-wide">
                Bienvenido!
              </h2>
              <p className="mb-2 tracking-wide">
                Estas a punto de ingresar a nuestra gran familia de
                <span className="text-red-600 font-semibold"> Mila</span>
                <span className="text-black font-semibold">Grosos.</span>
              </p>
              <p className="tracking-wide">
                Al registrarte aceptas someter tu paladar a una nueva experiencia
                de la que nunca querras volver
              </p>

              <p className="mt-16 text-[10px] text-gray-800 tracking-wide">
                Si ya tenes una cuenta hace click aquí
              </p>
              <Link href="/login">
                <button className="text-xs border-2 border-white rounded-full mt-2 px-24 py-[10px] font-semibold hover:bg-white hover:text-sky-500 ease-in duration-200 uppercase tracking-widest">
                  Iniciar Sesión
                </button>
              </Link>
            </div>
          </div>
        </main>
      </div>
    );
  }
