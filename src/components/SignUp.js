import React, { useRef, useState, useEffect } from "react";
import "./SignUp.css";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import CircularProgress from "@mui/material/CircularProgress";

const SignUp = ({
  semail,
  spassword,
  signUpemail,
  signUppassword,
  handleSignUpPassword,
  handleSignUpEmail,
  loading,
}) => {
  const { signUp, currentUser } = useAuth();
  const [error, setError] = useState("");
  // const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    JSON.stringify(currentUser);
    // setLoading(true);
  }, []);

  const handleEmail = (e) => {
    setEmail(e.target.value);
    console.log(email);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
    console.log(password);
    sessionStorage.setItem("signup-password", e.target.value);
  };
  const handleConfirmPassword = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    console.log("function call");
    console.log("Email", semail);
    console.log("Password", spassword);

    e.preventDefault();

    try {
      if (spassword === confirmPassword) {
        console.log("trying");
        // await signUp(email, password);
        await signUp(semail, spassword, signUppassword, signUpemail);
        navigate("/");
      } else {
        setError("Password do not match");
        alert(error);
        console.log(error);
      }
    } catch (err) {
      console.log(error);
      // alert(err);

      // setLoading(false);
    }

    // setError("Failed to create an account");
  };
  return (
    <div className="signUp-card">
      {loading && <CircularProgress />}
      <div className="card-container">
        <div className="form__title">
          <h1 className="form-text">Sign Up</h1>
          {/* {currentUser && currentUser.email} */}
        </div>
        <form onSubmit={handleSubmit} className="signUp-form">
          <label className="form__label">
            <h5 className="label__text">Email</h5>
            <input
              className="form__input"
              type="text"
              required
              // value={email}
              value={semail || signUpemail}
              onChange={handleSignUpEmail}
            />
          </label>

          <label className="form__label">
            <h5 className="label__text">Password</h5>

            <input
              className="form__input"
              type="password"
              required
              // value={password}
              value={spassword || signUppassword}
              onChange={handleSignUpPassword}
            />
          </label>
          <label className="form__label">
            <h5 className="label__text">Password Confirmation</h5>

            <input
              className="form__input"
              type="password"
              required
              value={confirmPassword}
              onChange={handleConfirmPassword}
            />
          </label>
          <button
            onSubmit={handleSubmit}
            disabled={loading}
            style={{ width: "350px" }}
            className="btn-hover2 color2 form-button"
            type="submit"
          >
            Sign Up
          </button>
        </form>
        <div className="form-bottom-container">
          <p className="form__bottom">
            Already have an account?{" "}
            <Link to="/login">
              <span>Login</span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
