import React from "react";

const initialState = {
  cart:[],
}

const useInitialState = () => {
  const [state, setState] = React.useState(initialState);

  const addToCart = (payLoad) => {
    setState({
      ...state, 
      cart:[...state.cart, payLoad]
    });
   /*  debugger
    for(let i = 0 ; i <= state.cart.length; i++){
      console.log(state.cart[i]);
      if(state.cart.length > 0 && state.cart[i].id === payLoad.id ){
        console.log('hay iguales')
      } else {
        console.log("no hay iguales")
       
      }
    } */
    
  };

  const removeFromCart = (payload) =>{
    setState({
      ...state,
      cart: state.cart.filter((item) => item.id !== payload.id),
    })

  }

console.log(state.cart)
  
  return {
    state,
    addToCart,
    removeFromCart,
  }
};

export  { useInitialState };