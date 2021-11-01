import React, {useEffect, useState} from "react";
import axios  from "axios";


const useGetProducts = (API) => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
 
  useEffect( async () => {
    
    try {
      const data = await fetch(API);
      const res = await data.json();
      res.map((item) => (item.cantidad))
   
      setProducts(res);
      setLoading(false);
     
    }catch (error){
      setError(error);
    }
  },[]);
  return { products ,error, loading};


}

export { useGetProducts };
