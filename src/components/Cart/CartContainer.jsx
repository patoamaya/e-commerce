import React, { useContext } from "react";
import Cart from "./Cart";
import { CartContext } from "../../context/CartContext";

const CartContainer = () => {
  const { cart, vaciarCarrito, borrarProducto } = useContext(CartContext);

  return (
    <div>
      {
        <Cart
          cart={cart}
          vaciarCarrito={vaciarCarrito}
          borrarProducto={borrarProducto}
        />
      }
    </div>
  );
};

export default CartContainer;
