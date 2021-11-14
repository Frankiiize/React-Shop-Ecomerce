import React from "react";
import moment from 'moment'
import { useLocalStorage } from "./useLocalStorage";
const user = {}

const initialState = {
  cart:[],
}
const init = (initialState) => {
  
  return initialState;
}
const cartReducer = (state, action)=> {
  switch (action.type){
    case 'ADD_TO_CART':
      const cartAdd = {
        cart:[...state.cart, action.payload]
      }
      const storageCart = JSON.stringify(cartAdd)
      localStorage.setItem('cart', storageCart)
      return {
        ...state,
        cart:[...state.cart, action.payload]
      };
    case 'REMOVE_FROM_CART':
      const cartItemRemove = {
        cart: state.cart.filter(item => item.id !== action.payload.id)
      };
      const removedStorageCart = JSON.stringify(cartItemRemove);
      localStorage.setItem('cart', removedStorageCart )
      return { 
        ...state,
        cart: state.cart.filter(item => item.id !== action.payload.id)
      };
    case 'RESET': 
      return init(action.payload)
    default:
      return state;
  }
}
const useInitialState = () => {

  const { parseItem: parserCart } = useLocalStorage("cart", init(initialState));
  const { parseItem: parserBuy } = useLocalStorage("buy", []);
  const [ cart, dispatch] = React.useReducer(cartReducer, parserCart, init);

  const [buyState, setBuyState] = React.useState(parserBuy)

  const buyedItem = (items) => {
    const item = [
      ...buyState,
      {
        fecha: moment().format("DD.MM.YY"),
        shop: items.cart,
      },
    ];
    setBuyState(item);
    dispatch({type: 'RESET', payload: initialState})
    localStorage.setItem("cart", JSON.stringify(initialState));
    localStorage.setItem("buy",JSON.stringify(item));
  }

  return {
    parserCart,
    buyState,
    setBuyState,
    buyedItem,
    cart,
    dispatch,
    user
  }
};

export  { useInitialState };