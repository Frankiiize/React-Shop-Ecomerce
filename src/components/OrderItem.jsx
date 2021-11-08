import React from "react";
import { FormattedNumber } from 'react-intl'
import arrow from '../assets/icons/flechita.svg'
import { CheckOutItem } from "./CheckOutItem.jsx";


const OrderItem = ({ price, articles, fecha, shop }) => {
  const [shopDetails, setShopDetails] = React.useState(false);

  const show = (item) =>{
    
    setShopDetails(!shopDetails)
  }


  return(
    <>
      <div className={shopDetails ? 'orderOpen' : 'order'}>
        <p>
          <span>{fecha}</span>
          <span>{articles} articles</span>
        </p>
        <p>
          <FormattedNumber value={price} style="currency" currency="USD"/>
        </p>
        <img src={arrow}alt="arrow" onClick={() => show(shop)}/>
      </div>
      <div className = "shoping-cartHistory">
  
        {shopDetails && shop.map((item) =>(
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