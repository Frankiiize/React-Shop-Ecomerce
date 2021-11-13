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
  const { mobileMenu, desktopMenu, handleMenuMobile, handleMenuDesktop, setMobileMenu, setDesktopMenu } = useMenu();
  const [toggleShopCart, setToggleShopCart] = React.useState(false);
  return (
    <>
    {toggleShopCart && 
      <MyOrderCart 
        toggleShopCart={toggleShopCart} 
        setToggleShopCart={setToggleShopCart} 
        setDesktopMenu={setDesktopMenu}
      />
    }
    { mobileMenu && 
      <MenuMobile 
        handleMenuMobile={handleMenuMobile} 
        user={isUserLog} 
        setMobileMenu={setMobileMenu}
        setToggleShopCart={setToggleShopCart}
      />
      }
   
      <nav>
        {desktopMenu && 
        <MenuDesktop  
          setDesktopMenu={setDesktopMenu}
        />
        }
        <Nav
            cartState={cart}
            handleMenuMobile={handleMenuMobile}
            handleMenuDesktop={handleMenuDesktop}   
            toggleShopCart={toggleShopCart}
            setToggleShopCart={setToggleShopCart}
            setDesktopMenu={setDesktopMenu}
            setMobileMenu={setMobileMenu}
        />

          {children}
      </nav> 

    </>
  );
};

export { Header }
