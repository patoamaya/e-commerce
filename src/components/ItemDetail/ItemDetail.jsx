import React from "react";

const ItemDetail = ({ product }) => {
  return (
    <div>
      <h3>
        {product.marca} {product.modelo}
      </h3>
    </div>
  );
};

export default ItemDetail;
