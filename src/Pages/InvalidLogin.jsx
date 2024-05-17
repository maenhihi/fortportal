import React from "react";
import { FaThumbsDown } from "react-icons/fa";
import { useNavigate } from "react-router-dom";


function InvalidLogin() {
    const navigate = useNavigate();

  return (
    <div id="ValidLogin__wrapper">
      <div className="thumb--container">
        <div className="thumb--wrapper">
          <FaThumbsDown className="red" />
        </div>
      </div>
      <div className="valid__login-header--wrapper">
        <h1 className="ValidLogin--header">
          Oops! It seems there was an issue with your login credentials. Please
          double-check your username and password and try again.
        </h1>
        <button className="return__button" onClick={() => {
          navigate("/LogInPage");
        }}>Back to Login!</button>
      </div>
    
    </div>
  );
}

export default InvalidLogin;
