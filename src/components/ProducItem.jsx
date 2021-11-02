import React from "react";
import iconAddToCart from '../assets/icons/bt_add_to_cart.svg';
import iconAdded from '../assets/icons/bt_added_to_cart.svg';
import  { AppContext }  from "../context/AppContext";
import { ProductDetails } from "../containers/ProductDetails.jsx";
import { ProductInfo } from "./ProductInfo.jsx";


const ProducItem = ({ product }) => {
  const {  removeFromCart , saveCart, state, parserCart } = React.useContext(AppContext);
  const [ toggleProductsDetails, setToggleProductsDetails ] = React.useState(false);
  

  const itemsParserCart = parserCart.cart.filter(item => item.added)
  const idItemsAdded = itemsParserCart.map((item) => item.id)

  const handleCart = (item) => {
    //debugger
    if(!item.added ){
      (idItemsAdded.includes(item.id))
      ? ( item.added = false, removeFromCart(item))
      : ( item.added = true, saveCart(item))
      } 
      else {
      item.added = false;
      removeFromCart(item);
    }
  }
 
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
        <img onClick={() => setToggleProductsDetails(!toggleProductsDetails)} src={product.images[0]} alt={product.title}/>
        <div className="productItem-info">
          <div>
            <p>{product.cantidad}</p>
            <p>${product.price}</p>
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