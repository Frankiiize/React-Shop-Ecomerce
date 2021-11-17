import React, {useEffect, useState} from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

import { FireApp } from '../hooks/useFireBaseConfig.js'


function useProvideAuth() {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(false);
  
  const auth = getAuth();

  const signin = (changePath, email, password) => {
    
   
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
     
      const user = userCredential.user
      setUser(user)
      changePath();
      console.log(user)
    })
    .catch((error) => {
      const errorCode = error.code;
      setError(true)
      console.log(errorCode)
    })
  };

  const signout = changePath => {
    setUser(null);
    changePath();

  };

  return {
    user,
    signin,
    signout,
    error
  };
}

export { useProvideAuth };