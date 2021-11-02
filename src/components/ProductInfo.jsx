import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { EffectFlip,Pagination,Navigation } from 'swiper';
import iconAddToCart from '../assets/icons/bt_add_to_cart.svg';
import iconAdded from '../assets/icons/bt_added_to_cart.svg';
import "swiper/css";
import "swiper/css/effect-flip"
import "swiper/css/pagination"
import "swiper/css/navigation"

SwiperCore.use([EffectFlip,Pagination,Navigation]);


const style = {
  width: "100%",
  borderRadius: "5px"
}

const ProductInfo = ({product, handleCart, idItemsAdded}) => {

  return(
    <>
      <Swiper 
      effect={'flip'} 
    
      pagination={true} 
      navigation={true} 
      className="mySwiper">
        {product.images.map((img) => (
          <SwiperSlide key={`${img}-${product.id}`}>
            <img style={style} src={img} alt={product.title}/>
          </SwiperSlide>
        ))}
      </Swiper>

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