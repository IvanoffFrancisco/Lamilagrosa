import  React,{ useState } from "react";
import Router from "next/router";

export const useRegistro = () => {
    //stores the form fields
  const [userRegistro, setUserRegistro] = useState({
    user: "",
    email: "",
    direcciones: "",
    password: "",
    passwordConfirm: "",
  });

  //estado que maneja el tipo de error
  const [tipoError, setTipoError] = useState("");
  const [errorUsuario, setErrorUsuario] = useState("");
  const [errorEmail, setErrorEmail] = useState("")

  //state that saves the error message to print on the screen
  const [mensaje, setMensaje] = useState("");

  const handlerSubmitRegistro=async (e)=>{
    e.preventDefault();

    try {
        if(userRegistro.password === userRegistro.passwordConfirm){
            if(errorUsuario==="correcto"){
              if(errorEmail==="correcto"){
                const config={
                  method:"POST",
                  headers:{
                      "content-type":"application/json"
                  },
                  body:JSON.stringify(userRegistro)
              }
              const res=await fetch("https://lamilagrosa-app.herokuapp.com/api/registro",config);
              const respuesta= await res.json();
              //verifica si data es igual a registro exitoso, se registro bien
              if(respuesta.data==="registro exitoso"){
                setTipoError("correcto");
                setMensaje("Usuario registrado correctamente");
                Router.push("/login");
              }

              }else{
                setTipoError("error");
                setMensaje("El email no esta disponible");
              }
            }else{
              setTipoError("error");
              setMensaje("El usuario no esta disponible");
            }
        }else{
          setTipoError("error");
          setMensaje("Las contraseñas no coinciden ");
        }
    } catch (error) {
        
    }
  }


  //stores the data entered in each field of the form
  const hendlerInputChangeRegistro=async (e)=> {
    setUserRegistro({
      ...userRegistro,
      [e.target.id]: e.target.value,
    });

    //verifica si el usaurio esta disponible
    if(e.target.id==="user"){
      setTipoError("");
      setMensaje("");
      const buscarUser={
        user:e.target.value
      }
      const config={
        method:"POST",
        headers:{
            "content-type":"application/json"
        },
        body:JSON.stringify(buscarUser)
    }
      const res=await fetch("https://lamilagrosa-app.herokuapp.com/api/getUser",config);
      const respuesta= await res.json();
      if(respuesta.user==="disponible"){
          setErrorUsuario("correcto");
          setTipoError("correcto");
          setMensaje("Usuario Disponible");
      }else{
        setErrorUsuario("error");
        setTipoError("error");
        setMensaje("user no disponible");
    }
    }

    if(e.target.id==="email"){
      setTipoError("");
      setMensaje("");
      const buscarEmail={
        email:e.target.value
      }
      const config={
        method:"POST",
        headers:{
            "content-type":"application/json"
        },
        body:JSON.stringify(buscarEmail)
    }
      const res=await fetch("https://lamilagrosa-app.herokuapp.com/api/getEmail",config);
      const respuesta= await res.json();
      if(respuesta.email==="disponible"){
          setErrorEmail("correcto");
          setTipoError("correcto");
          setMensaje("Email Disponible");
      }else{
          setErrorEmail("error");
          setTipoError("error");
          setMensaje("email no disponible");
      }
    }
  }

  return [hendlerInputChangeRegistro,handlerSubmitRegistro,userRegistro,tipoError,mensaje,errorEmail,errorUsuario];
}