import React, {useState} from "react";
import { FireApp } from '../hooks/useFireBaseConfig.js'

function useProvideAuth() {
  const [user, setUser] = useState(null);

  const signin = (changePath) => {
    setUser("user");
    changePath();
   
  };

  const signout = changePath => {
    setUser(null);
    changePath();

  };

  return {
    user,
    signin,
    signout
  };
}

export { useProvideAuth };