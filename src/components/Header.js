import React, { useState, useEffect } from "react";
import "./Header.css";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Header = () => {
  const { currentUser, logout } = useAuth();
  const [error, setError] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    if (currentUser) {
      console.log(currentUser.email);
    }
  }, [currentUser]);
  const handleLogout = async () => {
    setError("");
    try {
      await logout();
      navigate("/login");
    } catch {
      setError("Failed to logout");
    }
  };
  return (
    <div className="header">
      <div className="header__left">
        <Link to="/">
          <h1 className="header__title">NEWSDAY.IO</h1>
        </Link>
        {/* <Link to="/about">
          <h3 className="header__item">About Us </h3>
        </Link>
        <Link to="/contact">
          <h3 className="header__item">Contact Us</h3>
        </Link> */}
        <h3 className="header__item">{currentUser && currentUser.email}</h3>
      </div>
      {!currentUser ? (
        <div className="header__right">
          <Link to="/login">
            <button className="btn-hover2 color2">Login</button>
          </Link>
          <Link to="/signUp">
            <p className="header__button">Sign Up</p>
          </Link>
        </div>
      ) : (
        <div className="header__right">
          <button onClick={handleLogout} className="btn-hover2 color2">
            Logout
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
