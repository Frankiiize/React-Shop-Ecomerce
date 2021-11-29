import React, {useEffect, useState} from "react";

const useGetProducts = () => {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const [allProducts, setAllProducts] = useState([]);
  const [ itemsPerPage , setItemsPerPage ] = useState(20);
  const [ offset, setOffset ] = useState(0);
  const [ search, setSeacrch ] = useState('');
  const [ pageCount, setPageCount] = useState(0);
  const API = `https://api.escuelajs.co/api/v1/products?limit=${itemsPerPage}&offset=${offset}`;
  const API2 = `https://api.escuelajs.co/api/v1/products?limit=0&offset=0`;
 
  useEffect(() => {
    async function fetchProducts () {
      try {
        const data = await fetch(API);
        const data2 = await fetch(API2);
        const res = await data.json();
        const res2 = await data2.json();
        res.map((item) => (item.added = false))
        setProducts(res);
        setAllProducts(res2);
        setPageCount(Math.ceil(res2.length / itemsPerPage))
        setLoading(false);
      }catch (error){
        setError(error);
      }
    }
    fetchProducts();
  },[API, API2]);
  
  const filterProducts = allProducts.filter((product) => {
    return product.title.toLowerCase().includes(search.toLowerCase())
  })

  const handleNextPage = () => {
    setOffset(offset + itemsPerPage);
  }
  const handlePreviusPage = () => {
    setOffset(offset - itemsPerPage)
  }
  const handlePageBtn = (index) => {
    setOffset(index * itemsPerPage)
  }
  
  return {
    products,
    allProducts,
    filterProducts,
    error,
    loading,
    search,
    setSeacrch,
    offset,
    itemsPerPage,
    pageCount,
    handleNextPage,
    handlePreviusPage,
    handlePageBtn
    
  };
}
export { useGetProducts };
