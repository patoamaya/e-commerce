import React, { useContext } from "react";
import Cart from "./Cart";
import { CartContext } from "../../context/CartContext";

const CartContainer = () => {
  const { cart, vaciarCarrito, borrarProducto, totalPrice } =
    useContext(CartContext);

  let total = totalPrice();

  return (
    <div>
      {
        <Cart
          cart={cart}
          vaciarCarrito={vaciarCarrito}
          borrarProducto={borrarProducto}
          total={total}
        />
      }
    </div>
  );
};

export default CartContainer;
