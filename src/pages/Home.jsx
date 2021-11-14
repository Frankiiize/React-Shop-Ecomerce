import React from "react";

import { ProductList } from "../containers/ProductList.jsx";
import { useGetProducts } from "../hooks/useGetProducts.js";
import { ProductsContext } from "../context/ProductContex.js";
import { MainContainer } from "../containers/MainContainer.jsx";
import { Login } from "./Login.jsx"




const Home = () => {
  const { filterProducts: products, error, loading,  } = React.useContext(ProductsContext)
   return (
    <>
    
      <MainContainer>
        <ProductList 
          products={products}
          error= {error}
          loading= {loading}
        />
      </MainContainer>
    </>
  );
};

const Clothes = () => {
  const { filterProducts: products, error, loading,  } = React.useContext(ProductsContext)
  const categoriesClothes = products.filter( (product) => product.category.id === 1 );
    return(
      <MainContainer >
        <ProductList 
          products={categoriesClothes}
          error= {error}
          loading= {loading}
        />
      </MainContainer>
    );
}
const Electronics = () => {
  const { filterProducts: products, error, loading,  } = React.useContext(ProductsContext)
  const categoriesElectronics = products.filter( (product) => product.category.id === 2 );

  return(
    <MainContainer >
      <ProductList 
        products={categoriesElectronics}
        error= {error}
        loading= {loading}
      />
    </MainContainer>
  );
}
const Forniture = () => {
  const { filterProducts: products, error, loading,  } = React.useContext(ProductsContext)
  const categoriesForniture = products.filter( (product) => product.category.id === 3 );

  return(
    <MainContainer>
      <ProductList 
        products={categoriesForniture}
        error= {error}
        loading= {loading}
      />
    </MainContainer>
  );
}
const Toys = () => {
  const { filterProducts: products, error, loading,  } = React.useContext(ProductsContext)
  const categoriesToys = products.filter( (product) => product.category.id === 4 );

  return(
    <MainContainer>
      <ProductList 
        products={categoriesToys}
        error= {error}
        loading= {loading}
      />
    </MainContainer>
  );
}
const Others = () => {
  const { filterProducts: products, error, loading,  } = React.useContext(ProductsContext)
  const categoriOters = products.filter( (product) => product.category.id === 5 );

  return(
    <MainContainer>
      <ProductList 
        products={categoriOters}
        error= {error}
        loading= {loading}
      />
    </MainContainer>
  );
}

export { Home, Clothes, Electronics, Forniture, Toys, Others };