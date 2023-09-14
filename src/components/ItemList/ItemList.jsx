import React from "react";
import "./ItemList.css";
import ItemCard from "./ItemCard";

const ItemList = ({ items, deleteProduct, updateProduct }) => {
  return (
    <div className="cardContainer">
      {items.map((item) => {
        return (
          <ItemCard
            item={item}
            key={item.id}
            deleteProduct={deleteProduct}
            updateProduct={updateProduct}
          />
        );
      })}
    </div>
  );
};

export default ItemList;
