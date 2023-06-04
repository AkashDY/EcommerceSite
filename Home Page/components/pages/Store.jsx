import React, { Fragment, useState } from "react";
import Products from "../Products";
import Header from "../UI/Header";
import MainCard from "../UI/MainCard";

const Store = () => {
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (product) => {
    setCartItems((prevItems) => {
      const existingItemIndex = prevItems.findIndex(
        (item) => item.title === product.title
      );
      if (existingItemIndex !== -1) {
        const updatedItems = [...prevItems];
        updatedItems[existingItemIndex] = {
          ...updatedItems[existingItemIndex],
          quantity: updatedItems[existingItemIndex].quantity + 1,
        };
        return updatedItems;
      } else {
        return [...prevItems, { ...product, quantity: 1 }];
      }
    });
  };

  const handleRemoveFromCart = (product) => {
    setCartItems((prevItems) => {
      const existingItemIndex = prevItems.findIndex(
        (item) => item.title === product.title
      );
      if (
        existingItemIndex !== -1 &&
        prevItems[existingItemIndex].quantity > 1
      ) {
        const updatedItems = [...prevItems];
        updatedItems[existingItemIndex] = {
          ...updatedItems[existingItemIndex],
          quantity: updatedItems[existingItemIndex].quantity - 1,
        };
        return updatedItems;
      } else {
        const updatedItems = prevItems.filter(
          (item) => item.title !== product.title
        );
        return updatedItems;
      }
    });
  };

  return (
    <Fragment>
      <Header
        cartItems={cartItems}
        onRemoveFromCart={handleRemoveFromCart}
        showCartButton={true}
      ></Header>
      <MainCard/>
      <Products onAddToCart={handleAddToCart} />
    </Fragment>

  );
}

export default Store;
