import React, { useContext } from "react";
import { IoShirtOutline } from "react-icons/io5";
import { AiFillShopping } from "react-icons/ai";
import CartContext from "../CartContext";

const Card = ({ id, name, price }) => {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="card" onClick={() => addToCart(id, name, price)}>
      <div className="product-box">
        <IoShirtOutline size={"40px"} />
      </div>
      <div className="purchase">
        <h3>{name}</h3>
        <AiFillShopping />
      </div>
      <h4>${price}</h4>
    </div>
  );
};

export default Card;
