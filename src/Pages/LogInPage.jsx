import React, { useState } from "react";
import "../Styles/LogInPage.css";
import { useNavigate } from "react-router-dom";

export const LogInPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const fetchLoginCredentials = async (login_user, login_password) => {
    try {
      const res = await fetch("http://localhost:8000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ login_user, login_password }),
      });

      if (!res.ok) {
        if (res.status === 404) {
          throw new Error("Incorrect username or password");
        } else {
          throw new Error("Failed to fetch login credentials");
        }
      }

      const data = await res.json();
      return data;
    } catch (error) {
      console.error("Error fetching login credentials:", error);
      throw error;
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError("");

    try {
      const response = await fetchLoginCredentials(username, password);
      if (response.message === "Login successful") {
        navigate("/ValidLogin");
      } else {
        throw new Error("Invalid username or password");
      }
    } catch (error) {
      setError(error.message);
      navigate("/InvalidLogin");
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
            placeholder="Email"
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
        {error && <p className="error">{error}</p>}
      </div>
    </section>
  );
};
