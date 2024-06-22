import React from "react";

const InventoryItem = ({product}) => {
  return (
    <div className="flex justify-between px-7 border mb-2 border-green-400 py-4 rounded-lg">
      <p>{product.name}</p>
      <p>$ {product.price}</p>
    </div>
  );
};

export default InventoryItem;
