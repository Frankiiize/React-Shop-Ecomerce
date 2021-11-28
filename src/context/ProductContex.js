import React, {createContext, useState} from "react";
import { useGetProducts } from "../hooks/useGetProducts";


const ProductsContext = createContext({});

const ProductProvider = ({children}) => {
 
  const getProducts = useGetProducts()
  return(
    <ProductsContext.Provider value = {getProducts}

    >
      {children}
    </ProductsContext.Provider>
  );
}

export  { ProductProvider, ProductsContext }; 