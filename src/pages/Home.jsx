import React from "react";
import { ProductList } from "../containers/ProductList.jsx";
import { ProductsContext } from "../context/ProductContex.js";
import { MainContainer } from "../containers/MainContainer.jsx";
import { useParams, useRouteMatch } from "react-router-dom";
import { PaginationBtn } from "../components/PaginationBtn.jsx";

const Home = () => {
  const { 
    products, 
    filterProducts, 
    error, 
    loading,
    searchON,
    allProducts,
    offset,
    itemsPerPage,
    pageCount,
    handleNextPage,
    handlePreviusPage,
    handlePageBtn,
  } = React.useContext(ProductsContext);
  return (
    <>
      <MainContainer>
        <PaginationBtn
          allProducts={allProducts}
          offset={offset}
          itemsPerPage={itemsPerPage}
          pageCount={pageCount}
          handleNextPage={handleNextPage}
          handlePreviusPage={handlePreviusPage}
          handlePageBtn={handlePageBtn}
        />
        {searchON ? (
          <ProductList
            products={filterProducts}
            error={error}
            loading={loading}
          />
        ) : (
          <ProductList products={products} error={error} loading={loading} />
        )}
      </MainContainer>
    </>
  );
};

const Categories = () => {
  let { id } = useParams();
  const { 
    filterProducts,
    error, 
    loading, 
    allProducts,
    offset,
    itemsPerPage,
    numberPage,
    handleNextPage,
    handlePreviusPage,
    handlePageBtn,
    searchON
  } = React.useContext(ProductsContext)
  
  const categories =  allProducts.filter(p => p.category.id === parseInt(id) )
  const pages = Math.ceil(categories.length / itemsPerPage)
  const categoriProduct = categories.slice((numberPage * itemsPerPage),(offset + itemsPerPage))
  return (
    <>
      <MainContainer>
        <PaginationBtn
          allProducts={categories}
          offset={offset}
          itemsPerPage={itemsPerPage}
          pageCount={pages}
          handleNextPage={handleNextPage}
          handlePreviusPage={handlePreviusPage}
          handlePageBtn={handlePageBtn}
        />
        {searchON ? (
          <ProductList
            products={filterProducts}
            error={error}
            loading={loading}
          />
        ) : (
          <ProductList
            products={categoriProduct}
            error={error}
            loading={loading}
          />
        )}
      </MainContainer>
    </>
  );
}



export { Home, Categories };