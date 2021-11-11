import React from "react";
import '../styles/Header.scss'
import { MenuDesktop, MenuMobile } from "./Menu.jsx";
import { Nav } from "./Nav.jsx";
import { useMenu } from "../hooks/useMenu.js";
import { MyOrderCart } from "../containers/MyOrderCart.jsx";
import { AppContext }  from '../context/AppContext.js'


const Header = ({children}) => {
  const { cart } = React.useContext(AppContext);
  const isUserLog = true;
  const { mobileMenu, desktopMenu, handleMenuMobile, handleMenuDesktop } = useMenu();
  const [toggleShopCart, setToggleShopCart] = React.useState(false);
  return (
    <>
    {toggleShopCart && <MyOrderCart toggleShopCart={toggleShopCart} setToggleShopCart={setToggleShopCart} />}
    {mobileMenu && <MenuMobile handleMenuMobile={handleMenuMobile} user={isUserLog} />}
   
      <nav>
        {desktopMenu && <MenuDesktop  />}
        <Nav
            cartState={cart}
            handleMenuMobile={handleMenuMobile}
            handleMenuDesktop={handleMenuDesktop}   
            toggleShopCart={toggleShopCart}
            setToggleShopCart={setToggleShopCart}
        />

          {children}
      </nav> 

    </>
  );
};

export { Header }
