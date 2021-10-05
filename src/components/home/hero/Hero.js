import React from "react";

import video from "../../../assets/video.mp4";
import "./hero.css";

const Hero = () => {
  return (
    <>
      <div className="hero-body">
        <div className="hero-video-container">
          <video src={video} type="video/mp4" autoPlay loop muted playsInline webkit-playsinline="true"/>
        </div>
        <div className="hero-content">
          <div className="hero-items">
            <h1>Despertá la magia que hay en vos</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
