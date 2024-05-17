import React, { useState } from "react";
import "../Styles/LogInPage.css";
import { useNavigate } from "react-router-dom";

export const LogInPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const fetchLoginCredentials = async () => {
    try {
      const res = await fetch("http://localhost:8000/login");
      if (!res.ok) {
        throw new Error("Failed to fetch login credentials");
      }
      const data = await res.json();
      return data;
    } catch (error) {
      console.error("Error fetching login credentials:", error);
      throw error;
    }
  };

  const mockAuthentication = async () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        //issue here, idk what the backend data looks like
        if (username === "fort-portal" && password === "123") {
          resolve(true);
          navigate("/ValidLogin");
        } else {
          reject(new Error("Invalid username or password"));
          navigate("/InvalidLogIn");
        }
      }, 500);
    });
  };
 

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError("");
    try {
      await mockAuthentication();
    } catch (error) {
      setError(error.message);
    }
  };

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  return (
    <section id="LogInPage">
      <div className="login__modal--wrapper">
        <div className="login__header--wrapper">
          <h1 className="login__header">Login to Your Account</h1>
        </div>

        <form onSubmit={handleSubmit} className="input__text--wrapper">
          <input
            type="text"
            value={username}
            onChange={handleUsernameChange}
            placeholder="Username"
            className="login__input username__field"
          />
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
            placeholder="Password"
            className="login__input password__field"
          />
          <div className="login__button--wrapper">
            <button type="submit" className="login__button">
              Log In
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};
