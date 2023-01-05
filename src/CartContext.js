import { createContext, useContext, useMemo, useState } from "react";
import { products } from "./consts";

const CartContext = createContext();

export const useCartContext = () => {
  return useContext(CartContext);
};

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);
  const [goods, setGoods] = useState(products);

  const addToCart = (id, name, price) => {
    setCartItems((prevState) => [...prevState, { id, name, price }]);
    console.log(cartItems);
  };

  const totalPrice = useMemo(
    () => cartItems.reduce((acc, item) => acc + item.price, 0),
    [cartItems]
  );

  const handleDeleteItems = (elem) => {
    const newItems = cartItems.filter((good) => good.id !== elem.id);
    console.log(cartItems);
    console.log(newItems);
    setCartItems(newItems);
  };

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, totalPrice, handleDeleteItems, goods }}
    >
      {children}
    </CartContext.Provider>
  );
}

export default CartContext;
