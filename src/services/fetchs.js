const fetchProducts = async (API) =>  {
  try  {
    const data = await fetch(API);
    const res =  await data.json();
    return res;
  }
  catch(error){
    console.log(error)
  }
}

export { fetchProducts };