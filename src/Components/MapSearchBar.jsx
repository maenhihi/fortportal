import { React, useState } from "react";
import { FaSearch } from "react-icons/fa";
import bird from "../assets/bird.jpg"

function MapSearchBar() {
  const [selectedResultId, setSelectedResultId] = useState(null);
  const [selectedResultDetails, setSelectedResultDetails] = useState(null);
  const [results, setResults] = useState([]);
  const [input, setInput] = useState("");

  const fetchData = (value) => {
    fetch("https://jsonplaceholder.org/users") //fetch DATA from API
      .then((res) =>
        res
          .json() //convert to json
          .then((json) => {
            // console.log(json)
            const results = json.filter((user) => {
              return (
                user &&
                user.firstname &&
                user.firstname.toLowerCase().includes(value)
              );
            });
            setResults(results);
          })
      );
  };

  const handleChange = (value) => {
    setInput(value);
    fetchData(value);
  };

  const handleResultClick = (firstname, lastname, id) => {
    setSelectedResultDetails({ firstname, lastname, id });
  };

  return (
    
      <div className="search__bar--wrapper">
        <div className="search__bar--container">
          <div className="input__wrapper">
            <FaSearch id="search-icon" />
            <input
              placeholder="Explore Fort Portal"
              value={input}
              onChange={(e) => handleChange(e.target.value)}
            />
          </div>

          <div className="results__list">
            {results.map((result, id) => {
              return (
                <div
                  className={`search__result ${
                    selectedResultId === result.id ? "selected" : ""
                  }`}
                  key={result.id}
                  onClick={() =>
                    handleResultClick(
                      result.firstname,
                      result.lastname,
                      result.id
                    )
                  }
                >
                  {result.firstname} {result.lastname}
                </div>
              );
            })}
          </div>

          {selectedResultDetails && (
            <div className="side__pop-up--wrapper">
                <img src={bird} alt="" className="map__image"/>

              <p className="side__pop--bold">{selectedResultDetails.id} stars </p>
              <p className="side__pop--bold">
                {selectedResultDetails.firstname}{" "}
                {selectedResultDetails.lastname}
              </p>
              <p>
                Rainforest national park spanning 494 sq miles known for its
                chimpanzee & primate population.
              </p>
            </div>
          )}
        </div>
      </div>
    
  );
}

export default MapSearchBar;
