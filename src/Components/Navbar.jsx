import React from "react";
import "../Styles/Navbar.css";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  return (
    <div className="Navbar">
      
      <nav-list>
        <list-display><list-text onClick={() => {navigate("/");}}>Home</list-text></list-display>
        {/* <list-display><list-text onClick={() => {navigate("/Features");}}>Features</list-text></list-display> */}
        <list-display><list-text> <a href="#features" className="navbar__features--button">Features</a></list-text></list-display>

        <list-display><list-text onClick={() => {navigate("/MapPage");}}>Explore Map</list-text></list-display>

      </nav-list>
      <button className="btn btn-outline-primary btn-rounded"
        onClick={() => {
          navigate("/LogInPage");
        }}
      >
        <div className="btn-text">Login</div>
      </button>
    </div>
  );
}

export default Navbar;
