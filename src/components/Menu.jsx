import React from "react";
import { Link } from "react-router-dom";
import '../styles/MenuDesktop.scss';
import '../styles/MenuMobile.scss';

import closeIcon from '../assets/icons/icon_close.png'

const MenuDesktop = ({setDesktopMenu, handleSignOut}) => {
  return(
    <div className="desktop-menu">
    <ul>
      <li>
        <Link onClick={() => setDesktopMenu(false)} to="/React-Shop-Ecomerce/orders" className="desktop-menu-title">My orders</Link>
      </li>

      <li>
        <Link onClick={() => setDesktopMenu(false)} to="/React-Shop-Ecomerce/myAccount">My account</Link>
      </li>

      <li>
        <button onClick={() => {handleSignOut();setDesktopMenu(false)}} type="button">Sign out</button>
      </li>
    </ul>
  </div>
  );
}

const MenuMobile = ({handleMenuMobile, user, setMobileMenu, setToggleShopCart,handleSignOut}) => {
  return (
    <div className="mobile-menu">
      <div className="mobile-menu-closeIcon">
        <img
          onClick={() => {
            handleMenuMobile();
          }}
          src={closeIcon}
        />
      </div>
      <ul>
        <li>
          <Link onClick={() => {setMobileMenu(false); setToggleShopCart(false)}} to="/">All</Link>
        </li>
        <li>
          <Link onClick={() => {setMobileMenu(false); setToggleShopCart(false)}} to="/React-Shop-Ecomerce/home/clothes">Clothes</Link>
        </li>
        <li>
          <Link onClick={() => {setMobileMenu(false); setToggleShopCart(false)}} to="/React-Shop-Ecomerce/home/electronics">Electronics</Link>
        </li>
        <li>
          <Link onClick={() => {setMobileMenu(false); setToggleShopCart(false)}} to="/React-Shop-Ecomerce/home/fornitures">Furnitures</Link>
        </li>
        <li>
          <Link onClick={() => {setMobileMenu(false); setToggleShopCart(false)}} to="/React-Shop-Ecomerce/home/toys">Toys</Link>
        </li>
        <li>
          <Link onClick={() => {setMobileMenu(false); setToggleShopCart(false)}} to="/React-Shop-Ecomerce/home/others">Others</Link>
        </li>
      </ul>
      {!!user 
        ? (<UserLogIn handleSignOut={handleSignOut} handleMenuMobile={handleMenuMobile} />)
        : (<NoUserLogin handleMenuMobile={handleMenuMobile} />)
      }
     
    </div>
  );
}
const NoUserLogin = ({handleMenuMobile}) => {
  return (
    <ul>
      <li>
        <Link onClick={handleMenuMobile} to="/login" className="sign-out">
          login
        </Link>
      </li>
    </ul>
  );
}

const UserLogIn = ({handleSignOut, handleMenuMobile}) => {
  return(
    <>
      <ul>
        <li>
          <Link onClick={() => {setMobileMenu(false); setToggleShopCart(false)}} to="/React-Shop-Ecomerce/orders">My orders</Link>
        </li>
        <li>
          <Link onClick={() => {setMobileMenu(false); setToggleShopCart(false)}} to="/React-Shop-Ecomerce/myAccount">My account</Link>
        </li>
      </ul>

    <ul>
      <li>
        <a href="/React-Shop-Ecomerce/" className="email">
          platzi@example.com
        </a>
      </li>
      <li>
        <button onClick={() => {handleSignOut();handleMenuMobile()}} type="button" className="sign-out">
          Sign out
        </button>
      </li>
    </ul>
    </>
  )
}

export { MenuDesktop, MenuMobile };