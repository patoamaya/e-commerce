import React from "react";
import "./ItemList.css";
import ItemCard from "./ItemCard";

const ItemList = ({ items }) => {
  console.log(items);
  return (
    <div className="cardContainer">
      {items.map((item) => {
        return <ItemCard item={item} key={item.id} />;
      })}
    </div>
  );
};

export default ItemList;
