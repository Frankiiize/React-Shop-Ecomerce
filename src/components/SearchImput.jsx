import React from "react";
import { ProductsContext } from "../context/ProductContex";
import '../styles/searchImput.scss'
import searchIcon from '../assets/icons/Shape.svg'


const SearchImput = () => {
  const { search, setSeacrch, setSearchON } = React.useContext(ProductsContext)

  const handleSearchValue = (ev) => {

    setSeacrch(ev.target.value);
    !!ev.target.value ? setSearchON(true) : setSearchON(false);
  }
  return(
    <section className='searchContainer' >
      <div className='searchContainer__searchImput'>
        <img src={searchIcon} />
        <input 
          onChange={handleSearchValue} 
          value={search} type='text' 
          placeholder='Searc Product' 
          />
      </div>
    </section>
  );
}

export { SearchImput };