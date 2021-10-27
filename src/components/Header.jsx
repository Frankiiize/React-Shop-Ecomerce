import React from "react";
import { MenuDesktop, MenuMobile } from "./Menu.jsx";


const Header = ({children, mobileMenu, handleMenuMobile, desktopMenu, handleMenuDesktop}) => {
  const isUserLog = true;
  return (
    <>
    {mobileMenu && <MenuMobile handleMenuMobile={handleMenuMobile} user={isUserLog} />}
    {desktopMenu && <MenuDesktop handleMenuDesktop={handleMenuDesktop} />}
      <nav>
        {children}
      </nav> 
    </>
  );
};

export { Header }
