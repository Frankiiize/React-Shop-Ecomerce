import React, { useEffect, useState } from "react";
import '../styles/ProducList.scss';
import { ErrorState, LoadingState } from "../components/SkeletonLoading.jsx";
import { ProducItem } from "../components/ProducItem.jsx";
import { ProductDetails } from "../containers/ProductDetails.jsx";




const ProductList = ({products, error ,loading}) => {
  const [ toggleProductsDetails, setToggleProductsDetails ] = React.useState(false);
  
  
  
  return(
    <>
      
      <section className="main-container">
        {toggleProductsDetails && <ProductDetails products={products} />}
        <div className="productList">
        {error && <ErrorState />}
        {loading && new Array(20).fill().map((item, index) => <LoadingState key={index} />)}

          {products.map((product) =>(
              <ProducItem
              product={product}
              key={product.id}
              toggleProductsDetails={toggleProductsDetails}
              setToggleProductsDetails={setToggleProductsDetails}
            />
          
          ))}
        </div>
      </section>
    </>
  );
}

export { ProductList };