import React, { useContext } from "react";
import { AiFillShopping } from "react-icons/ai";
import { Link } from "react-router-dom";
import CartContext from "../CartContext";

const Nav = () => {
  const { cartItems } = useContext(CartContext);

  return (
    <nav>
      <Link to={"/"}>
        <h1>Wear</h1>
      </Link>
      <Link to={"/checkout"}>
        <div className="cart">
          <AiFillShopping size={"26px"} />
          <span>{cartItems.length}</span>
        </div>
      </Link>
    </nav>
  );
};

export default Nav;
