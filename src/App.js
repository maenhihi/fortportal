import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import MapPage from "./Pages/MapPage";
import HomePage from "./Pages/HomePage";
import { LogInPage } from "./Pages/LogInPage";
import ValidLogin from "./Pages/ValidLogin";
import InvalidLogin from "./Pages/InvalidLogin";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/MapPage" element={<MapPage />} />
            <Route path="/LogInPage" element={<LogInPage />} />
            <Route path="/ValidLogin" element={<ValidLogin />} />
            <Route path="/InvalidLogin" element={<InvalidLogin />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;