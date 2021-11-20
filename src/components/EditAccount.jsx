import React, { useContext, useRef } from "react";
import { authContext } from "../context/AuthContext";


const EditAccount = ({handleEdit, user}) => {
  const { upDateUserProfile } = useContext(authContext); 
  const formulario = useRef(null);

  const saveProfileChanges = () => {
    const formData = new FormData(formulario.current);
    const data = {
      userName: formData.get('userName'),
      userPhoto: formData.get('photoUrl'),
      userPassword: formData.get('password'),
      userEmail: formData.get('email')
    }
    if(data.userName !== '' && data.photoURL !== ''){
      upDateUserProfile(data.userName, data.userPhoto,handleEdit );
    }
    if(data.userPassword !== ''){
      console.log(data.userPassword);
    }
    if(data.userEmail !== ''){
      console.log(data.userEmail);
    }
    else {
      handleEdit()
    }
  }

  return(
    <div className="EditAccount">
    <div className="EditAccount__form-container">
      <h1 className="EditAccount__form-title">My account</h1>

      <form action="/" className="EditAccount__form" ref={formulario}>
        <div>
          <label htmlFor="name" className="EditAccount__form-label">Name</label>
          <input type="text" id="userName" name="userName" placeholder={!user.displayName ? user.email.split("@")[0]  : user.displayName} className="EditAccount__form-input input-name"/>

          <label htmlFor="email" className="EditAccount__form-label">{user.email}</label>
          <input type="text" id="email" name="email" placeholder="platzi@example.com" className="EditAccount__form-input input-email"/>

          <label htmlFor="password" className="EditAccount__form-label">Password</label>
          <input type="password" id="password" name="password" placeholder="*********" className="EditAccount__form-input input-password"/>
          
          <label htmlFor="photoUrl" className="EditAccount__form-label">{user.photoURL}</label>
          <input type="text" id="photoUrl" name="photoUrl" placeholder="Photo URL" className="EditAccount__form-input input-email"/>
          <picture className="EditAccount__photoContainer">
            <img src={user.photoURL} className="EditAccount__userImg"/>
          </picture>
        </div>

        <input onClick={saveProfileChanges} type="button" value="Save" className="EditAccount-primary-button login-button"/>
      </form>
    </div>
  </div>
  );
}

export { EditAccount };