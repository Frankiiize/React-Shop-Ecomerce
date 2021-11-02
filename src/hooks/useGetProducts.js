import React, {useEffect, useState, useContext} from "react";
import axios  from "axios";
import { AppContext } from "../context/AppContext";


const useGetProducts = (API) => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const { parserCart } = useContext(AppContext)

  
  useEffect( async () => {
    
    try {
      const data = await fetch(API);
      const res = await data.json();
      res.map((item) => (item.added = null))
      setProducts(res);
      setLoading(false);
     
    }catch (error){
      setError(error);
    }
  },[]);

  return { products ,error, loading};


}

export { useGetProducts };
