import React from 'react';
import { FormattedNumber } from 'react-intl'
import { AppContext } from '../context/AppContext';
import closeIcon from '../assets/icons/icon_close.png'


const CheckOutItem = ({product , disabled}) => {

  const { dispatch } = React.useContext(AppContext);
  const handleRemove = (item) => {
    item.added = false
    dispatch({type:'REMOVE_FROM_CART',  payload: item})
  }
 
	return (
    <>
		 <div className="shopping-cart">
        <figure>
          <img loading="lazy" src={product.images[0]} alt={product.title}/>
        </figure>
        <p>{product.title}</p>
        <p><FormattedNumber value={product.price} style="currency" currency="USD"/></p>
        {!disabled  && <img onClick={() => handleRemove(product)} src={closeIcon} alt="close"/> }
        
      </div>
    </>
	);
}

export { CheckOutItem };

