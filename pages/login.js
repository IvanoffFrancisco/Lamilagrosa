import { FaFacebook, FaLinkedinIn, FaGoogle, FaRegEnvelope, fa } from 'react-icons/fa'
import  { MdLockOutline } from 'react-icons/md'
import Link from "next/link";
import Image from "next/image"
import LoginImage from '../public/img/login-and-register.png'


export default function Login() {
        
    return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-100">
        <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
            <div className='bg-white rounded-2xl shadow-2xl flex w-2/3 max-w-4xl'>
            <div className='w-3/5 p-5'>
            <form action="#" method="GET">
            <div className='text-left font-bold'>
                <Image
                    src={LoginImage}
                    alt="Picture of the author"
                    width={150}
                    height={100}
                    
                />
            </div>
                <div className='py-10'>
                <h2 className='text-3xl font-bold text-sky-500'>Ingresa con tu Cuenta</h2>
                </div>
                <div className='border-2 w-36 border-sky-500 inline-block mb-2'></div>
                <div className='flex justify-center my-2'>
                <a href='#' className='border-2 border-sky-300 rounded-full p-3 mx-1'>
                    <FaFacebook className='text-sm  text-sky-600'/>
                </a>
                <a href='#' className='border-2 border-sky-300 rounded-full p-3 mx-1'>
                    <FaLinkedinIn className='text-sm  text-sky-600'/>
                </a>
                <a href='#' className='border-2 border-sky-300 rounded-full p-3 mx-1'>
                    <FaGoogle className='text-sm text-sky-600 '/>
                </a>
                </div>
                 {/* Social login section */}
                <p className='text-gray-400 my-3'>o usa tu email para ingresar</p>
                <div className='flex flex-col items-center'>
                <div className='bg-gray-100 w-5/6 p-2 flex items-center mb-3'>
                <FaRegEnvelope className='text-sky-400 m-2'/> 
                    <input 
                        type='email'
                        name='email' 
                        placeholder='Email' 
                        className='bg-gray-100 outline-none text-sm flex-1 hover:border-b-2 border-sky-400' 
                        required={true}
                    />
                </div>
                <div className='bg-gray-100 w-5/6 p-2 flex items-center'>
                <MdLockOutline className='text-sky-400 m-2'/> 
                    <input 
                        type='password' 
                        name='password' 
                        placeholder='Password' 
                        className='bg-gray-100 outline-none text-sm flex-1 hover:border-b-2 border-sky-400' 
                        required={true}
                    />
                </div>
                <div className='flex justify-between w-64 m-5'>
                    <label className='flex items-center text-xs'><input type='checkbox' name='remember' className='mr-1'/>Recordar Sesión</label>
                    <a href='#' className='text-xs justify-between hover:border-b-2 border-sky-400'>Olvidaste tu contraseña?</a>
                </div>
                <button className='border-2 border-sky-400 text-sky-400  rounded-full px-12 py-2 inline-block font-semibold hover:bg-sky-500 hover:text-white'>Inicia Sesión</button>
                </div>
            </form>
            </div>
            {/* Sign in section */}
            <div className='w-2/5 bg-sky-500 text-white rounded-tr-2xl rounded-br-2xl py-36 px-12'>
                <form action="#" method="Get">
                    <h2 className='text-3xl font-bold mb-2'>Bienvenido!</h2>
                    <div className='border-2 w-10 border-white inline-block mb-2'></div>
                    <p className='mb-10'>Si no tenes una cuenta, ingresa tus datos para loguearte a la App</p>
                    <Link href='/register'>
                    <button className='border-2 border-white rounded-full px-12 py-2 inline-block font-semibold hover:bg-white hover:text-sky-500'>Registrate</button>
                    </Link>
                </form>
            </div> 
            {/* Sign up section */}
            </div>
        </main>
        </div>
    )
}
