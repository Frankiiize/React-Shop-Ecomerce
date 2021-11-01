import React from "react";

const initialState = {
  cart:[],
}

const useInitialState = () => {
  const [state, setState] = React.useState(initialState);
  
  const addToCart = (payLoad , count) => {
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
  };

  const removeFromCart = (payLoad) =>{
    setState({
      ...state,
      cart: state.cart.filter((item) => item.id !== payLoad.id),
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