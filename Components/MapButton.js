import { React } from "react";
import { useNavigate } from "react-router-dom";

function MapButton() {
  const navigate = useNavigate();
  return (
    <div className="features__button--wrapper">
      <button
        className="features__button"
        onClick={() => {
          navigate("/MapPage");
        }}
      >
        {" "}
        Explore Map Now!
      </button>
    </div>
  );
}

export default MapButton;