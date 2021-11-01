import React, { useEffect, useState } from "react";
import { ProducItem } from "../components/ProducItem.jsx";
import '../styles/ProducList.scss';
import axios from "axios";

import { Layaout } from "./Layaout.jsx";




const ProductList = ({products, error ,loading}) => {
  
  
  
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