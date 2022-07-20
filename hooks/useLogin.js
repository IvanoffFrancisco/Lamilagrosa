import React, { useState,useContext} from 'react'
import {UsuarioContext} from '../contexts/UsuarioContext'
import Router from 'next/router'
export const useLogin = () => {
    const {setUserGlobla,setIsloged} = useContext(UsuarioContext);

    const [user, setUser] = useState({
        email:"",
        password:""
    });
    
    //state that checks if there is an error in the form data
    const [error, setError] = useState(false);

    
    const handleChangeInputs = (e) => {
        setUser({
          ...user,
          [e.target.name]: e.target.value,
        });
    };
    
    const handleSubmitFormLogin = async (e) => {
        // datos correctos para logeo
        //email:nicoo.ivanoff@gmail.com
        //pass:1234
        e.preventDefault();
        try {
            const config={
                method:"POST",
                headers:{
                    "content-type":"application/json"
                },
                body:JSON.stringify(user)
            }
            const res=await fetch("https://lamilagrosa-app.herokuapp.com/api/login",config);
            const respuesta= await res.json();
            if(respuesta.advertencia==="email y/o password incorrectos"){
                setError(true);
            } else {
                setUserGlobla(respuesta);
                setIsloged(true);
                setError(false);
                Router.push("/");
            
            }
        } catch (error) {
            console.log(error);
        }
        
      };

    return [handleChangeInputs,handleSubmitFormLogin,error,user];
}
