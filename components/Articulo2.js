import React, {useState, useContext } from 'react'
import Combos from './Combos'
import Promos from './Promos'
import { UsuarioContext } from "../contexts/UsuarioContext";

export default function Articulo2() {

    const { userGlobal, islogged } = useContext(UsuarioContext);

    return (
    <div className='m-auto text-center my-20'>
        {islogged ? (
            <div className='my-12'>
                <h1 className='text-3xl font-extrabold text-red-800 py-3'>Bienvenido, {userGlobal?.user}!!</h1>
                <h2 className='font-bold text-2xl text-black'>Disfruta de las promociones y combos mas grosos de la La<span className='text-red-500'>Mila</span>Grosa</h2>
            </div>
            ) 
            : (
            <div className='my-12'>
                <h1 className='font-bold text-3xl text-red-800 py-4'>Inicia Sesion o Registrate para acceder a estas bombas!!!</h1>
                <h2 className='font-bold text-2xl text-black'>Las promociones y combos mas grosos de La<span className='text-red-500'>Mila</span>Grosa</h2>
            </div>
            )}
        <Promos />
    <div className='border-2 border-orange-300 rounded-full min-w-screen my-20 flex justify-center text-start'></div>
        <Combos />
    </div>
    )
}
