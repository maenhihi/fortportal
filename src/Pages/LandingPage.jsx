import React from "react";
import "../Styles/LandingPage.css";

function LandingPage() {
  return (
    
    <section id="LandingPage">

      <div className="video-wrapper">
        <iframe
          src="https://player.vimeo.com/video/932764715?background=1&autoplay=1&loop=1&byline=0&title=0"
          webkitallowfullscreen
          mozallowfullscreen
          allowfullscreen
          title="Vimeo Video"
        ></iframe>
      </div>
      <div className="video-overlay">
        <div className="landing__page--container container ">
          <div className="heading">
            <span className="text-gradient">Fort Portal </span>Mapping Platform
          </div>
        </div>
      </div>
       <a href="#features" className="scroll">
        <div className="scroll__icon click"></div>
       </a>
      </section>
  );
}

export default LandingPage;
