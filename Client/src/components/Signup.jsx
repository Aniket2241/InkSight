// FacebookLogin.js
import React, { useState } from "react";

const Signup = ({showlogin,setshowlogin}) => {
  const [userType, setUserType] = useState("visitor");

  return (
    <div className="login-main-container">
      <div className="login-container">
        <h1 className="facebook-logo">InkSight</h1>
        <h2 className="login-title">Sign Up to InkSight</h2>

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

        <div className="radio-group">
          <label >Choose Your Role :</label>
          <label>
            <input
              type="radio"
              name="userType"
              value="author"
              checked={userType === "author"}
              onChange={() => setUserType("author")}
            />
            Author 
          </label>
          <label>
            <input
              type="radio"
              name="userType"
              value="visitor"
              checked={userType === "visitor"}
              onChange={() => setUserType("visitor")}
            />
            Visitor
          </label>
        </div>

        <button className="login-button">Sign Up</button>

        <div className="login-footer"> 
          <button className="footer-p "onClick={()=>setshowlogin(true)}>Login To InkSight</button>
        </div>
      </div>
    </div>
  );
};

export default Signup;