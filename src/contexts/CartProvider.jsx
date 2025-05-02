import React, { createContext, useContext, useState } from "react";
const CartContext = createContext();

function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  //
  function handleAddCart(e, product) {
    e.preventDefault();
    e.stopPropagation();
    console.log("Add CArt Clicked");

    setCart((prev) => {
      const existingProduct = prev.find((obj) => obj.id === product.id);
      if (existingProduct) {
      return  prev.map((obj) => {
          return obj.id === product.id
            ? { ...obj, quantity: obj.quantity + 1 }
            : obj;
        });
      } else {
        return [...prev, { ...product, quantity: 1 }];
      }
    });
  }
  //
  function handleAddWishList(e) {
    e.preventDefault();
    e.stopPropagation();
    console.log("add Wishlist Clicked");
  }
  //
  return (
    <CartContext.Provider
      value={{
        cart,
        setCart,
        handleAddCart,
        wishlist,
        setWishlist,
        handleAddWishList,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export default CartProvider;
export function useCart() {
  return useContext(CartContext);
}
