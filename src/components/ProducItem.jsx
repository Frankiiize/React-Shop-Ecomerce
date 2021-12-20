import React from "react";
import { FormattedNumber } from 'react-intl'
import iconAddToCart from '../assets/icons/bt_add_to_cart.svg';
import iconAdded from '../assets/icons/bt_added_to_cart.svg';
import  { AppContext }  from "../context/AppContext";
import { ProductDetails } from "../containers/ProductDetails.jsx";
import { ProductInfo } from "./ProductInfo.jsx";


const ProducItem = ({ product }) => {
  

  const { dispatch, cart } = React.useContext(AppContext);
  const [ toggleProductsDetails, setToggleProductsDetails ] = React.useState(false);


  const itemsAddedToCart = cart.cart.filter(item => item.added)

  const idItemsAdded = itemsAddedToCart.map((item) => item.id)

  
  const handleCart = (item) => {
    
    if(!item.added ){
      (idItemsAdded.includes(item.id))
      ? ( item.added = false, dispatch({type: 'REMOVE_FROM_CART', payload: item}))
      : ( item.added = true, dispatch({type:'ADD_TO_CART', payload: item }))
    } 
    else {
      item.added = false;
      dispatch({type: 'REMOVE_FROM_CART', payload: item});
    }
  }
 const foto = product.images[0].replace(/(640)|(480)/g, "240")
  

  
  return(
    <>
     {!!toggleProductsDetails && 
     <ProductDetails
     toggleProductsDetails={toggleProductsDetails}
     setToggleProductsDetails={setToggleProductsDetails}
     >
      <ProductInfo
        product={product}
        handleCart={handleCart}
        idItemsAdded={idItemsAdded}
        key={`productDetails1 ${product.id}`}
      /> 
     </ProductDetails>
     }
    <div className="productItem">
      <picture>
        <source media="(min-width: 50em)" sizes="50vw" srcSet={foto}/>
        <img
        sizes="100vw"
        loading="lazy" 
        src={foto} alt={product.title}
        onClick={() => setToggleProductsDetails(!toggleProductsDetails)} 
        />
      </picture>
        <div className="productItem-info">
          <div>
            <p>{product.cantidad}</p>
            <FormattedNumber value={product.price} style="currency" currency="USD"/>
            <p>{product.title}</p>
            <p>Category:{product.category.name}</p>
          </div>
          <figure onClick={() => handleCart(product)}>
            <img src={(idItemsAdded.includes(product.id)) ? iconAdded : iconAddToCart} alt="add to cart"/>
          </figure>
        </div>
    </div>
    </>
  );
}

export { ProducItem };