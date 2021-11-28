import React, { useEffect, useState } from "react";
import '../styles/ProducList.scss';
import { ErrorState, LoadingState } from "../components/SkeletonLoading.jsx";
import { ProducItem } from "../components/ProducItem.jsx";
import { ProductDetails } from "../containers/ProductDetails.jsx";




const ProductList = ({products, error ,loading, setLimit, setOffset, limit, offset}) => {
  const [ toggleProductsDetails, setToggleProductsDetails ] = React.useState(false);
  console.log({limit,offset})
  const handleNextPage = () => {
    setLimit(limit === 50 ? limit : limit += 50)
    setOffset(offset <= 100 ? offset += 50 : 0)
  }

  return(
    <>
      <button disabled={offset >= 150 ? true : false} onClick ={handleNextPage}>Next</button>
      <button>Back</button>
        {toggleProductsDetails && <ProductDetails products={products} />}
        <div className="productList">
        {error && <ErrorState />}
        {loading && new Array(20).fill().map((item, index) => <LoadingState key={`loadingSkeleton-${index}`} />)}
            
          {products.map((product) =>(
              <ProducItem
              product={product}
              key={product.id}
              toggleProductsDetails={toggleProductsDetails}
              setToggleProductsDetails={setToggleProductsDetails}
            />
          
          ))}

        </div>
    
    </>
  );
}

export { ProductList };