import React from "react";
import { ProductsContext } from "../context/ProductContex";
import '../styles/searchImput.scss'


const SearchImput = () => {
  const { products, error, loading, search, setSeacrch } = React.useContext(ProductsContext)

  const handleSearchValue = (ev) => {
    setSeacrch(ev.target.value) 
  }
  return(
    <section className='searchContainer' >
      <input onChange={handleSearchValue} value={search} className='searchContainer__searchImput' type='text' />
    </section>
  );
}

export { SearchImput };