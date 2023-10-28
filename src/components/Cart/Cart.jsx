import React from "react";
import Button from "@mui/material/Button";
import "./Cart.css";

const Cart = ({ cart, vaciarCarrito, borrarProducto }) => {
  console.log(cart);
  return (
    <div>
      {cart?.map((item) => (
        <div className="item" key={item.id}>
          <h2 key={item.id}>
            {item?.marca} {item?.modelo}
          </h2>
          <Button
            variant="outlined"
            color="secondary"
            onClick={() => borrarProducto(item.id)}
          >
            Eliminar producto
          </Button>
        </div>
      ))}
      <Button variant="contained" color="primary" onClick={vaciarCarrito}>
        Vaciar carrito
      </Button>
    </div>
  );
};

export default Cart;
