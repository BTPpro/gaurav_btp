import React from "react";
import  Appcss from  '../App.module.css';
export default function Login() {
  return (
    <>
    <div className={Appcss.admin}>
      <button className={Appcss.admin_button}>Admin page</button>
    </div>
    <div className={Appcss.login}>
      <img
        className={Appcss.login_logo}
        src="images/college-login-logo.png"
        alt="Logo-image"
      />
      <input
        className={Appcss.input_mail}
        type="email"
        id="email"
        placeholder="College ID"
      />

      
      <input type = "password" className={Appcss.input_password} placeholder="Password"  />

      <button className={Appcss.signin_button} >
        SIGN IN
      </button>
    </div>
    </>
  );
}
