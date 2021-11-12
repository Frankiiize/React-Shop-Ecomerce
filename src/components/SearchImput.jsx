import React from "react";
import '../styles/searchImput.scss'


const SearchImput = () => {
  const [ search, setSeacrch ] = React.useState('');

  
  const handleSearchValue = (ev) => {
    setSeacrch(ev.target.value) 
  }
  
  /* const filterProducts =  */
  
  return(
    <section className='searchContainer' >
      <input onChange={handleSearchValue} value={search} className='searchContainer__searchImput' type='text' />
    </section>
  );
}

export { SearchImput };