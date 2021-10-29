import React from "react";
import iconAddToCart from '../assets/icons/bt_add_to_cart.svg';
import iconAdded from '../assets/icons/bt_added_to_cart.svg';
import  { AppContext }  from "../context/AppContext";

const ProducItem = ({product}) => {
  const { addToCart } = React.useContext(AppContext);

  const handleCart = (item) => {
    console.log("click")
    addToCart(item);
  }
 
  return(
    <>
    <div className="productItem">
        <img src={product.images[0]} alt={product.title}/>
        <div className="productItem-info">
          <div>
            <p>${product.price}</p>
            <p>{product.title}</p>
          </div>
          <figure onClick={() => handleCart(product)}>
            <img src={iconAddToCart} alt="add to cart"/>
          </figure>
        </div>
    </div>
    </>
  );
}

export { ProducItem };