import React from 'react';

import '../styles/order.scss';
import { AppContext  } from '../context/AppContext.js';
import { OrderItem } from '../components/OrderItem.jsx';



const Orders = () => {
  
  const { buyState } = React.useContext(AppContext)
  console.log(buyState)
  
  
	return (
    <div className="Orders">
    <div className="Orders-container ">
      <h1 className="title">My orders</h1>
      <div className="Orders-content">
        {buyState.map( (item) => (
          <OrderItem 
            product={buyState}
            key={`orderHistory-${item.shop.map(e => e.id)}`}
            price={item.price}
            articles={item.shop.length}
            fecha={item.fecha}
              
          />
        ))}
      </div>
    </div>
  </div>
	);
}

export {Orders};