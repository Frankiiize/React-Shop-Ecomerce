import React from "react";
import { Link } from "react-router-dom";

import iconMenu from '../assets/icons/icon_menu.svg'
import iconShoppingCard from '../assets/icons/icon_shopping_cart.svg'
import yardSaleLogo from '../assets/logos/logo_yard_sale.svg'

const Nav = ({cartState, handleMenuMobile, handleMenuDesktop, toggleShopCart, setToggleShopCart }) => {

  return (
    <>
      <img onClick={handleMenuMobile} src={iconMenu} alt="menu" className="menu" />
      <div className="navbar-left">
        <img src={yardSaleLogo} alt="logo" className="headerLogo" />
        <ul>
          <li>
            <Link to="/React-Shop-Ecomerce/">All</Link>
          </li>
          <li>
            <Link to="/React-Shop-Ecomerce/home/clothes">Clothes</Link>
          </li>
          <li>
            <Link to="/React-Shop-Ecomerce/home/electronics">Electronics</Link>
          </li>
          <li>
            <Link to="/React-Shop-Ecomerce/home/fornitures">Furnitures</Link>
          </li>
          <li>
            <Link to="/React-Shop-Ecomerce/home/toys">Toys</Link>
          </li>
          <li>
            <Link to="/React-Shop-Ecomerce/home/others">Others</Link>
          </li>
        </ul>
      </div>

      <div className="navbar-right">
        <ul>
          <li onClick={handleMenuDesktop} className="navbar-email">
            <p>platzi@example.com</p>
            <i className="navbar-email-arrowDown"></i>
          </li>
          <li className="navbar-shopping-cart" onClick={() => setToggleShopCart(!toggleShopCart)} >
            <img src={iconShoppingCard} alt="shopping cart" />
            {cartState.cart.length > 0 
            ? <div>{cartState.cart.length}</div> 
            : null}
      
          </li>
        </ul>
      </div>
    </>
  );
}

export { Nav };