import React, { useEffect, useState } from "react";
import ItemList from "./ItemList";
import axios from "axios";
import useCounter from "../../utils/hooks/useCounter";
import { useParams } from "react-router-dom";
import { products } from "../../productsMock";
import useFetch from "../../utils/hooks/useFetch";

// import Button from "@mui/material/Button";

const ItemListContainer = () => {
  const { categoryName } = useParams();

  const [items, setItems] = useState([]);

  const { data } = useFetch("http://localhost:5000/products", []);
  useEffect(() => {
    const filteredProducts = data.filter(
      (prod) => prod.categoria === categoryName
    );
    setItems(categoryName ? filteredProducts : data);

    console.log(filteredProducts);
  }, [data, categoryName]);
  return (
    <div>
      <ItemList
        items={items}
        // deleteProduct={deleteProduct}
        // updateProduct={updateProduct}
      />
      {/* <h1>{counter}</h1>
      <button onClick={increment}>Sumar</button>
      <button onClick={decrement}>Restar</button> */}
    </div>
  );
};

export default ItemListContainer;
