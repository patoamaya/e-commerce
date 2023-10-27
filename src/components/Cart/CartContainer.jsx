import React, { useContext } from "react";
import Cart from "./Cart";
import { CartContext } from "../../context/CartContext";

const CartContainer = () => {
  const { cart, vaciarCarrito } = useContext(CartContext);
  return <div>{<Cart cart={cart} vaciarCarrito={vaciarCarrito} />}</div>;
};

export default CartContainer;
