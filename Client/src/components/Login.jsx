
import React, { useState } from "react";

const Login = ({showlogin,setshowlogin}) => {
  const [userType, setUserType] = useState("visitor");

  return (
    <div className="login-main-container">
      <div className="login-container">
        <h1 className="facebook-logo">InkSight</h1>
        <h2 className="login-title">Log in to InkSight</h2>

        <input
          type="text"
          placeholder="UserName"
          className="input-box" required
        />

        <input
          type="password"
          placeholder="Password"
          className="input-box" required
        />

    

        <button className="login-button">Log in</button>

        <div className="login-footer"> 
         <button className="footer-p" onClick={()=>setshowlogin(false)}>New User? Signup to InkSight</button>
        </div>
      </div>
    </div>
  );
};

export default Login;