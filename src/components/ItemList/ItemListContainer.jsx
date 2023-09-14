import React, { useEffect, useState } from "react";
import ItemList from "./ItemList";
import axios from "axios";
import useCounter from "../../utils/hooks/useCounter";
// import Button from "@mui/material/Button";

const ItemListContainer = () => {
  // Aca hacemos uso del hook useCounter

  const { counter, increment, decrement } = useCounter();

  const [items, setItems] = useState([]);
  const [change, setChange] = useState(false);

  useEffect(() => {
    setChange(false);
    let data = axios.get("http://localhost:5000/products");

    data.then((res) => setItems(res.data));
  }, [change]);

  const deleteProduct = (id) => {
    axios.delete(`http://localhost:5000/products/${id}`);
    setChange(true);
  };

  const updateProduct = (id, data) => {
    axios.patch(`http://localhost:5000/products/${id}`, data);
    setChange(true);
  };

  return (
    <div>
      <ItemList
        items={items}
        deleteProduct={deleteProduct}
        updateProduct={updateProduct}
      />
      <h1>{counter}</h1>
      <button onClick={increment}>Sumar</button>
      <button onClick={decrement}>Restar</button>
    </div>
  );
};

export default ItemListContainer;
