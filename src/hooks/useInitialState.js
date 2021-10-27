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
  };

  const removeFromCart = (payload) =>{
    setState({
      ...state,
      cart: state.cart.filter((item) => item.id !== payload.id),
    })

  }
  console.log(state);
  return {
    state,
    addToCart,
    removeFromCart,
  }
};

export  { useInitialState };