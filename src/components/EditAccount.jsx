import React from "react";


const EditAccount = ({handleEdit, user}) => {
  return(
    <div className="EditAccount">
    <div className="EditAccount__form-container">
      <h1 className="EditAccount__form-title">My account</h1>

      <form action="/" className="EditAccount__form">
        <div>
          <label htmlFor="name" className="EditAccount__form-label">Name</label>
          <input type="text" id="name" placeholder={!user.displayName ? user.email.split("@")[0]  : user.displayName} className="EditAccount__form-input input-name"/>

          <label htmlFor="email" className="EditAccount__form-label">{user.email}</label>
          <input type="text" id="email" placeholder="platzi@example.com" className="EditAccount__form-input input-email"/>

          <label htmlFor="password" className="EditAccount__form-label">Password</label>
          <input type="password" id="password" placeholder="*********" className="EditAccount__form-input input-password"/>
        </div>

        <input onClick={handleEdit} type="submit" value="Save" className="EditAccount-primary-button login-button"/>
      </form>
    </div>
  </div>
  );
}

export { EditAccount };