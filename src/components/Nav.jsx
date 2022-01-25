import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";

import iconMenu from '../assets/icons/icon_menu.svg'
import iconShoppingCard from '../assets/icons/icon_shopping_cart.svg'
import yardSaleLogo from '../assets/logos/logo_yard_sale.svg'
import { ProductsContext } from "../context/ProductContex";

const Nav = ({cartState, handleMenuMobile, handleMenuDesktop, toggleShopCart, setToggleShopCart, setDesktopMenu, setMobileMenu, user, resetPaginated }) => {
  return (
    <>
      <img onClick={handleMenuMobile} src={iconMenu} alt="menu" className="menu" />
      <div className="navbar-left">
        <Link onClick={() => {setDesktopMenu(false); setMobileMenu(false); setToggleShopCart(false)}} to="/">
          <img width="97px" src={yardSaleLogo} alt="logo" className="headerLogo" />
        </Link>
        <ul>
          <li>
            <NavLink
              exact
              activeClassName="isActive"
              onClick={() => {setDesktopMenu(false); resetPaginated()}} 
              to="/">
                All
            </NavLink>
          </li>
          <li>
            <NavLink  
              activeClassName="isActive"
              onClick={() => {setDesktopMenu(false); resetPaginated()}} 
              to="/categories/1">
                Clothes
            </NavLink>
          </li>
          <li>
            <NavLink
              activeClassName="isActive" 
              onClick={() => {setDesktopMenu(false); resetPaginated()}} 
              to="/categories/2">
                Electronics
            </NavLink>
          </li>
          <li>
            <NavLink
              activeClassName="isActive"
              onClick={() => {setDesktopMenu(false); resetPaginated()}} 
              to="/categories/3">
                Furnitures
            </NavLink>
          </li>
          <li>
            <NavLink 
              activeClassName="isActive"
              onClick={() => {setDesktopMenu(false); resetPaginated()}} 
              to="/categories/4">
                Toys
            </NavLink>
          </li>
          <li>
            <NavLink 
              activeClassName="isActive"
              onClick={() => {setDesktopMenu(false); resetPaginated()}} 
              to="/categories/5">
                Others
            </NavLink>
          </li>
        </ul>
      </div>

      <div className="navbar-right">
        <ul>
        {!!user
          ? (
            <li onClick={handleMenuDesktop} className="navbar-email">
              <p>{user.email}</p>
              <i className="navbar-email-arrowDown"></i>
            </li>
            )
          : (
            <Link  to="/login">Sign in</Link>
            )
        }
          
          <li 
            className="navbar-shopping-cart" 
            onClick={() => {
              setToggleShopCart(!toggleShopCart); 
              setMobileMenu(false), setDesktopMenu(false)
              }}
          >
            <img src={iconShoppingCard} alt="shopping cart" />
            {(!!cartState.cart.length > 0 )
            ? <div>{cartState.cart.length}</div> 
            : <p></p>}
      
          </li>
        </ul>
      </div>
    </>
  );
}

export { Nav };