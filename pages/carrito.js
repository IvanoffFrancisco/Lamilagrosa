import { useContext, useState } from "react";
import Layout from "../components/Layout";
import ProductCard from "../components/ProductCard";
import EnvioCards from "../components/EnvioCards";
import ResumenCarrito from "../components/ResumenCarrito";
import GuarnicionCarritoCard from "../components/GuarnicionCarritoCard";
import FormPago from "../components/formaDePago/FormPago";
import { UsuarioContext } from "../contexts/UsuarioContext";
import { CarritoContext } from "../contexts/CarritoContext";
import Link from 'next/link';
import Mensaje from '../components/Mensaje'
import Router from 'next/router';

import { BsTrash } from "react-icons/bs";

const Carrito = () => {
  //States
  const { userGlobal } = useContext(UsuarioContext);
  const { carrito, eliminarTodo, totalCarrito } = useContext(CarritoContext);
  const [sumaCarrito, setSumaCarrito] = useState(
    carrito?.reduce(
      (previousValue, currentValue) =>
        previousValue +
        (parseInt(currentValue.precio) +
          (currentValue.adicional ? currentValue.adicional : 0)) *
          currentValue.cantidad,
      0
    )
  );

  const [direccion, setDireccion] = useState(
    userGlobal?.direcciones?.[0].calle || ""
  );
  const [local, setLocal] = useState();
  const [metodoEnvio, setMetodoEnvio] = useState("");
  const [editarDomicilio, seteditarDomicilio] = useState(false);

  const [pago, setPago] = useState(false);
  const [formaDePago, setFormaDePago] = useState("");
  const [errorPago, setErrorPago] = useState(false);
  

  const [procesando, setProcesando] = useState(false);
  const [pagado, setPagado] = useState(false);
  const [datosUserNoLogeado, setDatosUserNoLogeado] = useState({})
  const [error, setError] = useState("");
  const [errorNombre, setErrorNombre] = useState("error")
  const [errorTelefono, setErrorTelefono] = useState("error")
  const [mensaje, setMensaje] = useState("")
  
  const hendlerDatosUserNoLogeado=(e)=>{
    const {name,value}=e.target;
    setDatosUserNoLogeado({
      ...datosUserNoLogeado,
      [name]:value
    })
    
    if(name==="nombre"){
      setError("")
      setMensaje("")
      if(value.length >= 5 && value.length <=30){
      setError("correcto");
      setMensaje("Nombre valido");
      setErrorNombre('correcto');
      setErrorPago(false);
      }else{
        setError("error");
        setMensaje("Nombre muy corto");
        setErrorNombre("error")
        setErrorPago(true);
      }
    }

    if(name==="telefono"){
      setError("")
      setMensaje("")
      if(value.length >= 6 && value.length <= 10){
      setError("correcto");
      setMensaje("telefono valido");
      setErrorTelefono("correcto");
      setErrorPago(false);
      }else{
        setError("error");
        setMensaje("Telefono muy corto");
        setErrorTelefono("error")
        setErrorPago(true);
      }
    }

  }

  //Funciones
  const handleDomicilio = (e) => {
    if (e.target.value === "") {
      alert("Domicilio no valido");
      return;
    }
    setDireccion(e.target.value);
    if(userGlobal.id !== undefined){
      errorNombre="correcto";
      errorTelefono="correcto";
      errorPago=false;
    }
  };

  const handleLocal = (e) => {
    setLocal(e.target.value);
  };
  //hendler continuar
  const handleContinuar = (e) => {
    if(userGlobal.id !== undefined){
      errorNombre="correcto";
      errorTelefono="correcto";
      errorPago=false;
    }
    if (metodoEnvio === "retira") {
      if (errorPago===false && errorNombre==="correcto" && errorTelefono==="correcto") {
        setProcesando(true);
        setTimeout(() => {
          setProcesando(false);
          setPago(true);
          setPagado(true);
          handleSubmit(e);
          console.log("realice la compra por tarjeta o delivery");
        }, 2000);
      }else{
        alert(" Nombre o Telefono Incorrectos");
      }
    }
    if (metodoEnvio === "enviar") {
      if(errorPago===false && errorNombre==="correcto" && errorTelefono==="correcto"){
        setPago(true);
      }else{
        alert(" Nombre o Telefono Incorrectos");
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const date=new Date();
    const dia= date.getDay() < 10 ? `0${date.getDay()}`: date.getDay();
    const mes= (date.getMonth()+1) < 10 ? `0${date.getMonth()+1}`: date.getMonth();
    const año= date.getFullYear();

    const fecha=`${dia}/${mes}/${año}`;
    
    //genero un objeto
    let newVenta={
      id_usuario:"",
      nombre:"",
      telefono:"",
      fecha:fecha,
      montoTotal:carrito
            ?.reduce(
              (previousValue, currentValue) =>
                previousValue +
                (parseInt(currentValue.precio) +
                  (currentValue.adicional ? currentValue.adicional : 0)) *
                  currentValue.cantidad,
              0
            )
            .toString(),
      formaDePago:"",
      retira: "",
      carrito:carrito
    }


    if(metodoEnvio==="retira"){
      if(userGlobal.id===undefined){
        newVenta={
          nombre:datosUserNoLogeado.nombre,
          telefono:datosUserNoLogeado.telefono,
          fecha:fecha,
          montoTotal:carrito
                ?.reduce(
                  (previousValue, currentValue) =>
                    previousValue +
                    (parseInt(currentValue.precio) +
                      (currentValue.adicional ? currentValue.adicional : 0)) *
                      currentValue.cantidad,
                  0
                )
                .toString(),
          formaDePago:"En el local",
          retira: local,
          carrito:carrito
        }
      console.log("usuario no logeado que retira");
      }else{
        //no estan cambiando estos estados
        errorNombre="correcto";
        errorTelefono="correcto";
        errorPago=false;
        // setErrorNombre("correcto");
        // setErrorTelefono("correcto");
        // setErrorPago(false);
        newVenta.id_usuario=userGlobal.id;
        newVenta.nombre=userGlobal.user;
        newVenta.telefono="";
        newVenta.formaDePago="En el local";
        newVenta.retira=local;
        console.log("usuario logeado que tiene deliveri "+errorNombre+" "+" "+ errorTelefono +" "+ errorPago);
      }
    }else{
      if(userGlobal.id===undefined){
        newVenta={
          nombre:datosUserNoLogeado.nombre,
          telefono:datosUserNoLogeado.telefono,
          fecha:fecha,
          direccion:direccion,
          montoTotal:carrito
                ?.reduce(
                  (previousValue, currentValue) =>
                    previousValue +
                    (parseInt(currentValue.precio) +
                      (currentValue.adicional ? currentValue.adicional : 0)) *
                      currentValue.cantidad,
                  0
                )
                .toString(),
          formaDePago:formaDePago,
          retira: "Delivery",
          carrito:carrito
        }
      
        console.log("usuario no logeado que tiene deliveri");
      }else{
        errorNombre="correcto";
        errorTelefono="correcto";
        errorPago=false;


        newVenta={
          id_usuario:userGlobal.id,
          nombre:userGlobal.user,
          telefono:"",
          fecha:fecha,
          direccion:editarDomicilio ? direccion : userGlobal.direcciones[0],
          montoTotal:carrito
                ?.reduce(
                  (previousValue, currentValue) =>
                    previousValue +
                    (parseInt(currentValue.precio) +
                      (currentValue.adicional ? currentValue.adicional : 0)) *
                      currentValue.cantidad,
                  0
                )
                .toString(),
          formaDePago:formaDePago,
          retira: "Delivery",
          carrito:carrito
        }
        console.log("usuario logeado que tiene deliveri "+errorNombre+" "+" "+ errorTelefono +" "+ errorPago);
      }
      
    }

    
    if(errorNombre==="correcto" && errorTelefono==="correcto"){
      if (metodoEnvio === "retira") {
        if (errorPago===false) {
          setProcesando(true);
          setTimeout(async () => {
            setProcesando(false);
            setPago(true);
            setPagado(true);
            console.log("Retira ", newVenta);

            const config = {
              method: "POST",
              headers: {
                "content-type": "application/json",
              },
              body: JSON.stringify(newVenta),
            };
            const res = await fetch(
              "https://lamilagrosa-app.herokuapp.com/api/ventas",
              config
            );
            const respuesta = await res.json();

            if(respuesta.data==="se guardo la venta"){
              localStorage.removeItem("LMG-Carrito");
              Router.reload()
            }

          }, 2000);
        }else{
          setErrorPago(true);
          alert("Debe Completar nombre y telefono");
        }
      }
      if (metodoEnvio === "enviar") {
        if(errorPago===false){
          console.log("Retira ", newVenta);
          const config = {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(newVenta),
          };
          const res = await fetch(
            "https://lamilagrosa-app.herokuapp.com/api/ventas",
            config
          );
          const respuesta = await res.json();

          if(respuesta.data==="se guardo la venta"){
            localStorage.removeItem("LMG-Carrito");
            Router.reload()
          }

          setPago(true);
        }else{
          setErrorPago(true);
          alert("Debe Completar nombre y telefono");
        }
      }
      
    }else{
      alert('Debe completar nombre y telefono');
      setErrorPago(true)
    }
  };

  return (
    <Layout pagina={"carrito de compras"}>
      <main className="mt-20 pb-10 w-full bg-gray-200 overflow-hidden">
        {carrito?.length === 0 || carrito == null ? (
          <div className="w-full h-screen flex flex-col justify-center items-center">
            <p className="text-lg font-semibold">
              Aún no tienes productos en tu carrito
            </p>{" "}
            <p className="text-lg font-semibold">
              Has click{" "}
              <a className="text-blue-600 font-black" href="/menu">
                aqui
              </a>{" "}
              para para comer algo muy{" "}
              <span className="text-red-600 font-black">groso!</span>
            </p>
          </div>
        ) : (
          <>
            <h2 className="bg-blue-600 text-white text-center uppercase md:text-xl font-semibold py-3 mb-3">
              Carrito de Compras
            </h2>
            <div className="pb-5">
              <div className="flex flex-col justify-center items-center lg:flex-row lg:items-start lg:max-w-[85%] lg:mx-auto lg:gap-x-2">
                <ul className="w-full max-w-[95%] mx-auto flex flex-col gap-2 relative">
                  {carrito?.map((menus) => {
                    if (menus.hasOwnProperty("menu")) {
                      return (
                        <ProductCard
                          producto={menus}
                          key={menus.id}
                          setSumaCarrito={setSumaCarrito}
                        />
                      );
                    } else {
                      return (
                        <GuarnicionCarritoCard
                          producto={menus}
                          key={menus.id}
                          setSumaCarrito={setSumaCarrito}
                        />
                      );
                    }
                  })}
                  <div
                    onClick={() => eliminarTodo()}
                    className="lg:absolute lg:-bottom-12 lg:right-0 lg:text-xs font-bold flex items-center justify-center bg-red-600 text-white py-1 rounded-md  cursor-pointer lg:w-fit lg:px-4 lg:py-2 mb-2"
                  >
                    <p className="">Eliminar</p>
                    <p className=" ml-1">Carrito</p>
                    <BsTrash
                      // size="25"
                      className="text-white hover:scale-105 hover:-rotate-180 ease-in duration-500 ml-3 text-2xl"
                    />
                  </div>
                </ul>

                <div className="w-full flex flex-col max-w-[95%] mx-auto lg:w-1/2">
                  {error.length > 0 ? (
                    <Mensaje mensaje={mensaje} tipoError={error} />
                  ):(
                    null
                  )}
                  {
                    userGlobal.id === undefined  &&  
                    <div>
                      <p>Por favor completa tus datos!</p>
                      <label htmlFor="nombreCompleto">*Nombre Completo: </label>
                      <input onBlur={hendlerDatosUserNoLogeado} type="text" name="nombre"/><br />
                      <label htmlFor="telefono">*Telefono: </label>
                      <input onBlur={hendlerDatosUserNoLogeado} type="text" name="telefono"/><br /><br />
                      <hr />
                      <p>Tiene una cuenta?</p>
                      <Link href={"/login"}>Acceder</Link>
                    </div>
                  }
                 
                  <p
                    className={`text-center text-white font-bold py-3 bg-red-600 mb-2 rounded-sm shadow-sm shadow-red-900 ${
                      metodoEnvio !== "" ? "hidden" : ""
                    }`}
                  >
                    Seleccione el metodo de envio
                  </p>
                  <div
                    className={`${
                      pago && metodoEnvio === "enviar"
                        ? "translate-x-[700px] ease-in duration-300"
                        : ""
                    }`}
                  >
                    <EnvioCards
                      editarDomicilio={editarDomicilio}
                      seteditarDomicilio={seteditarDomicilio}
                      handleDomicilio={handleDomicilio}
                      metodoEnvio={metodoEnvio}
                      setMetodoEnvio={setMetodoEnvio}
                      handleLocal={handleLocal}
                      local={local}
                    />
                  </div>
                  <div
                    className={`${
                      pago && metodoEnvio === "enviar"
                        ? "-translate-y-[304px] top-0 ease-in duration-500"
                        : ""
                    }`}
                  >
                    <ResumenCarrito
                      carrito={carrito}
                      sumaCarrito={sumaCarrito}
                      metodoEnvio={metodoEnvio}
                      totalCarrito={totalCarrito}
                      handleContinuar={handleContinuar}
                      handleSubmit={handleSubmit}
                      pago={pago}
                      formaDePago={formaDePago}
                      procesando={procesando}
                    />
                    {pago ? (
                      <FormPago
                        formaDePago={formaDePago}
                        setFormaDePago={setFormaDePago}
                        metodoEnvio={metodoEnvio}
                        handleSubmit={handleSubmit}
                        procesando={procesando}
                        setProcesando={setProcesando}
                        setPagado={setPagado}
                        pagado={pagado}
                      />
                    ) : null}
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </main>
    </Layout>
  );
};

export default Carrito;
