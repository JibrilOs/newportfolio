import React from "react";
import shap from "./Shap.png";
import Navibar from "./navbar/navbar";
import Content from "./content/content";
import "./Header.scss";

function Hero(props) {
  return (
    <div className="">
      <header className="bannerWrapper">
        <img src={shap} className="  shape" alt="logo" />
        <Navibar />
      </header>
    </div>
  );
}

export default Hero;
