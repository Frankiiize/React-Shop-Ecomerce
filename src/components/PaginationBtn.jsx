import React, { useContext } from "react";
import { ProductsContext } from "../context/ProductContex";
import '../styles/PaginationBtn.scss'

const PaginationBtn = () => {
  const {
    allProducts,
    offset,
    itemsPerPage,
    pageCount,
    handleNextPage,
    handlePreviusPage,
    handlePageBtn 
  } = useContext(ProductsContext)
  return (
    <div className="paginationContainer">
    <button className="paginationContainer-btn" disabled={offset === 0 ? true: false} onClick={handlePreviusPage}>Back</button>
      {!!pageCount && new Array(pageCount).fill().map((item, index) => (
        <button className="paginationContainer-btn"  onClick={() => handlePageBtn(index)} key={`page-${index + 1}`}>{index + 1}</button>
      )) 
      }
    <button className="paginationContainer-btn"  disabled={offset === ( allProducts.length - itemsPerPage) ? true : false} onClick ={handleNextPage}>Next</button>
  </div>
  )
}

export { PaginationBtn };