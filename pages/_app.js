import "../styles/globals.css";
import { MenuProvider } from "../contexts/MenuContext";
import { UsuarioProvider } from "../contexts/UsuarioContext";
import { useEffect, useState } from "react";
// import {CarritoProvider } from "../contexts/CarritoContext";

function MyApp({ Component, pageProps }) {
  const [carrito, setCarrito] = useState([]);
  // const [isLogged, setIsLogged] = useState(false);

  useEffect(() => {
    setCarrito(JSON.parse(localStorage.getItem("LMG-Carrito")));
    if (carrito === null) {
      setCarrito([]);
    }
    // setIsLogged(localStorage.getItem("isLogged"));

    // setUserGlobal(localStorage.getItem("user"));
  }, []);

  return (
    <MenuProvider>
      <UsuarioProvider>
        {/* <CarritoProvider> */}
        <Component
          {...pageProps}
          carrito={carrito}
          setCarrito={setCarrito}
          // isLogged={isLogged}
          // setIsLogged={setIsLogged}
        />
        {/* </CarritoProvider> */}
      </UsuarioProvider>
    </MenuProvider>
  );
}

export default MyApp;
