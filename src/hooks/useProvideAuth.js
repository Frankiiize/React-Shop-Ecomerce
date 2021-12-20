import React, {useEffect, useState} from "react";
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged, signOut, updateProfile    } from "firebase/auth";

import { FireApp } from './useFireBaseConfig.js'
import { useLocation, useHistory } from "react-router-dom";


function useProvideAuth() {
  let auth = getAuth()
  const [user, setUser] = useState();
  const [error, setError] = useState(false);
  const [showChildren, setShowChildren] = useState(false)
 /*  onAuthStateChanged(auth, (user) => {
    debugger
    if(user){
      const u = user
      setUser(user)
    }
    else{
      console.log('user singOut')
    }
  }) */
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      user ? (setUser(user), setShowChildren(true)) : (setUser(null),console.log('userlogOut'))
    })
  })

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

  const upDateUserProfile = (userName,userPhoto, handleEdit) => {
    updateProfile(auth.currentUser,{
      displayName: userName,
      photoURL : userPhoto,
    } )
    .then(() => {
      console.log("perfil actualizado");
      handleEdit();
    })
    .catch((error) => {
      console.log(error)
    })
  }
  

  return {
    error,
    user,
    signin,
    signout,
    upDateUserProfile,
    showChildren,
  };
}

export { useProvideAuth };