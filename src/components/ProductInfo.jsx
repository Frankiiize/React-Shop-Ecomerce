import React from "react";
import iconAddToCart from '../assets/icons/bt_add_to_cart.svg';
import iconAdded from '../assets/icons/bt_added_to_cart.svg';

const ProductInfo = ({product, handleCart, idItemsAdded}) => {

  return(
    <>
      <img src={product.images[0]} alt="bike"/>
      <div className="product-info">
        <p>{product.price}</p>
        <p>{product.title}</p>
        <p>{product.description}</p>
        <button onClick={() => handleCart(product)} className={(idItemsAdded.includes(product.id) )? "added add-to-cart-button " : "product-detail-primary-button add-to-cart-button"}>
          <img  src={(idItemsAdded.includes(product.id)) ? iconAdded : iconAddToCart} alt="add to cart"/>
          {idItemsAdded.includes(product.id) ? "item added" : "add to cart"}
        </button>
      </div>
    </>
  );
}
export {ProductInfo}