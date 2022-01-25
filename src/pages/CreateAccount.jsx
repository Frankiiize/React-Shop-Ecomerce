import React from "react";
import '../styles/createAccount.scss'

const CreateAccountPage = () => {
  return(
    <div className="CreateAccount">
    <div className="CreateAccount-form-container">
      <h1 className="title">My account</h1>

      <form action="/" className="CreateAccount-form">
        <div>
          <label htmlFor="name" className="label">Name</label>
          <input type="text" id="name" placeholder="Teff" className="CreateAccount-input input-name"/>

          <label htmlFor="email" className="label">Email</label>
          <input type="text" id="email" placeholder="platzi@example.com" className="CreateAccount-input input-email"/>

          <label htmlFor="password" className="label">Password</label>
          <input type="password" id="password" placeholder="*********" className="CreateAccount-input input-password"/>
        </div>

        <input type="submit" value="Create" className="CreateAccount-primary-button login-button"/>
      </form>
    </div>
  </div>
  );
}

export default () =>{
  return(
    <CreateAccountPage />
  )
}