import React from "react";

import { ProductList } from "../containers/ProductList.jsx";
import { useGetProducts } from "../hooks/useGetProducts.js";
import { ProductsContext } from "../context/ProductContex.js";
import { MainContainer } from "../containers/MainContainer.jsx";
import { Login } from "./Login.jsx"
import { useParams, useRouteMatch } from "react-router-dom";
import { PaginationBtn } from "../components/PaginationBtn.jsx";




const Home = () => {
  const { products, filterProducts, error, search, loading } =
    React.useContext(ProductsContext);
  console.log(search.length);

  return (
    <>
      <MainContainer>
        <PaginationBtn />
        {search.length > 0 
        ? (
          <ProductList
            products={filterProducts}
            error={error}
            loading={loading}
          />
        ) 
        : (
          <ProductList 
            products={products} 
            error={error} 
            loading={loading} />
        )}
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