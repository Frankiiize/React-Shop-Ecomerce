import React, {useEffect, useReducer, useState} from "react";
import { fetchProducts  } from "../services/fetchs";
const initialState = {
  error: false, 
  loading: true,
  allProducts: [],
  currentProducts: [],
  itemsPerPage: 20,
  offset: 0,
  numberPage: 0,
  pageCount: 0,
}
const reducer = (state, action) => {
  switch (action.type) {
    case 'ALL_PRODUCTS':
      return {
        ...state,
        allProducts: action.payload
      }
    case 'CURRENT_PRODUCTS':
      return {
        ...state,
        currentProducts: action.payload
      }
    case 'SET_OFFSET':
      return {
        ...state,
        offset: action.payload
      }
    case 'SET_NUMBERPAGE':
      return {
        ...state,
        numberPage: action.payload
      }
    case 'SET_PAGE_COUNT':
      return {
        ...state,
        pageCount: action.payload
      }
    case 'LOADING':
      return {
        ...state,
        loading: action.payload,
      }
    case 'ERROR':
      return {
        ...state,
        error: action.payload,
      }
    default:
      return state
  }
}
const useGetProducts = () => {
  const [ state, dispatch ] = useReducer(reducer, initialState);
  const [ search, setSeacrch ] = useState('');
  const [ searchON, setSearchON] = useState(false);
  const API = `https://api.escuelajs.co/api/v1/products?limit=0&offset=0`;

  useEffect( async () => {
    try{
      const res = await fetchProducts(API);
      dispatch({type: 'ALL_PRODUCTS', payload: res})
      dispatch({type: 'CURRENT_PRODUCTS', payload: res.slice((state.numberPage * state.itemsPerPage),(state.offset + state.itemsPerPage))})
      dispatch({type: 'LOADING', payload: false})
      dispatch({type: 'SET_PAGE_COUNT', payload: Math.ceil(res.length / state.itemsPerPage)})
    }catch(error){
      dispatch({type: error, payload: true})
      dispatch({type: 'LOADING', payload: false})
    }
   
  },[state.offset,state.numberPage, state.itemsPerPage]);
  
  const filterProducts = state.allProducts.filter((product) => {
    return product.title.toLowerCase().includes(search.toLowerCase());
  })

  const handleNextPage = () => {
    setSeacrch('')
    dispatch({type:'SET_OFFSET', payload: state.offset + state.itemsPerPage})
    dispatch({type: 'SET_NUMBERPAGE', payload: state.numberPage + 1})
  }
  const handlePreviusPage = () => {
    setSeacrch('')
    dispatch({type:'SET_OFFSET', payload: state.offset - state.itemsPerPage})
    dispatch({type: 'SET_NUMBERPAGE', payload: state.numberPage - 1})
    
  }
  const handlePageBtn = (index) => {
    setSeacrch('')
    dispatch({type:'SET_OFFSET', payload:index * state.itemsPerPage})
    dispatch({type: 'SET_NUMBERPAGE', payload: index})
  }
  const resetPaginated = () => {
    dispatch({type: 'SET_NUMBERPAGE', payload: 0})
    dispatch({type:'SET_OFFSET', payload: 0})
  }
  return {
    error: state.error,
    loading: state.loading,
    products: state.currentProducts,
    allProducts: state.allProducts,
    itemsPerPage: state.itemsPerPage,
    offset: state.offset,
    numberPage: state.numberPage,
    pageCount: state.pageCount,
    filterProducts,
    search,
    setSeacrch,
    handleNextPage,
    handlePreviusPage,
    handlePageBtn,
    searchON,
    setSearchON,
    resetPaginated
  };
}
export { useGetProducts };
