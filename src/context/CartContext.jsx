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
  let data = {
    cart,
    agregarAlCarrito,
    vaciarCarrito,
  };
  return <CartContext.Provider value={data}>{children}</CartContext.Provider>;
};

export default CartContextProvider;
