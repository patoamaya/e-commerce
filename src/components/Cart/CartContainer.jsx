import React, { useContext } from "react";
import Cart from "./Cart";
import { CartContext } from "../../context/CartContext";
import EmptyCart from "./EmptyCart";

const CartContainer = () => {
  const { cart, vaciarCarrito, borrarProducto, totalPrice } =
    useContext(CartContext);

  let total = totalPrice();

  if(cart.length === 0){
    return <EmptyCart/>
  }

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
