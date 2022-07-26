import { createContext, useState } from "react";

export const CarritoContext = createContext();

export const CarritoProvider = ({ children }) => {
  const [carrito, setCarrito] = useState([]);
  const [editarProducto, setEditarProducto] = useState("");

  return (
    <CarritoContext.Provider value={[ carrito, setCarrito, editarProducto, setEditarProducto]}>
      {children}
    </CarritoContext.Provider>
  );
};
