import React, { useEffect, useState } from "react";
import '../styles/ProducList.scss';
import { ErrorState, LoadingState } from "../components/SkeletonLoading.jsx";
import { ProducItem } from "../components/ProducItem.jsx";
import { ProductDetails } from "../containers/ProductDetails.jsx";
import { useHistory } from "react-router-dom";




<<<<<<< HEAD
const ProductList = ({products, error ,loading, setLimit, setOffset, limit, offset}) => {
  const [ toggleProductsDetails, setToggleProductsDetails ] = React.useState(false);
  console.log({limit,offset})
 
  const handleNextPage = () => {
    setLimit(limit === 50 ? limit : limit += 50);
    setOffset(offset <= 100 ? offset += 50 : 0);
 
  }
  const handlePreviusPage = () => {
    setLimit(limit === 50 ? limit : limit -= 50)
    setOffset(offset -= 50)
  }

  return(
    <>
      <button disabled={offset === 0 ? true: false} onClick={handlePreviusPage}>Back</button>
      <button disabled={offset >= 150 ? true : false} onClick ={handleNextPage}>Next</button>
=======
const ProductList = ({products, error ,loading}) => {
  const [ toggleProductsDetails, setToggleProductsDetails ] = useState(false);
  return(
    <>
>>>>>>> dev
        {toggleProductsDetails && <ProductDetails products={products} />}
        <div className="productList">
        {error && <ErrorState error={error}/>}
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