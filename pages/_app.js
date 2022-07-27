import "../styles/globals.css";
import { MenuProvider } from "../contexts/MenuContext";
import { UsuarioProvider } from "../contexts/UsuarioContext";
import { useEffect, useState } from "react";
// import {CarritoProvider } from "../contexts/CarritoContext";

function MyApp({ Component, pageProps }) {
  const [carrito, setCarrito] = useState([]);
  // const [isLogged, setIsLogged] = useState(false);

  useEffect(() => {
    const carritoLS = JSON.parse(localStorage.getItem("LMG-Carrito")) ?? [];
    console.log(carritoLS);
    setCarrito(carritoLS);

    // setIsLogged(localStorage.getItem("isLogged"));

    // setUserGlobal(localStorage.getItem("user"));
  }, []);

  useEffect(() => {
    localStorage.setItem("LMG-Carrito", JSON.stringify(carrito));
  }, [carrito]);

  const agregarCarrito = (pedido) => {
    setCarrito([...carrito, pedido]);
  };

  const eliminarCarrito = (id) => {
    const respuesta = confirm("Deseas eliminar este producto?");
    if (respuesta) {
      const carritoActualizado = carrito?.filter(
        (elemento) => elemento.id !== id
      );
      setCarrito(carritoActualizado);
    }
  };

  return (
    <MenuProvider>
      <UsuarioProvider>
        <Component
          {...pageProps}
          carrito={carrito}
          setCarrito={setCarrito}
          agregarCarrito={agregarCarrito}
          eliminarCarrito={eliminarCarrito}
        />
      </UsuarioProvider>
    </MenuProvider>
  );
}

export default MyApp;
