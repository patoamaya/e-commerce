import React, { useState } from "react";
import { createContext } from "react";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const agregarAlCarrito = (product) => {
    let existe = yaAgregado(product.id);
    if (existe) {
      let newCart = cart.map((elemento) => {
        if (elemento.id === product.id) {
          return {
            ...elemento,
            quantity: elemento.quantity + product.quantity,
          };
        } else {
          return elemento;
        }
      });
      setCart(newCart);
    } else {
      setCart([...cart, product]);
    }
  };
  const vaciarCarrito = () => {
    setCart([]);
  };
  const borrarProducto = (id) => {
    const filterBorrado = cart.filter((elemento) => elemento.id !== id);
    setCart(filterBorrado);
  };
  const yaAgregado = (id) => {
    let existe = cart.some((elemento) => elemento.id === id);
    return existe;
  };
  const totalPrice = () => {
    let total = cart.reduce((acc, elemento) => {
      return acc + (elemento.precio * elemento.quantity);
    }, 0);
    return total;
  };
  let data = {
    cart,
    agregarAlCarrito,
    vaciarCarrito,
    borrarProducto,
    totalPrice,
  };
  return <CartContext.Provider value={data}>{children}</CartContext.Provider>;
};

export default CartContextProvider;
