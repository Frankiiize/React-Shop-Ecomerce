import React from "react";

import { ProductList } from "../containers/ProductList.jsx";
import { useGetProducts } from "../hooks/useGetProducts.js";
import { ProductsContext } from "../context/ProductContex.js";
import { MainContainer } from "../containers/MainContainer.jsx";
import { Login } from "./Login.jsx"
import { useParams, useRouteMatch } from "react-router-dom";




const Home = () => {
  const { 
    filterProducts: products, 
    error, 
    loading, 
    setLimit, 
    setOffset, 
    limit, 
    offset  
  } = React.useContext(ProductsContext)
   return (
    <>
      <MainContainer>
        <ProductList 
          products={products}
          error= {error}
          loading= {loading}
          setLimit={setLimit}
          setOffset={setOffset}
          limit={limit}
          offset={offset}
        />
      </MainContainer>
    </>
  );
};

const Categories = () => {
  let { id } = useParams();
  const { filterProducts: products, error, loading,  } = React.useContext(ProductsContext)
  const categories =  products.filter(p => p.category.id === parseInt(id) )
 
  return (
    <>
      <MainContainer>
        <ProductList
          products={categories}
          error={error}
          loading={loading}
        />
      </MainContainer>

    </>
  );
}



export { Home, Categories };