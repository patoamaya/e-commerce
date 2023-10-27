import React, { useContext, useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { products } from "../../productsMock";
import useCounter from "../../utils/hooks/useCounter";
import { useParams } from "react-router-dom";
import { CartContext } from "../../context/CartContext";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState({});
  // const { counter, increment, decrement } = useCounter();
  const { id } = useParams();
  const { agregarAlCarrito } = useContext(CartContext);
  const onAdd = (cantidad) => {
    let data = {
      ...product,
      quantity: cantidad,
    };
    agregarAlCarrito(data);
    // console.log(data);
  };

  useEffect(() => {
    let encontrado = products.find((prod) => prod.id === +id);

    setProduct(encontrado);
  }, [id]);

  return (
    <div>
      {<ItemDetail product={product} onAdd={onAdd} />}
      {/* <h1>{counter}</h1> */}
      {/* <button onClick={increment}>Sumar</button>
      <button onClick={decrement}>Restar</button> */}
    </div>
  );
};

export default ItemDetailContainer;
