import React, { useEffect, useState } from "react";
import { ProducItem } from "../components/ProducItem.jsx";
import '../styles/ProducList.scss';
import axios from "axios";
import { useGetProducts } from "../hooks/useGetProducts.js";
import { Layaout } from "./Layaout.jsx";
const API = 'https://api.escuelajs.co/api/v1/products?limit=0&offset=0'

const API_categoria = "https://api.escuelajs.co/api/v1/categories"

const ProductList = () => {
  const {products,error, loading} = useGetProducts(API);
  const categoriesClothes = products.filter( (product) => product.category.id === 1 );
  const categoriesElectronics = products.filter( (product) => product.category.id === 2 );
  const categoriesForniture = products.filter( (product) => product.category.id === 3 );
  const categoriesToys = products.filter( (product) => product.category.id === 4 );
  const categoriOters = products.filter( (product) => product.category.id === 5 );
  return(
    <>
      
      <section className="main-container">
      {error && <p>{error}!</p>}
      {loading && <p>loading</p>}
        <div className="productList">

          {products.map((product) =>(
              <ProducItem
              product={product}
              key={product.id}
            />
          
          ))}
        </div>
      </section>
    </>
  );
}

export { ProductList };