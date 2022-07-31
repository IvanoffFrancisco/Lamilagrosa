import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import ProfileSideBar from '../components/ProfileSideBar'
import FoodImg from '../public/img/menues/barbacoa.jpg'

export default function OrderHistory() {
    return (
    <>
    <ProfileSideBar/>
    <div>
        <div className='bg-gray-200 h-full py-4'>
            <h1 className='text-center font-bold text-2xl  text-red-900 m-auto'>Historial de Compras</h1>
        </div>
        <div className='border-2 border-orange-300 rounded-full w-full'></div>
        <div className="mx-auto overflow-hidden  border-2 border-blue-800 bg-black  shadow-xl shadow-gray-400 mt-10 lg:w-3/5 lg:flex lg:flex-row lg:h-auto">
        <Image
            src={FoodImg}
            alt="Picture of the author"
            height={260}
            width={260}
            className="lg:w-1/2 lg:h-auto  overflow-hidden grid grid-flow-dense grid-row gap-4"
        />
        <div className="bg-sky-100 w-full p-2 ">
            <p className="flex items-start justify-start mb-4">
                <h1 className='text-blue-900 font-bold text-lg'>Pedido 1</h1>
            </p>
                <h3 className='text-blue-900 font-bold my-2'>id-venta: <span className='text-md'> "venta"</span></h3>
                <h3 className='text-blue-900 font-bold my-2'>Nombre: <span className='text-md'> "Nombre de la comida"</span></h3>
                <h3 className='text-blue-900 font-bold my-2'>Cantidad: <span className='text-md'> "Cantidad pedida"</span></h3>
                <h3 className='text-blue-900 font-bold my-2'>Monto del Pedido: <span className=' text-md'> "Precio total gastado"</span></h3>
                <h3 className='text-blue-900 font-bold my-2'>Fecha: <span className=' text-md'> "Fecha del pedido"</span></h3>
                <div className='flex justify-end'>
                <Link href="contacto">
                    <a className="text-base text-blue-900 hover:text-sky-500 font-bold hover:border-b-2 hover:border-blue-400">
                        Para contacto haga click aqui
                    </a>
                </Link>
                </div>
        </div>
        </div>
    </div> 
    </>
    )
}
