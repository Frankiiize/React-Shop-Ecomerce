import React from "react";
import '../styles/CreatePassword.scss';

import logo from '../assets/logos/logo_yard_sale.svg'

const CreateNewPassword = () => {
  return(
    <div className="newPasswordLogin">
    <div className="newPasswordForm-container">
      <img src={logo} alt="logo" className="logo" />

      <h1 className="newPasswordForm-title">Create a new password</h1>
      <p className="newPasswordForm-subtitle">Enter a new passwrd for yue account</p>

      <form action="/" className="form">
        <label for="password" className="label">Password</label>
        <input type="password" id="password" placeholder="*********" className="input input-password"/>

        <label for="new-password" className="label">Password</label>
        <input type="password" id="new-password" placeholder="*********" className="input input-password"/>

        <input type="submit" value="Confirm" className="primary-button login-button"/>
      </form>
    </div>
  </div>
  );
}

export { CreateNewPassword };