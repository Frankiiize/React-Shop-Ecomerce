import React  from "react";
import { Header } from "../components/Header.jsx";
import { SearchImput } from "../components/SearchImput.jsx";


const Layaout = ({ children }) => {
  
  return (
    <div className="layaout">
    <Header
      />
    <SearchImput />
      {children}
    </div>
  );
}

export { Layaout }; 