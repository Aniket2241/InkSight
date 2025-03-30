import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Signup = ({ showlogin, setshowlogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [userType, setUserType] = useState("visitor");
  const [loading, setLoading] = useState(false);

  const handleSignup = async () => {
    setLoading(true);

    if (!username || !password) {
      toast.error("All fields are required!",{position:"top-center"});
      setLoading(false);
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/users/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password, role: userType }),
      });

      const data = await response.json();

      if (!response.ok) {
        toast.error(data.error || "Signup failed! Try again.",{position:"top-center"});
      } else {
        toast.success("Signup successful! Please log in.",{position:"top-center",autoClose:2000,});
        setTimeout(() => {
          
          setshowlogin(true);
        }, 2000);
      }
    } catch (err) {
      toast.error("Server error! Please try again later.",{position:"top-center"});
    }

    setLoading(false);
  };

  return (
    <div className="login-main-container">
      <div className="login-container">
        <h1 className="facebook-logo">InkSight</h1>
        <h2 className="login-title text-bold">Sign Up</h2>

        <input
          type="text"
          placeholder="Username"
          className="input-box"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Password"
          className="input-box"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <div className="radio-group">
          <label>Choose Your Role:</label>
          <label>
            <input
              type="radio"
              name="userType"
              value="Author"
              checked={userType === "Author"}
              onChange={() => setUserType("Author")}
            />
            Author
          </label>
          <label>
            <input
              type="radio"
              name="userType"
              value="Visitor"
              checked={userType === "Visitor"}
              onChange={() => setUserType("Visitor")}
            />
            Visitor
          </label>
        </div>

        <button className="login-button" onClick={handleSignup} disabled={loading}>
          {loading ? "Signing up..." : "Sign Up"}
        </button>

        <div className="login-footer">
          <button className="footer-p">
            Already registered ? Login here
          </button>
        </div>
      </div>
    </div>
  );
};

export default Signup;