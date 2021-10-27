import React  from "react";
import { Header } from "../components/Header.jsx";
import { Nav } from "../components/Nav.jsx";
import { useMenu } from "../hooks/useMenu.js";

const Layaout = ({ children }) => {
  const { mobileMenu, desktopMenu, handleMenuMobile, handleMenuDesktop } = useMenu();
  return (
    <div className="layaout">
    <Header
        mobileMenu={mobileMenu}
        desktopMenu={desktopMenu}
        handleMenuMobile={handleMenuMobile}
      >
        <Nav
          handleMenuMobile={handleMenuMobile}
          handleMenuDesktop={handleMenuDesktop}
        />
      </Header>
      {children}
    </div>
  );
}

export { Layaout }; 