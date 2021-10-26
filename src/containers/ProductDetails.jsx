import React from "react";
import '../styles/ProductDetails.scss';
import cartIcon from '../assets/icons/bt_add_to_cart.svg'
import closeIcon from '../assets/icons/icon_close.png'
import { ProductInfo } from "../components/ProductInfo";
const ProductDetails = () => {
  return(
    <aside className="product-detail">
    <div className="product-detail-close">
      <img src={closeIcon} alt="close"/>
    </div>
    <ProductInfo/>
  </aside>
  );
}
export { ProductDetails };