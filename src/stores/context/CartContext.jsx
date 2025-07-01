import React, { createContext, useContext, useState } from 'react';
import Navbar from '../components/Navbar';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    const fixedItem = {
      ...item,
      image: item.image.startsWith('/') ? item.image : `/${item.image}`
    };
    setCartItems([...cartItems, fixedItem]);
  };

  const removeFromCart = (itemToRemove) => {
    setCartItems(cartItems.filter(item => item !== itemToRemove));
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  return useContext(CartContext);
};
