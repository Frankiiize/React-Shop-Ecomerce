import React,{useState} from "react";
const useMenu = () => {
  
  const [mobileMenu, setMobileMenu] = useState(false);
  const [desktopMenu, setDesktopMenu] = useState(false);
  const handleMenuMobile = () => {
    setMobileMenu(!mobileMenu);
  }
  const handleMenuDesktop = () => {
    setDesktopMenu(!desktopMenu)
  }
  return {
    mobileMenu,
    setMobileMenu,
    desktopMenu, 
    setDesktopMenu,
    handleMenuMobile,
    handleMenuDesktop
  }
}

export { useMenu };