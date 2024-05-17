import React, { useState } from "react";
import { FaSearch, FaPhone, FaMapPin } from "react-icons/fa";
import Stars from "../Components/Stars";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  ZoomControl,
} from "react-leaflet";
import { Icon } from "leaflet"; // Import leaflet for custom icon
import "leaflet/dist/leaflet.css";
import "../Styles/MapPage.css";

function MapPage() {
  const [selectedResultDetails, setSelectedResultDetails] = useState(null);
  const [results, setResults] = useState([]);
  const [input, setInput] = useState("");
  const [showResults, setShowResults] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const customIcon = new Icon({
    iconUrl: "https://cdn-icons-png.flaticon.com/512/447/447031.png",
    iconSize: [38, 38],
  });

  //fetching data

  const fetchData = (value) => {
    fetch("http://localhost:8000/poi/").then((res) =>
      res.json().then((json) => {
        const filteredResults = json.filter((user) => {
          return (
            user &&
            user.name &&
            user.name.toLowerCase().includes(value.toLowerCase())
          );
        });
        setResults(filteredResults);
        setShowResults(true);
      })
    );
  };

  const handleChange = (value) => {
    setInput(value);
    fetchData(value);
  };

  const handleResultClick = (result) => {
    setSelectedResultDetails(result);
    setShowResults(false);
  };

  //toggling searchbar modal

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
    const sidebar = document.querySelector(".sidebar");
    const button = document.querySelector(".arrow-btn");
    if (sidebar && button) {
      sidebar.style.display = sidebarOpen ? "none" : "block";
    }
  };



  //logic to output the searchbar, map, and POI pop-ups
  return (
    <>
     

      <div className="search__bar--wrapper">
        <div className="search__bar--container">
          <div className="input__wrapper">
            <FaSearch id="search-icon" />
            <button className="arrow-btn" onClick={toggleSidebar}>
              <input
                placeholder="Explore Fort Portal"
                value={input}
                onChange={(e) => handleChange(e.target.value)}
              />
            </button>
          </div>

          <div className="sidebar">
            <div className="sidebar-content">
              {showResults && (
                <div className="results__list">
                  {results.map((result) => (
                    <div
                      className={`search__result ${
                        selectedResultDetails &&
                        selectedResultDetails._id === result._id
                          ? "selected"
                          : ""
                      }`}
                      key={result._id}
                      onClick={() => handleResultClick(result)}
                    >
                      {result.name} [{result.category}]
                    </div>
                  ))}
                </div>
              )}

              {selectedResultDetails && (
                <div className="side__pop-up--wrapper">
                  <img
                    src="https://t4.ftcdn.net/jpg/00/09/21/15/360_F_9211505_d4hxfNtPeTfgt7AeGmoO7u79P2hwxkoQ.jpg"
                    alt=""
                    className="map__image"
                  />

                  <div className="side__pop --bold --header">
                    {selectedResultDetails.name}
                  </div>
                  <div className="side__pop --bold">
                    <Stars />
                  </div>
                  <div className="side__pop --category bottom--margin --bold">
                    {selectedResultDetails.category}
                  </div>
                  <div className="side__pop bottom--margin">
                    <FaMapPin id="MapPin-icon" color="rgb(49, 143, 154)" />{" "}
                    {selectedResultDetails.address}
                  </div>

                  <div className="side__pop --bold bottom--margin">
                    <FaPhone id="phone-icon" color="rgb(49, 143, 154)" />{" "}
                    {selectedResultDetails.phone_number}
                  </div>
                  <div className="side__pop --price --bold bottom--margin">
                    {selectedResultDetails.price}
                  </div>
                  <div className="side__pop --description">
                    {selectedResultDetails.description}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <MapContainer
        center={[0.654444, 30.274444]}
        zoom={13}
        dragging={true}
        autoPanOnFocus={true}
        zoomControl={false}
      >
        <TileLayer
          attribution='&copy; <a href="
            https://www.openstreetmap.org/copyright
            ">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <ZoomControl position="topright" className="zoom-control-container" />

        {selectedResultDetails && (
          <Marker
            position={selectedResultDetails.coordinates}
            icon={customIcon}
          >
            <Popup>{selectedResultDetails.name}</Popup>
          </Marker>
        )}
      </MapContainer>
    </>
  );
}

export default MapPage;
