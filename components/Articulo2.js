import React from 'react'
import Combos from './Combos'
import Promos from './Promos'

export default function Articulo2() {
    return (
    <div className='m-auto text-center my-20'>
        <div className='my-12'>
            <h1 className='font-bold text-3xl text-red-800'>Inicia Sesion o Registrate para acceder a estas bombas!!!</h1>
            <h2 className='font-bold text-2xl text-black'>Las promociones y combos mas grosos de la La<span className='text-red-500'>Mila</span>Grosa</h2>
        </div>
        <Promos />
    <div className='border-2 border-orange-300 rounded-full min-w-screen my-20 flex justify-center text-start'></div>
        <Combos />
    </div>
    )
}
