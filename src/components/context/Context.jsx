import { fa, faker } from "@faker-js/faker";
import React, { createContext, useContext, useReducer } from "react";
import { cartReducer } from "./cartReducer";

const Cart = createContext();

const Context = ({ children }) => {
  const products = [...Array(20)].map((itm) => {
    return {
      id: faker.string.uuid(),
      name: faker.commerce.productName(),
      price: faker.commerce.price({ symbol: "$" }),
      image: faker.image.url(),
      inStock: faker.helpers.arrayElement([0, 3, 6,  7]),
      fastDeliver: faker.datatype.boolean(),
      ratings: faker.helpers.arrayElement([1, 2, 3, 4, 5]),
    };
  });

  const intailState = {
    products,
    cart: [],
   
  };

  const  productState={}
 const productDispatch=()=>{}

  const [state, dispatch] = useReducer(cartReducer, intailState);

  return <Cart.Provider value={{ state, dispatch,productState,productDispatch }}>{children}</Cart.Provider>;
};

export default Context;

export const cartState =()=>{
 return useContext(Cart);
} 
