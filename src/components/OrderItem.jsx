import React from "react";

import arrow from '../assets/icons/flechita.svg'
import { CheckOutItem } from "./CheckOutItem.jsx";


const OrderItem = ({ price, articles, fecha, shop }) => {

  const [handleHistory, setHandleHistory] = React.useState(false);
  const show = () => {
    setHandleHistory(!handleHistory);
  }
  return(
    <>
      <div className="order">
        <p>
          <span>{fecha}</span>
          <span>{articles} articles</span>
        </p>
        <p>{price}</p>
        <img src={arrow}alt="arrow" onClick={show}/>
      </div>
      <div className = "shoping-cartHistory">
        {handleHistory && shop.map((item) =>(
          <CheckOutItem 
            product={item}
            disabled={true}
            key={`orderHistory-${item.id}`}
          /> 
        ))}
      </div>
    </>
  );
}

export { OrderItem };