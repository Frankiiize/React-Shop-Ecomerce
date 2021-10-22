import React from "react";
import '../styles/Header.scss'

import iconMenu from '../assets/icons/icon_menu.svg'
import iconShoppingCard from '../assets/icons/icon_shopping_cart.svg'
import yardSaleLogo from '../assets/logos/logo_yard_sale.svg'
const Header = () => {
  return (
    <nav>
      <img src={iconMenu}alt="menu" className="menu" />

      <div className="navbar-left">
        <img src={yardSaleLogo} alt="logo" className="headerLogo" />

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
          <li className="navbar-email">platzi@example.com</li>
          <li className="navbar-shopping-cart">
            <img src={iconShoppingCard} alt="shopping cart" />
            <div>2</div>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export { Header }
