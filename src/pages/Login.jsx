import React, { useContext, useRef, useEffect } from "react";
import '../styles/Login.scss'
import logo from '../assets/logos/logo_yard_sale.svg'
import {authContext} from '../context/AuthContext.js'
import { Link, useHistory, useLocation } from "react-router-dom";
const Login = () => {
  
  let { signin, user, error } = useContext(authContext)
  let history = useHistory();
  let location = useLocation();
  let { from } = location.state || { from: { pathname: "/React-Shop-Ecomerce" } };

  const formulario = useRef(null);
  const regex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;

  const handleSubmit = (ev) => {
    ev.preventDefault();
    const formData = new FormData(formulario.current);//current para acceder a los datos
    const data = {
      username: formData.get('email'),
      password: formData.get('password')
    }
    console.log(data)
    if(regex.test(data.username)){
      const changePath = () => history.push(from)
      signin(changePath, data.username, data.password)
     
    }else {
      console.log("email invalido");
    }
  }
  useEffect(() => {
    if (user) {
        history.push("/");
    }
}, [history, user]);
  return (
    <div className="login-login">
    <div className="form-container">
      <img src={logo} alt="logo" className="logo"/>

      <form  className="form" ref={formulario}>
        <label htmlFor="email" className="label">Email address</label>
        <input autoComplete="username" name="email" type="text" id="email" placeholder="platzi@example.cm" className="input input-email"/>

        <label htmlFor="password"  className="label">Password</label>
        <input autoComplete="current-password" name="password" type="password" id="password" placeholder="*********" className="input input-password"/>

        <button 
          onClick={handleSubmit}
          className="primary-button login-button">
          login
        </button>
        <Link to="/React-Shop-Ecomerce/recoveryPassword">Forgot my password</Link>
      </form>

      <Link to="/React-Shop-Ecomerce/createAccount" className="secondary-button signup-button">Sign up</Link>
    </div>
    {error && (<p>Error</p>)}
  </div>
  );
}
export { Login };