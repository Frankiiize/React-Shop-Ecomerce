import React from "react";

import { ProductList } from "../containers/ProductList.jsx";
import { useGetProducts } from "../hooks/useGetProducts.js";
import { ProductsContext } from "../context/ProductContex.js";




const Home = () => {
  const { filterProducts: products, error, loading,  } = React.useContext(ProductsContext)
   return (
    <>
      
      <ProductList
        products={products}
        error= {error}
        loading= {loading}
       />
    </>
  );
};

const Clothes = () => {
  const { filterProducts: products, error, loading,  } = React.useContext(ProductsContext)
  const categoriesClothes = products.filter( (product) => product.category.id === 1 );
  return(
    <ProductList 
      products={categoriesClothes}
      error= {error}
      loading= {loading}
    />
  );
}
const Electronics = () => {
  const { filterProducts: products, error, loading,  } = React.useContext(ProductsContext)
  const categoriesElectronics = products.filter( (product) => product.category.id === 2 );

  return(
    <ProductList 
      products={categoriesElectronics}
      error= {error}
      loading= {loading}
    />
  );
}
const Forniture = () => {
  const { filterProducts: products, error, loading,  } = React.useContext(ProductsContext)
  const categoriesForniture = products.filter( (product) => product.category.id === 3 );

  return(
    <ProductList 
      products={categoriesForniture}
      error= {error}
      loading= {loading}
    />
  );
}
const Toys = () => {
  const { filterProducts: products, error, loading,  } = React.useContext(ProductsContext)
  const categoriesToys = products.filter( (product) => product.category.id === 4 );

  return(
    <ProductList 
      products={categoriesToys}
      error= {error}
      loading= {loading}
    />
  );
}
const Others = () => {
  const { filterProducts: products, error, loading,  } = React.useContext(ProductsContext)
  const categoriOters = products.filter( (product) => product.category.id === 5 );

  return(
    <ProductList 
      products={categoriOters}
      error= {error}
      loading= {loading}
    />
  );
}

export { Home, Clothes, Electronics, Forniture, Toys, Others };