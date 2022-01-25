import React from "react";
import '../styles/CreatePassword.scss';

import logo from '../assets/logos/logo_yard_sale.svg'

const NewPasswordPage = () => {
  return(
    <div className="newPasswordLogin">
    <div className="newPasswordForm-container">
      <img src={logo} alt="logo" className="logo" />

      <h1 className="newPasswordForm-title">Create a new password</h1>
      <p className="newPasswordForm-subtitle">Enter a new passwrd for yue account</p>

      <form action="/" className="form">
        <label htmlFor="username" ></label>
        <input type="text" autoComplete="username" readOnly="username" className="input input-username"  />
        <label htmlFor="password" className="label">Password</label>
        <input autoComplete="new-password" type="password" id="password" placeholder="*********" className="input input-password"/>

        <label htmlFor="new-password" className="label">Password</label>
        <input autoComplete="new-password" type="password" id="new-password" placeholder="*********" className="input input-password"/>

        <input type="submit" value="Confirm" className="primary-button login-button"/>
      </form>
    </div>
  </div>
  );
}

export default () => {
  return(
    <NewPasswordPage />
  )
}