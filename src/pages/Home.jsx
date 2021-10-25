import React from "react";
import { Header } from "../components/Header.jsx";
import { ProductList } from "../components/ProductList.jsx";

const Home = () => {
  return (
    <>
      <Header />
      <ProductList />
    </>
  );
}

export { Home };