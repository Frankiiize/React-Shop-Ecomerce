import React from "react";
import arrow from '../assets/icons/flechita.svg'

const OrderItem = ({product, price , articles, fecha}) => {

  return(
    <div className="order">
      <p>
        <span>{fecha}</span>
        <span>{articles} articles</span>
      </p>
      <p>{price}</p>
      <img src={arrow}alt="arrow"/>
  </div>
  );
}

export { OrderItem };