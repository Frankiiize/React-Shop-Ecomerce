import React from "react";

const MainContainer = ({children}) => {
  return (() => {
    <section className="main-container">
      {children}
    </section>
  });
}

export { MainContainer };