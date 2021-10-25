import React from "react";
import '../styles/MyAccount.scss';

const InfoAccount = ({handleEdit}) => {
  return(
    <div className="MyAccount">
    <div className="MyAccount__form-container">
      <h1 className="MyAccount-title">My account</h1>

      <form action="/" className="MyAccount__form">
        <div>
          <label htmlFor="name" className="MyAccount__form-label">Name</label>
          <p className="MyAccount__form-value">Camila Yokoo</p>

          <label htmlFor="email" className="MyAccount__form-label">Email</label>
          <p className="MyAccount__form-value">camilayokoo@gmail.com</p>

          <label htmlFor="password" className="MyAccount__form-label">Password</label>
          <p className="MyAccount__form-value">*********</p>
        </div>

        <input onClick={handleEdit} type="submit" value="Edit" className="secondary-button login-button"/>
      </form>
    </div>
  </div>
  );
}

export { InfoAccount };