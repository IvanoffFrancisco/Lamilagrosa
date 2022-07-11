import Head from 'next/head'
import { FaFacebook, FaLinkedinIn, FaGoogle, FaRegEnvelope, FaUser, FaChevronCircleDown, FaUserPlus} from 'react-icons/fa'
import  { MdLockOutline, MdLock, MdAddLocationAlt } from 'react-icons/md'
import Link from 'next/link'
import Image from 'next/image'
import RegisterImage from '../public/img/login-and-register.png'

export default function register() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-100">
        <Head>
            <title>Create Next App</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
            <div className='bg-white rounded-2xl shadow-2xl flex w-2/3 max-w-4xl'>
            <div className='w-3/5 p-5'>
                <form action='' method='GET'>
                <div className='text-left'>
                    <FaUserPlus className='w-14 text-sky-600'/>
                </div>
                <div className='py-10'>
                <h2 className='text-3xl font-bold text-sky-500 mb-2'>Registrarse Aqui</h2>
                <p className='text-gray-400 mt-6'>Complete el formulario con sus datos para registrarse en la App</p>
                <p className='text-gray-400 mb-0'> Asi puede obtener acceso a los descuentos y demás beneficios que tenemos para ofrecerle a nuestros consumidores</p>
                </div>
            <div className='border-2 w-36 border-sky-500 inline-block mb-6'></div>
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
            <p className='text-gray-400 my-3'>o registrese con su email</p>
                <div className='flex flex-col items-center'>
                <div className='bg-gray-100 w-5/6 p-2 flex items-center mb-3'>
                    <FaUser className='text-sky-400 m-4'/> 
                    <input 
                        type='text' 
                        name='name' 
                        placeholder='Usuario' 
                        className='bg-gray-100 outline-none text-sm flex-1 hover:border-b-2 border-sky-400' 
                        required
                    />
                </div>
                <div className='bg-gray-100 w-5/6 p-2 flex items-center mb-3'>
                    <FaRegEnvelope className='text-sky-400 m-4'/> 
                    <input 
                        type='email' 
                        name='email' 
                        placeholder='Email' 
                        className='bg-gray-100 outline-none text-sm flex-1 hover:border-b-2 border-sky-400' 
                        required
                    />
                </div>
                <div className='bg-gray-100 w-5/6 p-2 flex items-center mb-3'>
                    <MdLockOutline className='text-sky-400 m-4'/> 
                    <input 
                        type='password' 
                        name='password' 
                        placeholder='Contraseña' 
                        className='bg-gray-100 outline-none text-sm flex-1 hover:border-b-2 border-sky-400' 
                        required
                    />
                </div>
                <div className='bg-gray-100 w-5/6 p-2 flex items-center mb-3'>
                    <MdLock className='text-sky-400 m-4'/> 
                    <input 
                        type='password' 
                        name='password' 
                        placeholder='Confirmar contraseña' 
                        className='bg-gray-100 outline-none text-sm flex-1 hover:border-b-2 border-sky-400' 
                        required
                    />
                </div>
                <div className='bg-gray-100 w-5/6 p-2 flex items-center mb-3'>
                    <MdAddLocationAlt className='text-sky-400 m-4'/> 
                    <input 
                        type='text' 
                        name='direccion' 
                        placeholder='Agregar una dirección' 
                        className='bg-gray-100 outline-none text-sm flex-1 hover:border-b-2 border-sky-400' 
                        required
                    />
                </div>
                    <button className='border-2 border-sky-400 text-sky-400  rounded-full px-12 py-2 inline-block font-semibold hover:bg-sky-500 hover:text-white'>Registrarse</button>
                </div>
                </form>
            </div>
            {/*  New Sign Up section */}
            <div className='w-94 bg-sky-500 text-white rounded-tr-2xl rounded-br-2xl py-36 px-12'>
                <form action='#' method='GET'>
                <h2 className='text-3xl font-bold mb-6'>Bienvenidos!</h2>
                <div className='border-2 w-28 border-white inline-block mb-4'></div>
                <p className='mb-6'>Si tiene una cuenta existente, ingrese aqui</p>
                <div className='flex justify-center my-2'><FaChevronCircleDown/></div>
                <Link href="/login">
                    <button className='border-2 border-white rounded-full px-12 py-2 inline-block font-semibold hover:bg-white hover:text-sky-500'>Ingresar</button>
                </Link>
                </form>
                <div className='mt-20'>
                <Image
                    src={RegisterImage}
                    alt="Picture of the author"
                    width={400}
                    height={300}
                    
                />
                </div>
                {/* New Sign In part */}
            </div> 
            </div>
        </main>
    </div>
    )
}





