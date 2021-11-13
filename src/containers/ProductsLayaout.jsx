import React from "react";
import { Header } from "../components/Header";
import { SearchImput } from "../components/SearchImput";

const ProductsLayaout = ({children}) => {
  return(
    <section className="produtcs">
      <Header />
      <SearchImput />
      {children}
    </section>
  );
}

export { ProductsLayaout };