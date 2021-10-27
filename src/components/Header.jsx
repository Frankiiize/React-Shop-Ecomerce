import React from "react";
import { MenuDesktop, MenuMobile } from "./Menu.jsx";
import { Nav } from "./Nav.jsx";
import { useMenu } from "../hooks/useMenu.js";
import { MyOrderCart } from "../containers/MyOrderCart.jsx";
import { AppContext }  from '../context/AppContext.js'


const Header = ({children}) => {
  const { state } = React.useContext(AppContext);
  const isUserLog = true;
  const { mobileMenu, desktopMenu, handleMenuMobile, handleMenuDesktop } = useMenu();
  const [toggleShopCart, setToggleShopCart] = React.useState(false);
  return (
    <>
    {mobileMenu && <MenuMobile handleMenuMobile={handleMenuMobile} user={isUserLog} />}
    {desktopMenu && <MenuDesktop  />}
    {toggleShopCart && <MyOrderCart />}
   
      <nav>
        <Nav
            cartState={state}
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
