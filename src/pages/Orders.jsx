import React from 'react';

import '../styles/order.scss';
import { AppContext  } from '../context/AppContext.js';
import { OrderItem } from '../components/OrderItem.jsx';




const Orders = () => {
  
  const { buyState } = React.useContext(AppContext);
 
  const sumaTotal = (arr) => {
    const reducer = (previousValue, currentValue) => previousValue + currentValue.price;
    const sum = arr.reduce(reducer, 0)
    return sum;
  }

  const show = true
	return (
    <>
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
              shop={item.shop}
              price={sumaTotal(item.shop)}
            />
          ))}
        
        </div>
      </div>
 
       
    </div>
    </>
	);
}

export {Orders};