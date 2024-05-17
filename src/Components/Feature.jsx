import React from "react";

function Feature({ feature_image_link, feature_title, feature_paragraph }) {
  return (
    <div className="feature__container">
      <a href="http://localhost:3000/MapPage">
        <div className="feature__img--wrapper">
          <img src={feature_image_link} alt="" className="feature__img" />
        </div>
        <div className="feature__title--wrapper">
          <h3 className="feature__title">{feature_title}</h3>
        </div>
        <div className="feature__para--wrapper">
          <p className="feature__para">{feature_paragraph}</p>
        </div>
      </a>
    </div>
  );
}

export default Feature;
