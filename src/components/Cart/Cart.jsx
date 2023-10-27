import React from "react";
import Button from "@mui/material/Button";

const Cart = ({ cart, vaciarCarrito }) => {
  console.log(cart);
  return (
    <div>
      {cart?.map((item) => (
        <h2 key={item.id}>
          {item?.marca} {item?.modelo}
        </h2>
      ))}
      <Button variant="contained" color="primary" onClick={vaciarCarrito}>
        Vaciar carrito
      </Button>
    </div>
  );
};

export default Cart;
