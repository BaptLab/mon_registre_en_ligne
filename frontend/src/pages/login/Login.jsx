import React, { useState } from "react";
import Footer from "../../layout/Footer/Footer";
import Header from "../../layout/header/Header";
import "./login.css";
import { login, register } from "../../api/auth";
import { setUser } from "../../api/apiUtils";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] =
    useState("");
  const [
    registerPasswordConfirmation,
    setRegisterPasswordConfirmation,
  ] = useState("");

  const navigate = useNavigate();

  const handleLoginSubmit = async (event) => {
    event.preventDefault();
    try {
      const data = await login(loginEmail, loginPassword);
      setUser(data);
      navigate("/dashboard"); // Navigate to the dashboard

      console.log(data); // Handle the response data as needed
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  const handleRegisterSubmit = async (event) => {
    event.preventDefault();
    if (registerPassword !== registerPasswordConfirmation) {
      alert("Passwords do not match");
      return;
    }
    try {
      const data = await register(
        registerEmail,
        registerPassword
      );
      console.log(data); // Handle the response data as needed
    } catch (error) {
      console.error("Registration failed:", error);
    }
  };

  return (
    <>
      <Header />
      <main id="login-page">
        <form id="login-form" onSubmit={handleLoginSubmit}>
          <div className="form-input">
            <label htmlFor="login-email">
              Adresse mail
            </label>
            <input
              type="email"
              name="email"
              id="login-email"
              required
              placeholder="jeandupont@gmail.com"
              value={loginEmail}
              onChange={(e) =>
                setLoginEmail(e.target.value)
              }
            />
          </div>
          <div className="form-input">
            <label htmlFor="login-password">
              Mot de passe
            </label>
            <input
              type="password"
              name="password"
              id="login-password"
              required
              placeholder="***********"
              value={loginPassword}
              onChange={(e) =>
                setLoginPassword(e.target.value)
              }
            />
          </div>
          <div className="form-input">
            <input type="submit" value="Submit!" />
          </div>
        </form>
        <form
          id="register-form"
          onSubmit={handleRegisterSubmit}
        >
          <div className="form-input">
            <label htmlFor="register-email">
              Adresse mail
            </label>
            <input
              type="email"
              name="email"
              id="register-email"
              required
              placeholder="jeandupont@gmail.com"
              value={registerEmail}
              onChange={(e) =>
                setRegisterEmail(e.target.value)
              }
            />
          </div>
          <div className="form-input">
            <label htmlFor="register-password">
              Mot de passe
            </label>
            <input
              type="password"
              name="password"
              id="register-password"
              required
              placeholder="***********"
              value={registerPassword}
              onChange={(e) =>
                setRegisterPassword(e.target.value)
              }
            />
          </div>
          <div className="form-input">
            <label htmlFor="register-password-confirmation">
              Confirmation du mot de passe
            </label>
            <input
              type="password"
              name="password-confirmation"
              id="register-password-confirmation"
              required
              placeholder="***********"
              value={registerPasswordConfirmation}
              onChange={(e) =>
                setRegisterPasswordConfirmation(
                  e.target.value
                )
              }
            />
          </div>
          <div className="form-input">
            <input type="submit" value="Submit!" />
          </div>
        </form>
      </main>
      <Footer />
    </>
  );
};

export default Login;
