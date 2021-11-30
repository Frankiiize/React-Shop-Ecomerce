import React, {useEffect, useState} from "react";

const useGetProducts = () => {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const [allProducts, setAllProducts] = useState([]);
  const [ itemsPerPage , setItemsPerPage ] = useState(20);
  const [ offset, setOffset ] = useState(0);
  const [ search, setSeacrch ] = useState('');
  const [ searchON, setSearchON] = useState(false);
  const [ pageCount, setPageCount] = useState(0);
  const [numberPage, setNumberPage] = useState(0);
  const API = `https://api.escuelajs.co/api/v1/products?limit=0&offset=0`;
 
  useEffect(() => {
    async function fetchProducts () {
      try {
        const data = await fetch(API);
        const res = await data.json();
        res.map((item) => {
          item.added = false;
        })
        setProducts(res.slice((numberPage * itemsPerPage),(offset + itemsPerPage)));
        setAllProducts(res);
        setPageCount(Math.ceil(res.length / itemsPerPage));
        setLoading(false);
      }catch (error){
        setError(error);
        setLoading(false);
      }
    }
    fetchProducts();
  },[offset,numberPage, itemsPerPage]);
  
  const filterProducts = allProducts.filter((product) => {
    return product.title.toLowerCase().includes(search.toLowerCase());
  })

  const handleNextPage = () => {
    setSeacrch('')
    setOffset(offset + itemsPerPage);
    setNumberPage(numberPage + 1)
    setProducts(allProducts.slice((numberPage * itemsPerPage),(offset + itemsPerPage)))
  }
  const handlePreviusPage = () => {
    setSeacrch('')
    setOffset(offset - itemsPerPage);
    setNumberPage(numberPage - 1)
    setProducts(allProducts.slice((numberPage * itemsPerPage),(offset + itemsPerPage)))

  }
  const handlePageBtn = (index) => {
    setSeacrch('')
    setOffset(index * itemsPerPage);
    setNumberPage(index);
  }
  const resetPaginated = () => {
    setNumberPage(0)
    setOffset(0)
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
    handlePageBtn,
    numberPage,
    setNumberPage,
    searchON,
    setSearchON,
    setPageCount,
    resetPaginated
  };
}
export { useGetProducts };
