import React, { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { products } from "../../productsMock";
import useCounter from "../../utils/hooks/useCounter";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState({});
  const { counter, increment, decrement } = useCounter();

  let id = 2;

  useEffect(() => {
    let encontrado = products.find((prod) => prod.id === id);
    setTimeout(() => {
      setProduct(encontrado);
    }, 2000);
  }, [id]);

  return (
    <div>
      {/* <ItemDetail product={product} /> */}
      <h1>{counter}</h1>
      <button onClick={increment}>Sumar</button>
      <button onClick={decrement}>Restar</button>
    </div>
  );
};

export default ItemDetailContainer;
