import React, { useState } from "react";
import { createContext } from "react";
import Swal from "sweetalert2";


export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const agregarAlCarrito = (product) => {
    Swal.fire({
      position: "top-end",
      color:"#c8b273",
      background:"rgb(131, 70, 85)",
      title: `Agregaste ${product.quantity} unidad/es de ${product.marca} ${product.modelo}`,
      showConfirmButton: false,
      timer: 1500
    });
    let existe = yaAgregado(product.id);
    if (existe) {
      let newCart = cart.map((elemento) => {
        if (elemento.id === product.id) {
          return {
            ...elemento,
            quantity:product.quantity,
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
    Swal.fire({
      title: "¿Desea vaciar el carrito?",
      icon: "warning",
      color:"#c8b273",
      background:"rgb(131, 70, 85)",
      showCancelButton: true,
      confirmButtonColor: "#c8b273",
      cancelButtonColor: "#d33",
      cancelButtonText:"Cancelar",
      confirmButtonText: "Confirmar"
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          background:"rgb(131, 70, 85)",
          color:"white",
          title: "Su carrito se ha vaciado!"
        });
        setCart([]);
      }
    });
    

  };
  const borrarProducto = (id) => {
    const filterBorrado = cart.filter((elemento) => elemento.id !== id);
    Swal.fire({
      title: "¿Quiere borrar este producto?",
      color:"#c8b273",
      background:"rgb(131, 70, 85)",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#c8b273",
      cancelButtonColor: "#d33",
      cancelButtonText:"Cancelar",
      confirmButtonText: "Confirmar"
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          background:"rgb(131, 70, 85)",
          color:"white",
          title: "Producto eliminado"
        });
        setCart(filterBorrado);
      }
    });
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
  const getQuantityById = (id)=>{
    let product = cart.find(producto => producto.id === id )
    return product?.quantity

  }

  
  let data = {
    cart,
    agregarAlCarrito,
    vaciarCarrito,
    borrarProducto,
    totalPrice,
    getQuantityById
  };
  return <CartContext.Provider value={data}>{children}</CartContext.Provider>;
};

export default CartContextProvider;
