import React, {useEffect, useState} from "react";
import axios  from "axios";


const useGetProducts = (API) => {
  const [products, setProducts] = useState([]);
  
  useEffect(  () => {
    fetch(API)
    .then((data) => data.json())
    .then((response) => {
      setProducts(response)
    })
  },[]);
  return products;


}

export { useGetProducts }
