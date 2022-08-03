import React, { useState } from 'react'

export default function FormPago() {
    const [formaDePago, setFormaDePago] = useState("")

    const hendleFormaDePago=(e)=>{
        const forma=String(e.target.value);
        setFormaDePago(forma);
    }


  return (
    <div>
        <h3>Por Favor, elija un medio de pago</h3>
        <div>
            <input type="radio" id="pago" name="FormaDePago" value="Delivery" onChange={hendleFormaDePago}/>
            <label htmlFor="html">Pago al Delivery</label>
            <input type="radio" id="pago" name="FormaDePago" value="Tarjeta" onChange={hendleFormaDePago}/>
            <label htmlFor="css">Pago con tarjeta</label>
        </div>
        {
            formaDePago==="Tarjeta" ? (
                <form action="">
                    <label htmlFor="nombreTitular">Nombre del Titular</label>
                    <input 
                    type="text" 
                    id="nombreTitular" 
                    name="titular" 
                     />

                    <label htmlFor="DNI">DNI</label>
                    <input 
                    type="text" 
                    id="DNI" 
                    name="dni"  
                    minLength={7} 
                    maxLength={8} />

                    <label htmlFor="numeroDeTarjeta">N° de Tarjeta</label>
                    <input 
                    type="text" 
                    id="NumeroDeTarjetar" 
                    name="numeroDeTarjeta"
                    placeholder='**** **** **** ****'  
                    minLength={16} 
                    maxLength={18} />

                    <label htmlFor="vencimiento">Vencimiento</label>
                    <input type="text"
                     id="vencimiento"
                     placeholder='mm/aaaa'
                     minLength={5}
                     maxLength={7}
                     />

                    <label htmlFor="codigoDeSeguridad">Cod. Seguridad</label>
                    <input type="text"
                     id="codigoDeSeguridad"
                     placeholder='###'
                     maxLength={3}
                     />
                     <button>Pagar Ahora</button>
                </form>
            ):(
                <>
                <h1>Pago Al Delivery</h1>
                </>
            )
        }
    </div>
  )
}
