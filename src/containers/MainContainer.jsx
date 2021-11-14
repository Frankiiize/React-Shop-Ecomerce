import React from "react";
import { SearchImput } from "../components/SearchImput.jsx";
import { AppContext } from "../context/AppContext.js";
import { Login } from "../pages/Login.jsx"

const MainContainer = ({children}) => {
  const { user } = React.useContext(AppContext)
  return (
    <>
      {!!user 
        ? <section className="main-container">
            <SearchImput />
              {children}
          </section>
        : <Login />
      }
      
    </>
  )
}

export { MainContainer };