import React from "react";
import '../styles/ProductDetails.scss';
import closeIcon from '../assets/icons/icon_close.png'

const ProductDetails = ({children, setToggleProductsDetails, toggleProductsDetails}) => {
  return(
    <aside className="product-detail">
    <div className="product-detail-close">
      <img onClick={() => setToggleProductsDetails(!toggleProductsDetails)} src={closeIcon} alt="close"/>
    </div>
    {children}
  </aside>
  );
}
export { ProductDetails };