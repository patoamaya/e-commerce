import React, { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { products } from "../../productsMock";
import useCounter from "../../utils/hooks/useCounter";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState({});
  // const { counter, increment, decrement } = useCounter();
  const { id } = useParams();
  const onAdd = (cantidad) => {
    console.log(`Se agregaron ${cantidad} ${product.marca} ${product.modelo}`);
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
