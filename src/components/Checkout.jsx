import React, { useContext } from "react";
import CartContext, { useCartContext } from "../CartContext";

const Checkout = () => {
  const { cartItems, setCartItems, totalPrice, handleDeleteItems } =
    useCartContext();

  return (
    <div>
      <h2>Checkout</h2>
      <div className="shopping-bag">
        {cartItems.length > 0 &&
          cartItems.map((item) => (
            <div className="check-list" key={item.id}>
              <div className="item-name">
                <h2>{item.name}:</h2>
                <h2>price(${item.price})</h2>
              </div>
              <button
                className="delete-from-list-btn"
                onClick={() => handleDeleteItems(item)}
              >
                delete
              </button>
            </div>
          ))}
        {cartItems.length > 0 && (
          <div className="sum">Purchase amount: ${totalPrice}</div>
        )}
      </div>
    </div>
  );
};

export default Checkout;
