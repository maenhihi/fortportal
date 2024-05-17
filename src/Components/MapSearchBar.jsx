import React, { useState } from "react";
import { FaSearch, FaPhone, FaMapPin } from "react-icons/fa";
import Stars from "./Stars";

function MapSearchBar() {
  const [selectedResultId, setSelectedResultId] = useState(null);
  const [selectedResultDetails, setSelectedResultDetails] = useState(null);
  const [results, setResults] = useState([]);
  const [input, setInput] = useState("");
  const [showResults, setShowResults] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const fetchData = (value) => {
    fetch("http://localhost:8000/poi/")
      .then((res) =>
        res.json().then((json) => {
          console.log(json);
          const filteredResults = json.filter((user) => {
            return (
              user &&
              user.name &&
              user.name.toLowerCase().includes(value)
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

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
    const sidebar = document.querySelector('.sidebar');
    const button = document.querySelector('.arrow-btn');
    if (sidebar && button) {
      sidebar.style.display = sidebarOpen ? 'none' : 'block';
      // button.style.marginLeft = sidebarOpen ? '0px' : '400px';
    }
  }

  return (
    <div className="search__bar--wrapper">
      <div className="search__bar--container">
        <div className="input__wrapper">
          <FaSearch id="search-icon" />
          <button className='arrow-btn' onClick={toggleSidebar}>
          <input
            placeholder="Explore Fort Portal"
            value={input}
            onChange={(e) => handleChange(e.target.value)}
          /> </button>
          
        </div>
         
         <div className='sidebar'>
           <div className='sidebar-content'>
        
     
             {showResults && (
               <div className="results__list">
                 {results.map((result) => (
                   <div
                     className={`search__result ${
                       selectedResultId === result._id ? "selected" : ""
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
                 <img src="https://t4.ftcdn.net/jpg/00/09/21/15/360_F_9211505_d4hxfNtPeTfgt7AeGmoO7u79P2hwxkoQ.jpg" alt="" className="map__image" />

                 <div className="side__pop --bold --header">
                   {selectedResultDetails.name}
                 </div>
                 <div className="side__pop --bold">
                   <Stars />
                 </div>
                 <div className="side__pop --category bottom--margin --bold">
                   {selectedResultDetails.category}
                 </div>
                 <div className="side__pop bottom--margin"><FaMapPin id="MapPin-icon" color="rgb(49, 143, 154)" />  {selectedResultDetails.address}</div>

                 <div className="side__pop --bold bottom--margin"><FaPhone id="phone-icon" color="rgb(49, 143, 154)" />   {selectedResultDetails.phone_number}</div>
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
  );
}

export default MapSearchBar;
