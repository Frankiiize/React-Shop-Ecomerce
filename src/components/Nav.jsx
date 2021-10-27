import React from "react";
import '../styles/Header.scss'
import iconMenu from '../assets/icons/icon_menu.svg'
import iconShoppingCard from '../assets/icons/icon_shopping_cart.svg'
import yardSaleLogo from '../assets/logos/logo_yard_sale.svg'

const Nav = ({cartState, handleMenuMobile, handleMenuDesktop, toggleShopCart, setToggleShopCart }) => {

  return (
    <>
      <img onClick={handleMenuMobile} src={iconMenu} alt="menu" className="menu" />
      <div className="navbar-left">
        <a className="headerLogo" href="/">
          <img src={yardSaleLogo} alt="logo" className="headerLogo" />
        </a>

        <ul>
          <li>
            <a href="/">All</a>
          </li>
          <li>
            <a href="/">Clothes</a>
          </li>
          <li>
            <a href="/">Electronics</a>
          </li>
          <li>
            <a href="/">Furnitures</a>
          </li>
          <li>
            <a href="/">Toys</a>
          </li>
          <li>
            <a href="/">Others</a>
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