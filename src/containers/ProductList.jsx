import React, { useEffect, useState } from "react";
import { ProducItem } from "../components/ProducItem.jsx";
import '../styles/ProducList.scss';
import axios from "axios";
import { useGetProducts } from "../hooks/useGetProducts.js";
const API = 'https://api.escuelajs.co/api/v1/products?limit=0&offset=0'

const ProductList = () => {
  const products = useGetProducts(API);
  return(
    <section className="main-container">
    <div className="productList">
      {products.map((product) => (
        <ProducItem
          product={product}
          key={product.id}
        />
      ))}
    </div>
    </section>
  );
}

export { ProductList };