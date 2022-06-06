import React, { useState, useEffect } from "react";
import alanBtn from "@alan-ai/alan-sdk-web";
import NewsCards from "./components/NewsCards";
import classNames from "classnames";
import useStyles from "./appstyle";
import wordsToNumbers from "words-to-numbers";
import Header from "./components/Header";
import About from "./components/About";
import Contact from "./components/Contact";
import CircularProgress from "@mui/material/CircularProgress";

import "./App.css";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useNavigate,
  useHistory,
} from "react-router-dom";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import { AuthProvider } from "./context/AuthContext";
import { useAuth } from "./context/AuthContext";

const App = () => {
  const [newsArticles, setNewsArticles] = useState([]);
  const [activeArticle, setActiveArticle] = useState(-1);
  const classes = useStyles();
  const { currentUser } = useAuth();
  const [index, setIndex] = useState(null);
  const [loginemail, setLoginEmail] = useState("");
  const [loginpassword, setLoginPassword] = useState("");
  const [lemail, setLEmail] = useState("");
  const [lpassword, setLPassword] = useState("");
  const [semail, setSEmail] = useState("");
  const [spassword, setSPassword] = useState("");
  const [sessionloginEmail, setSessionLoginEmail] = useState("");
  const [sessionloginPassword, setSessionLoginPassword] = useState("");
  const [signUpemail, setSignUpEmail] = useState("");
  const [signUppassword, setSignUpPassword] = useState("");
  const [work, setWork] = useState(-1);
  const [work2, setWork2] = useState();
  const [work3, setWork3] = useState();
  const [work4, setWork4] = useState();
  const [loading, setLoading] = useState(false);
  const [sessionEmail, setSessionEmail] = useState("");
  const [sessionPassword, setSessionPassword] = useState("");
  const [signEmail, setSignEmail] = useState("");
  const [signPassword, setSignPassword] = useState("");

  const { logout, login, signUp } = useAuth();
  const handleLoginPassword = (e) => {
    setLPassword(e.target.value);
    console.log(e.target.value);
    sessionStorage.setItem("login-password", e.target.value);
  };
  const handleLoginEmail = (e) => {
    setLEmail(e.target.value);
    console.log(e.target.value);
    sessionStorage.setItem("login-email", e.target.value);
  };
  const handleSignUpPassword = (e) => {
    setSPassword(e.target.value);
    console.log(e.target.value);
    setSignPassword(spassword);
    sessionStorage.setItem("signup-password", e.target.value);
  };
  const handleSignUpEmail = (e) => {
    setSEmail(e.target.value);
    console.log(e.target.value);
    setSignEmail(semail);
    sessionStorage.setItem("signup-email", e.target.value);
  };
  const handleLogout = async () => {
    try {
      await logout();
    } catch (err) {
      console.log(err);
    }
  };
  const handleSignUp = async () => {
    console.log(semail);
    console.log(spassword);
    // e.preventDefault();

    console.log("Signup function");
    try {
      console.log("email", sessionEmail);
      console.log("password", sessionPassword);
      // await signUp(sessionEmail, sessionPassword);
      var email_value = sessionStorage.getItem("signup-email");
      var password_value = sessionStorage.getItem("signup-password");
      await signUp(email_value, password_value);
      window.location.href = "/";
    } catch (err) {
      console.log("email", email_value);
      console.log("password", password_value);
      console.log(err);
      // alert(err);
    }
  };

  const handlelogin = async () => {
    console.log("function call");
    console.log("login email", lemail);
    try {
      var email_lvalue = sessionStorage.getItem("login-email");
      var password_lvalue = sessionStorage.getItem("login-password");
      await login(email_lvalue, password_lvalue);
      window.location.href = "/";
    } catch (err) {
      console.log(err);
      alert(err);
    }
  };

  useEffect(() => {
    setLoading(true);
    alanBtn({
      key: "2d7b662254825de86a88b71c612414ce2e956eca572e1d8b807a3e2338fdd0dc/stage",
      onCommand: ({ command, articles, number, faqId, data, workId }) => {
        if (command === "newHeadlines") {
          if (currentUser) {
            setNewsArticles(articles);
            setActiveArticle(-1);
          } else {
            window.location.href = "/login";
          }
        } else if (command === "highlight") {
          setActiveArticle((prevActiveArticle) => prevActiveArticle + 1);
        } else if (command === "open") {
          const parsedNumber =
            number.length > 2
              ? wordsToNumbers(number, { fuzzy: true })
              : number;
          const article = articles[parsedNumber - 1];

          if (parsedNumber > articles.length) {
            alanBtn().playText("Please try that again...");
          } else if (article) {
            window.open(article.url, "_blank");
            alanBtn().playText("Opening...");
          } else {
            alanBtn().playText("Please try that again...");
          }
        } else if (command === "gotoFaq") {
          setIndex(faqId);
          const scrollHeight = document.body.scrollHeight;
          window.scrollTo(0, scrollHeight);
        } else if (command === "loginPage") {
          window.location.href = "/login";
          console.log("login");
        } else if (command === "SignUpPage") {
          window.location.href = "/signUp";
        } else if (command === "logout") {
          handleLogout();
        } else if (command === "home") {
          window.location.href = "/";
        } else if (command === "loginEmail") {
          setLoginEmail(data);
        } else if (command === "loginPassword") {
          setLoginPassword(data);
        } else if (command === "loggingIn") {
          handlelogin();

          // window.location.href = "/";
        } else if (command === "goBack") {
          window.location.href = "/";
        } else if (command === "scrolltoTop") {
          window.scrollTo(0, 0);
        } else if (command === "scrolltoBottom") {
          const scrollHeight = document.body.scrollHeight;
          window.scrollTo(0, scrollHeight);
        } else if (command === "about") {
          window.location.href = "/about";
        } else if (command === "contact") {
          window.location.href = "/contact";
        } else if (command === "benefits") {
          window.scrollTo(0, 700);
        } else if (command === "work") {
          setWork(workId);
          console.log(workId);

          window.scrollTo(0, 700);
        } else if (command === "signUp") {
          handleSignUp();
        } else if (command === "signUpEmail") {
          setSignUpEmail(data);
        } else if (command === "signUpPassword") {
          setSignUpPassword(data);
        }
      },
    });
    setLoading(false);
  }, []);
  useEffect(() => {
    console.log("login email", lemail);
    console.log("login password", lpassword);
    console.log(work);
    console.log(work);

    // setSessionEmail(email_value);
    // setSessionPassword(password_value);
    // console.log(password_value);

    // console.log(email_value);
  }, []);
  return (
    // <AuthProvider>
    <Router>
      <div className="app">
        <Header />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <NewsCards
                articles={newsArticles}
                activeArticle={activeArticle}
                index={index}
                setIndex={setIndex}
                work={work}
                // work2={work2}
                // work3={work3}
                // work4={work4}
              />
            }
          ></Route>

          <Route
            exact
            path="/login"
            element={
              <Login
                loginemail={loginemail}
                lemail={lemail}
                lpassword={lpassword}
                loginpassword={loginpassword}
                handleLoginPassword={handleLoginPassword}
                handleLoginEmail={handleLoginEmail}
              />
            }
          ></Route>

          <Route
            exact
            path="/signUp"
            element={
              <SignUp
                signUpemail={signUpemail}
                signUppassword={signUppassword}
                semail={semail}
                spassword={spassword}
                handleSignUpPassword={handleSignUpPassword}
                handleSignUpEmail={handleSignUpEmail}
                loading={loading}
              />
            }
          ></Route>
          <Route exact path="/about" element={<About />}></Route>
          <Route exact path="/contact" element={<Contact />}></Route>
        </Routes>
      </div>
    </Router>
    // </AuthProvider>
  );
};

export default App;
