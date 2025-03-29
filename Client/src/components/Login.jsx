import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router";
import '../App.css'
const Login = ({ setshowlogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
let navigate=useNavigate();
  const handleLogin = async () => {
    if (!username || !password) {
      toast.error("Both fields are required!", { position: "top-center" });
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("http://localhost:5000/users/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        toast.error(data.error || "Invalid credentials!", { position: "top-center" });
      } else {
        localStorage.setItem("token", data.token);
        localStorage.setItem("role", data.role);
        toast.success("Login successful!", { position: "top-center" });

        setTimeout(() => {
          navigate('/LandingPage');
        }, 1000);
      }
    } catch (err) {
      toast.error("Server error! Please try again later.", { position: "top-center" });
    }

    setLoading(false);
  };

  return (
    <div className=" login-main-container">
      <ToastContainer position="top-center" autoClose={3000} />
      
      <div className="login-container">
        <h1 className="facebook-logo">InkSight</h1>
        <h2 className="login-title">Log in to InkSight</h2>

        <input
          type="text"
          placeholder="Username"
          className="input-box"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
          disabled={loading}
        />

        <input
          type="password"
          placeholder="Password"
          className="input-box "
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          disabled={loading}
        />

        <button className="login-button" onClick={handleLogin} disabled={loading}>
          {loading ? "Logging in..." : "Log in"}
        </button>

        <div className="login-footer">
          <button className="footer-p" onClick={() => setshowlogin(false)} disabled={loading}>
            New User? Signup to InkSight
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
