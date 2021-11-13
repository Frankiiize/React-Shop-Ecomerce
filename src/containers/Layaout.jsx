import React  from "react";
import { Header } from "../components/Header.jsx";



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