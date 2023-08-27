import React, { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { products } from "../../productsMock";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const task = new Promise((resolve, reject) => {
      resolve(products);
    });

    task
      .then((res) => {
        setItems(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <ItemList items={items} />
    </div>
  );
};

export default ItemListContainer;
