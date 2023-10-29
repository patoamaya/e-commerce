import React from "react";
import Button from "@mui/material/Button";
import "./Cart.css";

const Cart = ({ cart, vaciarCarrito, borrarProducto, total }) => {
  ;
  return (
    <div>
      {cart?.map((item) => (
        <div className="item" key={item.id}>
          <h2>
            {item?.marca} {item?.modelo}
          </h2>
          <h3>{item?.quantity}</h3>
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
      <div>
        <h2>El precio total es: {total}</h2>
      </div>
    </div>
  );
};

export default Cart;
