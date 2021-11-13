import React from "react";
import { SearchImput } from "../components/SearchImput.jsx";
const MainContainer = ({children}) => {
  return (
    <section className="main-container">
      <SearchImput />
        {children}
    </section>
  )
}

export { MainContainer };