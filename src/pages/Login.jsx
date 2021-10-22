import React from "react";
import '../styles/Login.scss'
import logo from '../assets/logos/logo_yard_sale.svg'

const Login = () => {
  return (
    <div className="login">
    <div className="form-container">
      <img src={logo} alt="logo" className="logo"/>

      <form action="/" className="form">
        <label htmlFor="email" className="label">Email address</label>
        <input autoComplete="username" type="text" id="email" placeholder="platzi@example.cm" className="input input-email"/>

        <label htmlFor="password" className="label">Password</label>
        <input autoComplete="current-password" type="password" id="password" placeholder="*********" className="input input-password"/>

        <input type="submit" value="Log in" className="primary-button login-button"/>
        <a href="/">Forgot my password</a>
      </form>

      <button className="secondary-button signup-button">Sign up</button>
    </div>
  </div>
  );
}
export { Login };