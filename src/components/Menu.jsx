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
        <Link onClick={() => setDesktopMenu(false)} to="/orders" className="desktop-menu-title">My orders</Link>
      </li>

      <li>
        <Link onClick={() => setDesktopMenu(false)} to="/myAccount">My account</Link>
      </li>

      <li>
        <button onClick={() => {handleSignOut();setDesktopMenu(false)}} type="button">Sign out</button>
      </li>
    </ul>
  </div>
  );
}

const MenuMobile = ({handleMenuMobile, user, setMobileMenu, setToggleShopCart,handleSignOut, resetPaginated}) => {
  
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
          <Link 
            onClick={() => {
              setMobileMenu(false); 
              setToggleShopCart(false);
              resetPaginated()
              }} 
            to="/">All
          </Link>
        </li>
        <li>
          <Link 
            onClick={() => {
              setMobileMenu(false); 
              setToggleShopCart(false);
              resetPaginated();
              }} 
            to="/categories/1">Clothes
          </Link>
        </li>
        <li>
          <Link 
            onClick={() => {
              setMobileMenu(false); 
              setToggleShopCart(false);
              resetPaginated();
              }} 
            to="/categories/2">Electronics
          </Link>
        </li>
        <li>
          <Link 
            onClick={() => {
              setMobileMenu(false); 
              setToggleShopCart(false);
              resetPaginated();
              }} 
            to="/categories/3">Furnitures
          </Link>
        </li>
        <li>
          <Link 
            onClick={() => {
              setMobileMenu(false); 
              setToggleShopCart(false);
              resetPaginated();
              }} 
            to="/categories/4">Toys
          </Link>
        </li>
        <li>
          <Link 
            onClick={() => {
              setMobileMenu(false); 
              setToggleShopCart(false);
              resetPaginated();
              }} 
            to="/categories/5">Others
          </Link>
        </li>
      </ul>
      {!!user 
        ? (<UserLogIn handleSignOut={handleSignOut} handleMenuMobile={handleMenuMobile} setMobileMenu={setMobileMenu} setToggleShopCart={setToggleShopCart}/>)
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

const UserLogIn = ({handleSignOut, handleMenuMobile, setMobileMenu, setToggleShopCart}) => {
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
        <a href="/React-Shop-Ecomerce" className="email">
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