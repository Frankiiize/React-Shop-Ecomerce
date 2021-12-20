import React, { useContext, useEffect } from "react";
import { Route, Redirect, Link, useHistory  } from "react-router-dom";
import { authContext } from "../context/AuthContext";

function PrivateRoute({ children, ...rest }) {
  const history = useHistory()
    const { user, showChildren } = useContext(authContext);
    return (
      <Route {...rest} render={() => {
      if(!!showChildren ){
        if(user !== null){
          return children
        }
      }
      else{
        history.push("/React-Shop-Ecomerce/login")
       
      }
     
    }} />
  )
}

export { PrivateRoute };