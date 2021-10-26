import React from "react";
import addToCart from '../assets/icons/bt_add_to_cart.svg'

const ProducItem = ({product}) => {
  const [cart, setCart] = React.useState([]);
  const handleCart = () => {
    setCart([]);
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
          <figure onClick={handleCart}>
            <img src={addToCart} alt="add to cart"/>
          </figure>
        </div>
    </div>
    </>
  );
}

export { ProducItem };