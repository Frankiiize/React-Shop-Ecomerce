import React from "react";
import '../styles/myOrderCart.scss'
import { AppContext } from "../context/AppContext";

import arrow from '../assets/icons/flechita.svg'

import { OrderItem } from "../components/OrderItem.jsx";


const MyOrderCart = () => {
  const {state} = React.useContext(AppContext);
  
  const sumTotal = () => {
    const reducer= (previusValue, currentValue) => previusValue + currentValue.price;
    const sum = state.cart.reduce(reducer,0);
    return sum;
  }

  return (
    <aside className="myOrderCart">

      <div className="myOrderCart__title-container">
        <img src={arrow} alt="arrow" />
        <p className="title">My order</p>
      </div>
      <div className="my-order-content">
      {state.cart.map((product) => (
        <OrderItem 
          product={product}
          key={`OrderItem-${product.id}`}
        />
        ))}     

        <div className="order">
          <p>
            <span>Total</span>
          </p>
          <p>{sumTotal()}</p>
        </div>

        <button className="primary-button">
          Checkout
        </button>
      </div>
  </aside>
  );
}
export { MyOrderCart };