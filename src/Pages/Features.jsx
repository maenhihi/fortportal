import React from "react";
import Feature from "../Components/Feature.jsx";
import Bird from "../assets/bird.jpg";
import Doctor from "../assets/ugandan-doctor.jpeg";
import Hotel from "../assets/kyaninga-lodge.jpeg"
import Food from "../assets/ugandan-food-9.jpeg"
import MapButton from "../Components/MapButton.jsx";
import '../Styles/Features.css'

import { useNavigate } from "react-router-dom";

export default function Features() {  

  return (
    <section id="features">
      <div className="container">
        <div className="row">
          <div className="features__header--wrapper">
            <h1 className="features__header">Map Features</h1>
          </div>

          <div className="features__wrapper">

            <Feature
              feature_title="Accomodation"
              feature_paragraph="Fort Portal offers a range of hotels blending comfort, hospitality, and convenience, ensuring a memorable stay amidst stunning natural surroundings."
              feature_image_link={Hotel}
            />


            <Feature
              feature_title="Medical Facilities"
              feature_paragraph='Fort Portal boasts modern medical facilities delivering comprehensive care with a focus on community well-being and patient-centric services.'

              feature_image_link={Doctor}
            />

            <Feature
              feature_title="Cuisine"
              feature_paragraph="Fort Portal offers various traditional restaurants which feature staples like matoke, a banana dish, and various stews, offering rich flavors with regional diversity."
              feature_image_link={Food}
            />
            <Feature
              feature_title="Tourist Attractions"
              feature_paragraph="Fort Portal's captivating landscape encompasses lush landscapes, cultural heritage sites, and thrilling wildlife encounters, promising unforgettable adventures."
              feature_image_link={Bird}
            />
          </div>
          <MapButton />
        </div>
      </div>
    </section>
  );
}
