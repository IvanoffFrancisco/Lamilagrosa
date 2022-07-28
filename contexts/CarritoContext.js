import { createContext, useEffect, useState } from "react";

export const CarritoContext = createContext();

export const CarritoProvider = ({ children }) => {
  const [carrito, setCarrito] = useState([]);

  useEffect(() => {
    const carritoLS = JSON.parse(localStorage.getItem("LMG-Carrito"));
    setCarrito(carritoLS);
  }, []);

  useEffect(() => {
    if (carrito.length > 0) {
      localStorage.setItem("LMG-Carrito", JSON.stringify(carrito));
    }
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
    <CarritoContext.Provider
      value={{ carrito, setCarrito, agregarCarrito, eliminarCarrito }}
    >
      {children}
    </CarritoContext.Provider>
  );
};
