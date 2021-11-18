import React,{ useState ,useContext, createContext, children} from "react";
import { useProvideAuth } from "../hooks/useProvideAuth";
const authContext = createContext();



const ProviderAuth = ({children}) => {
  const auth = useProvideAuth()
  return (
    <authContext.Provider value={auth} >
      {children}
    </authContext.Provider>
  )
}



export {ProviderAuth, authContext};