import React, {useEffect, useState} from "react";

const useGetProducts = () => {
  const [ limit , setLimit ] = useState(50);
  const [ offset, setOffset ] = useState(0);
  const API = `https://api.escuelajs.co/api/v1/products?limit=${limit}&offset=${offset}`
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const [ search, setSeacrch ] = React.useState('');
  useEffect(() => {
    async function fetchProducts () {
      try {
        const data = await fetch(API);
        const res = await data.json();
        res.map((item) => (item.added = false))
        setProducts(res);
        setLoading(false);
      }catch (error){
        setError(error);
      }
    }
    fetchProducts();
  },[API]);

  const filterProducts = products.filter((product) => {
    return product.title.toLowerCase().includes(search.toLowerCase())
  })
  
  return {
    products,
    filterProducts,
    error,
    loading,
    search,
    setSeacrch,
    setLimit,
    setOffset,
    limit,
    offset
  };
}
export { useGetProducts };
