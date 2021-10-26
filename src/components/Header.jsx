import React from "react";
import '../styles/Header.scss'
import { MenuDesktop, MenuMobile } from "./Menu.jsx";

import iconMenu from '../assets/icons/icon_menu.svg'
import iconShoppingCard from '../assets/icons/icon_shopping_cart.svg'
import yardSaleLogo from '../assets/logos/logo_yard_sale.svg'
const Header = () => {
  const [menu, setMenu] = React.useState(false);
  const [menuMobile, setMenuMobile] = React.useState(false);
  
  const toggleMenuDesktop = () => {
    setMenu(!menu);
  };
  const toggleMenuMobile = () => {
    setMenuMobile(!menuMobile);
  };
  return (
    <>
    {!!menuMobile ?
    <MenuMobile
      toggleMenuMobile={toggleMenuMobile}
    /> 
    : 
    <nav>

      <img onClick={toggleMenuMobile} src={iconMenu} alt="menu" className="menu" />
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
          <li onClick={toggleMenuDesktop} className="navbar-email">
            <p>platzi@example.com</p>
            <i className="navbar-email-arrowDown"></i>
          </li>
          <li className="navbar-shopping-cart">
            <img src={iconShoppingCard} alt="shopping cart" />
            <div>2</div>
          </li>
        </ul>
      </div>
      {!!menu && (<MenuDesktop />)}
       
    </nav> 
    
    }
      
    </>
  );
};

export { Header }
