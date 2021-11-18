import React, {useEffect, useState} from "react";
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged, signOut   } from "firebase/auth";

import { FireApp } from './useFireBaseConfig.js'


function useProvideAuth() {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(false);
  
  const auth = getAuth();

  useEffect(() => {
    const userLog = onAuthStateChanged(auth, (user) => {
      if(user){
        const uid = user.uid;
        setUser(uid)
      }else {
        console.log("user signOut")
      }
    })
    userLog()
  },[])

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

  const signout = (changePath) => {
    signOut(auth)
    .then(() => {
      setUser(null);
      changePath();
    }).catch((error)=> {
      setError(error)
    })

  };

  return {
    user,
    signin,
    signout,
    error
  };
}

export { useProvideAuth };