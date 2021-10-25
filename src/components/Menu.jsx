import React from "react";
import '../styles/MenuDesktop.scss';
import '../styles/MenuMobile.scss';

import closeIcon from '../assets/icons/icon_close.png'

const MenuDesktop = () => {
  return(
    <div className="desktop-menu">
    <ul>
      <li>
        <a href="/my-orders" className="desktop-menu-title">My orders</a>
      </li>

      <li>
        <a href="/my-account">My account</a>
      </li>

      <li>
        <a href="/">Sign out</a>
      </li>
    </ul>
  </div>
  );
}

const MenuMobile = ({toggleMenuMobile}) => {
  return (
    <div className="mobile-menu">
      <div className="mobile-menu-closeIcon" >
        <img onClick={() => {toggleMenuMobile()}} src={closeIcon} /> 

      </div>
      <ul>
        <li>
          <a href="/">CATEGORIES</a>
        </li>
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
          <a href="/">Other</a>
        </li>
      </ul>

      <ul>
        <li>
          <a href="/my-orders">My orders</a>
        </li>
        <li>
          <a href="/my-account">My account</a>
        </li>
      </ul>

      <ul>
        <li>
          <a href="/" className="email">
            platzi@example.com
          </a>
        </li>
        <li>
          <a href="/" className="sign-out">
            Sign out
          </a>
        </li>
      </ul>
    </div>
  );
}

export { MenuDesktop, MenuMobile };