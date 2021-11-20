import React, { useContext } from "react";
import { Link, NavLink, useRouteMatch } from "react-router-dom";

import iconMenu from '../assets/icons/icon_menu.svg'
import iconShoppingCard from '../assets/icons/icon_shopping_cart.svg'
import yardSaleLogo from '../assets/logos/logo_yard_sale.svg'
import { authContext } from "../context/AuthContext";
import { useMenu } from "../hooks/useMenu";

const Nav = ({cartState, handleMenuMobile, handleMenuDesktop, toggleShopCart, setToggleShopCart, setDesktopMenu, setMobileMenu, user }) => {
  
  let { url } = useRouteMatch();
  return (
    <>
      <img onClick={handleMenuMobile} src={iconMenu} alt="menu" className="menu" />
      <div className="navbar-left">
        <Link onClick={() => {setDesktopMenu(false); setMobileMenu(false); setToggleShopCart(false)}} to="/React-Shop-Ecomerce">
          <img src={yardSaleLogo} alt="logo" className="headerLogo" />
        </Link>
        <ul>
          <li>
            <NavLink
              exact
              activeClassName="isActive"
              onClick={() => {setDesktopMenu(false)}} 
              to="/React-Shop-Ecomerce">
                All
            </NavLink>
          </li>
          <li>
            <NavLink  
              activeClassName="isActive"
              onClick={() => {setDesktopMenu(false)}} 
              to="/React-Shop-Ecomerce/categories/1">
                Clothes
            </NavLink>
          </li>
          <li>
            <NavLink
              activeClassName="isActive" 
              onClick={() => {setDesktopMenu(false)}} 
              to="/React-Shop-Ecomerce/categories/2">
                Electronics
            </NavLink>
          </li>
          <li>
            <NavLink
              activeClassName="isActive"
              onClick={() => {setDesktopMenu(false)}} 
              to="/React-Shop-Ecomerce/categories/3">
                Furnitures
            </NavLink>
          </li>
          <li>
            <NavLink 
              activeClassName="isActive"
              onClick={() => {setDesktopMenu(false)}} 
              to="/React-Shop-Ecomerce/categories/4">
                Toys
            </NavLink>
          </li>
          <li>
            <NavLink 
              activeClassName="isActive"
              onClick={() => {setDesktopMenu(false)}} 
              to="/React-Shop-Ecomerce/categories/5">
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
            <Link  to="/React-Shop-Ecomerce/login">Sign in</Link>
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