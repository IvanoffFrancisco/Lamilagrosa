import React from 'react';
import { BsTelephoneFill } from "react-icons/bs";
import { GrMail } from "react-icons/gr";
import { HiLocationMarker } from "react-icons/hi";
import { FaInstagram, FaTwitter, FaFacebook, FaLinkedinIn, FaGithub} from "react-icons/fa";

export default function contact() {
    return (
        <div className="bg-white w-screen md:h-screen h-96">
            <div className='flex justify-around content-center items-center mx-20 m-36 md:flex-row flex-col'>
                {/* textual content */}
                <div className='md:w-1/2 w-full md:p-10 my-10 md:my-0  flex-col'>
                    <h1 className='text-4xl font-semibold text-sky-500 mb-4'>Contacta con nosotros</h1>
                    <p className='text-gray-400 font-semibold text-sm'>
                        Llena el formulario y nuestro equipo te respondera dentro de 12 horas!
                    </p>
                    <div className='flex-col my-8 gap-5 flex '> {/* w-2/6 */}   
                        <div className='flex gap-5 p-4 border border-gray-500 hover:border-sky-400 md:w-1/2 rounded-lg group cursor-pointer items-center'>
                            <BsTelephoneFill className='text-gray-500 ml-3 text-xl group-hover:text-sky-400'/>
                            <p className='text-sky-500 text-base font-semibold ml-3'>+54-3794-612832</p>	
                        </div>
                    </div>
                    <div className='flex-col my-8 gap-5 flex'>   
                        <div className='flex gap-5 p-4 border border-gray-500 hover:border-sky-400 md:w-1/2 rounded-lg group cursor-pointer items-center'>
                            <GrMail className='text-gray-500 ml-3 text-xl group-hover:text-sky-400'/>
                            <p className='text-sky-500 text-base font-semibold ml-3'>laMilaGrosa@gmail.com</p>	
                        </div>
                    </div>
                    <div className='flex-col my-8 gap-5 flex'>   
                        <div className='flex gap-5 p-4 border border-gray-500 hover:border-sky-400 md:w-1/2 rounded-lg group cursor-pointer items-center'>
                            <HiLocationMarker className='text-gray-500 ml-3 text-xl group-hover:text-sky-400'/>
                            <p className='text-sky-500 text-base font-semibold ml-3'>Pellegrini 1252, Corrientes-AR</p>	
                        </div>
                    </div>
                    <div className='flex gap-8 justify-center md:justify-start'>
                        <FaInstagram className='text-2xl text-gray-500 hover:text-sky-400 cursor-pointer '/>
                        <FaFacebook className='text-2xl text-gray-500 hover:text-sky-400 cursor-pointer '/>
                        <FaTwitter className='text-2xl text-gray-500 hover:text-sky-400 cursor-pointer '/>
                        <FaLinkedinIn className='text-2xl text-gray-500 hover:text-sky-400 cursor-pointer '/>
                        <FaGithub className='text-2xl text-gray-500 hover:text-sky-400 cursor-pointer '/>
                    </div>
                </div>
                {/* contact form */}
                <div className='bg-white p-12 rounded-lg -ml-96 shadow-md'>
                    <h1 className='text-3xl font-bold text-sky-500 mb-8'>Formulario de sugerencia</h1>
                    <form action='#' method='GET'>
                        <div className='grid xl:grid-cols-2 xl:gap-10'>
                            <input 
                                type='text' 
                                name='usuario' 
                                id='usuario' 
                                className='form-control block w-full px-3 py-2 mb-5 text-base font-normal text-gray-500 bg-white bg-clip-padding border border-solid border-sky-400 rounded-md transition ease-in-out m-0 focus:text-gray-600 focus:bg-white focus:border-sky400 focus:outline-none' 
                                placeholder='Usuario' 
                                required={true}
                            />
                            <input 
                                type='number' 
                                name='numero' 
                                id='numero' 
                                className='form-control block w-full px-3 py-2 mb-5 text-base font-normal text-gray-500 bg-white bg-clip-padding border border-solid border-sky-400 rounded-md transition ease-in-out m-0 focus:text-gray-600 focus:bg-white focus:border-sky400 focus:outline-none' 
                                placeholder='Numero de telofono' 
                                required={true}
                            />
                        </div>
                            <input 
                                type='email' 
                                name='email' 
                                id='email' 
                                className='form-control block w-full px-3 py-2 mb-5 text-base font-normal text-gray-500 bg-white bg-clip-padding border border-solid border-sky-400 rounded-md transition ease-in-out m-0 focus:text-gray-600 focus:bg-white focus:border-sky400 focus:outline-none' 
                                placeholder='Correo electronico' 
                                required={true}
                            />
                            <input 
                                type='text' 
                                name='recomendacion' 
                                id='recomendacion' 
                                className='form-control block w-full px-3 py-2 mb-5 text-base font-normal text-gray-500 bg-white bg-clip-padding border border-solid border-sky-400 rounded-md transition ease-in-out m-0 focus:text-gray-600 focus:bg-white focus:border-sky400 focus:outline-none' 
                                placeholder='Que tipo de sugerencia desea agregar' 
                                required={true}
                            />
                            <div className='flex justify-center'>
                            <textarea 
                                rows='3' 
                                id='text_area' 
                                className='form-control block w-full px-3 py-2 mb-5 text-base font-normal text-gray-500 bg-white bg-clip-padding border border-solid border-sky-400 rounded-md transition ease-in-out m-0 focus:text-gray-600 focus:bg-white focus:border-sky400 focus:outline-none' 
                                placeholder='Comente aqui su sugerencia' 
                                required={true}
                            ></textarea>
                            </div>
                            <button type='submit' className='text-sky-400 bg-white hover:bg-sky-400 hover:text-white border border-sky-400 focus:ring-4 focus:outline-none focus:ring-sky-400 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center'>
                                Enviar Sugerencia
                            </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
