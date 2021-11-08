import React from "react";
import moment from 'moment'
import { useLocalStorage } from "./useLocalStorage";
const user = {
  name: 'francisco',
  lasteName: 'jimenez'
}

const initialState = {
  cart:[],
}

const useInitialState = () => {

  const { parseItem: parserCart } = useLocalStorage("cart", initialState);
  const { parseItem: parserBuy } = useLocalStorage("buy", []);
  
  const [state, setState] = React.useState(parserCart);

  /* const localStorageCart= localStorage.getItem('cart');
  let parserCart;

  

  if(!localStorageCart){
    localStorage.setItem("cart", JSON.stringify(initialState))
    parserCart= [];

  }else {
    parserCart= JSON.parse(localStorageCart);
  } */
  const saveCart = (payLoad) => {
    const filter = parserCart.cart.some((item) => item.id === payLoad.id)
    if(!filter){
      const cartToAdd= {
        ...state,
        cart:[...state.cart, payLoad],
      }
      const stringfiedPayLOad = JSON.stringify(cartToAdd);
      localStorage.setItem('cart', stringfiedPayLOad);

      setState({
        ...state,
        cart: [...state.cart, payLoad],
      })
    } 
      
  }
  const removeFromCart = (payLoad) =>{
    const cartAdd = {
      ...state,
      cart: state.cart.filter((item) => item.id !== payLoad.id),
    }
    const stringfiedPayLOad = JSON.stringify(cartAdd);
    localStorage.setItem('cart', stringfiedPayLOad);
    setState({
      ...state,
      cart: state.cart.filter((item) => item.id !== payLoad.id),
    })
    
  }


 
  const [buyState, setBuyState] = React.useState(parserBuy)

  const buyedItem = (items) => {
    //debugger
    
    const item = [
      ...buyState,
      {
        fecha: moment().format("DD.MM.YY"),
        shop: items.cart,
      },
    ];
    setBuyState(item);
    setState(initialState);
    localStorage.setItem("cart", JSON.stringify(initialState));
    localStorage.setItem("buy",JSON.stringify(item));
    
    console.log(buyState);
  
   
   /*  
    const stringfiedItem = JSON.stringify(buyedHistory);
    
    const cartEmpy = {
      ...state,
      cart: [],
    }
 
    setState({
      ...state,
      cart: []
    })
    localStorage.setItem("buyedHistory", stringfiedItem);
    localStorage.setItem("cart", JSON.stringify(cartEmpy)); */

  }

  return {
    state,
    removeFromCart,
    saveCart,
    parserCart,
    buyState,
    setBuyState,
    buyedItem
  }
};

export  { useInitialState };