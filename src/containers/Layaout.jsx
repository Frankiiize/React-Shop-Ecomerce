import React  from "react";
const Header = React.lazy(() => import("../components/Header.jsx"));



const Layaout = ({ children }) => {
  
  return (
    <div className="layaout">
    <Header
      />
  
      {children}
    </div>
  );
}

export { Layaout }; 