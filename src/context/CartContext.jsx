import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  function addToCart(product) {
    setCart((prev) => [...prev, product]);
  }

  function clearCart() {
    setCart([]);
  }

  const total = cart.reduce((sum, item) => sum + item.discountedPrice, 0);

  return (
    <CartContext.Provider value={{ cart, addToCart, clearCart, total }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
