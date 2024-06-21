import React from "react";
import "../Styles/LandingPage.css";

function LandingPage() {
  return (

    <section id="LandingPage">
  <div className="video-wrapper">
  <iframe title="vimeo-player" src="https://player.vimeo.com/video/927140460?background=1&autoplay=1&loop=1&loop=1&byline=0&title=0" width="640" height="360" frameborder="0"    allowfullscreen></iframe>
  </div>

  <div className="video-overlay">
    <div className="landing__page--container container">
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
