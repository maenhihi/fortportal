import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import MapPage from "./Pages/MapPage";
import HomePage from "./Pages/HomePage";
import MapSearchBar from "./Components/MapSearchBar";


function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/MapPage" element={<MapPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  
  );
}

export default App;
