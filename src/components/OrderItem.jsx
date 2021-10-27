import React from 'react';
import { AppContext } from '../context/AppContext';
import closeIcon from '../assets/icons/icon_close.png'


const OrderItem = ({product}) => {
  const {removeFromCart} = React.useContext(AppContext);
  const handleRemove = (item) => {
    removeFromCart(item)
  }
	return (
    <>
		 <div className="shopping-cart">
        <figure>
          <img src={product.images[0]} alt={product.title}/>
        </figure>
        <p>{product.title}</p>
        <p>${product.price}</p>
        <img onClick={() => handleRemove(product)} src={closeIcon} alt="close"/>
      </div>
    </>
	);
}

export { OrderItem };

