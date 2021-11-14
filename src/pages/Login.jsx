import React, { useRef } from "react";
import '../styles/Login.scss'
import logo from '../assets/logos/logo_yard_sale.svg'

const Login = () => {
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
      console.group();
      console.log(data);
      console.log("datos validos")
    }else {
      console.log("email invalido");
    }
  }
  return (
    <div className="login-login">
    <div className="form-container">
      <img src={logo} alt="logo" className="logo"/>

      <form action="/" className="form" ref={formulario}>
        <label htmlFor="email" className="label">Email address</label>
        <input autoComplete="username" name="email" type="text" id="email" placeholder="platzi@example.cm" className="input input-email"/>

        <label htmlFor="password"  className="label">Password</label>
        <input autoComplete="current-password" name="password" type="password" id="password" placeholder="*********" className="input input-password"/>

        <button 
          onClick={handleSubmit}
          className="primary-button login-button">
          login
        </button>
        <a href="/">Forgot my password</a>
      </form>

      <button className="secondary-button signup-button">Sign up</button>
    </div>
  </div>
  );
}
export { Login };