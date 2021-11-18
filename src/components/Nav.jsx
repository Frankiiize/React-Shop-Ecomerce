import React from "react";
import { Link, useRouteMatch } from "react-router-dom";

import iconMenu from '../assets/icons/icon_menu.svg'
import iconShoppingCard from '../assets/icons/icon_shopping_cart.svg'
import yardSaleLogo from '../assets/logos/logo_yard_sale.svg'
import { useMenu } from "../hooks/useMenu";

const Nav = ({cartState, handleMenuMobile, handleMenuDesktop, toggleShopCart, setToggleShopCart, setDesktopMenu, setMobileMenu, user }) => {
  let { url } = useRouteMatch();
  console.log(url)
  return (
    <>
      <img onClick={handleMenuMobile} src={iconMenu} alt="menu" className="menu" />
      <div className="navbar-left">
        <Link onClick={() => {setDesktopMenu(false); setMobileMenu(false); setToggleShopCart(false)}} to="/">
          <img src={yardSaleLogo} alt="logo" className="headerLogo" />
        </Link>
        <ul>
          <li>
            <Link onClick={() => {setDesktopMenu(false)}} to="/">All</Link>
          </li>
          <li>
            <Link onClick={() => {setDesktopMenu(false)}} to="/categories/1">Clothes</Link>
          </li>
          <li>
            <Link onClick={() => {setDesktopMenu(false)}} to="/categories/2">Electronics</Link>
          </li>
          <li>
            <Link onClick={() => {setDesktopMenu(false)}} to="/categories/3">Furnitures</Link>
          </li>
          <li>
            <Link onClick={() => {setDesktopMenu(false)}} to="/categories/4">Toys</Link>
          </li>
          <li>
            <Link onClick={() => {setDesktopMenu(false)}} to="/categories/5">Others</Link>
          </li>
        </ul>
      </div>

      <div className="navbar-right">
        <ul>
        {!!user
          ? (
            <li onClick={handleMenuDesktop} className="navbar-email">
              <p>platzi@example.com</p>
              <i className="navbar-email-arrowDown"></i>
            </li>
            )
          : (
            <Link  to="/login">Sign in</Link>
            )
        }
          
          <li className="navbar-shopping-cart" onClick={() => {setToggleShopCart(!toggleShopCart); setMobileMenu(false), setDesktopMenu(false)}} >
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