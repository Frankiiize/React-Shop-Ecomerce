import React, { useContext } from "react";
import '../styles/Header.scss'
import { MenuDesktop, MenuMobile } from "./Menu.jsx";
import { Nav } from "./Nav.jsx";
import { useMenu } from "../hooks/useMenu.js";
import { MyOrderCart } from "../containers/MyOrderCart.jsx";
import { AppContext }  from '../context/AppContext.js'
import { authContext } from "../context/AuthContext";
import { useHistory } from "react-router-dom";
import { ProductsContext } from "../context/ProductContex";


const Header = ({children}) => {
  const history = useHistory()
  const { cart } = React.useContext(AppContext);
  const { mobileMenu, desktopMenu, handleMenuMobile, handleMenuDesktop, setMobileMenu, setDesktopMenu } = useMenu();
  const [toggleShopCart, setToggleShopCart] = React.useState(false);
  const { user, signout } = useContext(authContext);
  const { resetPaginated } = useContext(ProductsContext)
  const handleSignOut = () =>{
    const changePath = () =>  history.push("/React-Shop-Ecomerce");
    signout(changePath)
  
  }
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
        setMobileMenu={setMobileMenu}
        setToggleShopCart={setToggleShopCart}
        user={user}
        handleSignOut={handleSignOut}
        resetPaginated={resetPaginated}
      />
      }
   
      <nav>
        {desktopMenu && 
        <MenuDesktop  
          handleSignOut={handleSignOut}
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
            user={user}
            resetPaginated={resetPaginated}
        />

          {children}
      </nav> 

    </>
  );
};

export { Header }
