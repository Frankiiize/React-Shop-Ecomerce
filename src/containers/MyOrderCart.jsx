import React from "react";
import '../styles/myOrderCart.scss'
import { AppContext } from "../context/AppContext";

import arrow from '../assets/icons/flechita.svg'

import { OrderItem } from "../components/OrderItem.jsx";


const MyOrderCart = ({toggleShopCart, setToggleShopCart}) => {
  const {state} = React.useContext(AppContext);
  
  const sumTotal = () => {
    const reducer= (previusValue, currentValue) => previusValue + currentValue.price;
    const sum = state.cart.reduce(reducer,0);
    return sum;
  }

  return (
    <aside className="myOrderCart">

      <div className="myOrderCart__title-container">
        <img onClick={() => setToggleShopCart(!toggleShopCart)} src={arrow} alt="arrow" />
        <p className="title">My order</p>
      </div>
      <div className="myOrderCart-content">
      {state.cart.map((product) => (
        <OrderItem 
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
      <button className="primary-button myOrderCart-btn">
        Checkout
      </button>
  </aside>
  );
}
export { MyOrderCart };