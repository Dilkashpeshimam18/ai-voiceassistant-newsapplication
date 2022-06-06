import React, { useState, useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

function Login({
  loginemail,
  loginpassword,
  lemail,
  lpassword,
  handleLoginPassword,
  handleLoginEmail,
}) {
  const { login, currentUser } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleEmail = (e) => {
    setEmail(e.target.value);
    console.log(email);
    sessionStorage.setItem("loginEmail", email);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
    console.log(password);
    sessionStorage.setItem("loginPassword", password);
  };

  useEffect(() => {}, []);

  const handleSubmit = async (e) => {
    console.log("function call");
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await login(lemail, lpassword, loginemail, loginpassword);
      navigate("/");
    } catch (err) {
      setError("Failed to login");
      alert(err);
      console.log(error);
      console.log(err);
    }
    setLoading(false);
  };

  return (
    <div style={{ height: "500px" }} className="signUp-card">
      <div className="card-container">
        <div className="form__title">
          <h1 className="form-text">Login</h1>
          {/* {currentUser && currentUser.email} */}
        </div>
        <form onSubmit={handleSubmit} className="signUp-form">
          <label className="form__label">
            <h5 className="label__text">Email</h5>
            <input
              className="form__input"
              type="email"
              required
              value={loginemail || lemail}
              onChange={handleLoginEmail}
            />
          </label>

          <label className="form__label">
            <h5 className="label__text">Password</h5>

            <input
              className="form__input"
              type="password"
              required
              value={loginpassword || lpassword}
              onChange={handleLoginPassword}
            />
          </label>

          <button
            style={{ width: "350px" }}
            className="btn-hover2 color2 form-button"
            type="submit"
            onSubmit={handleSubmit}
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
