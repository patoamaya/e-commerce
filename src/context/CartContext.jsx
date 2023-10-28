import React, { useState } from "react";
import { createContext } from "react";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const agregarAlCarrito = (product) => {
    setCart([...cart, product]);
  };
  const vaciarCarrito = () => {
    setCart([]);
  };
  const borrarProducto = (id) => {
    const filterBorrado = cart.filter((elemento) => elemento.id !== id);
    setCart(filterBorrado);
  };
  let data = {
    cart,
    agregarAlCarrito,
    vaciarCarrito,
    borrarProducto,
  };
  return <CartContext.Provider value={data}>{children}</CartContext.Provider>;
};

export default CartContextProvider;
