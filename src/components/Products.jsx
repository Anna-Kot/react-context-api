import React, { useState } from "react";
import { useCartContext } from "../CartContext";
import Card from "./Card";

const Products = () => {
  const { goods } = useCartContext();

  return (
    <div className="product-list">
      {goods.map((product) => (
        <Card
          key={product.id}
          id={product.id}
          name={product.name}
          price={product.price}
        />
      ))}
    </div>
  );
};

export default Products;
