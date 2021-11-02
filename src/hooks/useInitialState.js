import React from "react";

const initialState = {
  cart:[],
}

const useInitialState = () => {
  
  const localStorageCart= localStorage.getItem('cart');
  let parserCart;

  if(!localStorageCart){
    localStorage.setItem("cart", JSON.stringify(initialState))
    parserCart= [];

  }else {
    parserCart= JSON.parse(localStorageCart);
  }

  const [state, setState] = React.useState(parserCart);
  
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

  /* const addToCart = (payLoad) => {
    const filter = state.cart.some((item) => item.id === payLoad.id );

    if(state.cart.length > 0 && filter ){
      const index = state.cart.findIndex((item) => item.id === payLoad.id );
      setState({
        ...state, 
        cart: state.cart.filter((item) => item.id === payLoad.id),
      })
      console.log("hay items iguales")
    }else {
        setState({
          ...state, 
          cart:[...state.cart, payLoad]
        });
    }
  }; */

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

console.log(parserCart.cart)
  
  return {
    state,
    removeFromCart,
    saveCart,
    parserCart,
  }
};

export  { useInitialState };