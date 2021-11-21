import React, { useContext } from "react";
import { Route, Redirect  } from "react-router-dom";
import { authContext } from "../context/AuthContext";

function PrivateRoute({ children, ...rest }) {
  let { user } = useContext(authContext)
  return (
    <Route
      {...rest}
      render={({ location }) =>
        user ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/React-Shop-Ecomerce/login",
              state: { from: location }
            }}
          />
        )
      }
    />
  );
}

export { PrivateRoute };