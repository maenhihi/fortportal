import React from "react";
import { FaThumbsUp } from "react-icons/fa";
import "../Styles/LoginConfirm.css";

function ValidLogIn() {
  return (
    <>
      <div id="ValidLogin__wrapper">
        <div className="thumb--container">
          <div className="thumb--wrapper">
            <FaThumbsUp className="thumb-icon" />
          </div>
        </div>
        <div className="valid__login-header--wrapper">
          <h1 className="ValidLogin--header">
            Thank you, you have successfully Logged In!
          </h1>
        </div>
      </div>
    </>
  );
}

export default ValidLogIn;
