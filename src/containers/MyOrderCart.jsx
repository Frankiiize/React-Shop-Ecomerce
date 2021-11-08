import React from "react";
import '../styles/myOrderCart.scss'
import { AppContext } from "../context/AppContext";

import arrow from '../assets/icons/flechita.svg'

import { CheckOutItem } from "../components/CheckOutItem.jsx";


const MyOrderCart = ({toggleShopCart, setToggleShopCart}) => {
  const {state , buyedItem} = React.useContext(AppContext);
  
  const sumTotal = () => {
    const reducer= (previusValue, currentValue) => previusValue + currentValue.price;
    const sum = state.cart.reduce(reducer,0);
    return sum;
  }

  const handleCheckout = (items) => {
   
    if(items.cart.length !== 0){
      buyedItem(items)
    } else {
      return;
    }
  }

  return (
    <aside className="myOrderCart">

      <div className="myOrderCart__title-container">
        <img onClick={() => setToggleShopCart(!toggleShopCart)} src={arrow} alt="arrow" />
        <p className="title">My order</p>
      </div>
      <div className="myOrderCart-content">
      {state.cart.map((product) => (
        <CheckOutItem 
          product={product}
          key={`OrderItem-${product.id}`}
        />
        ))}     
      </div>
      <div className="myOrderCart-order">
        <p>
          <span>Total</span>
        </p>
        <p>{sumTotal()}</p>
      </div>
      <button onClick={() => handleCheckout(state)} className="primary-button myOrderCart-btn">
        Checkout
      </button>
  </aside>
  );
}
export { MyOrderCart };