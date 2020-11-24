import React from "react";
import {svgs} from "../assets/svgs";
import paintBrush from "../assets/images/paint-brush.png";
import "../styles/top-bar.scss";

const TopBar = ({ togglePalette }) => {
  const {
    svgPin,
    svgHelp
  } = svgs;
  return (
    <div id="top-bar-wrapper">
      <div id="friends-menu-wrapper">
        <span dangerouslySetInnerHTML={{ __html: svgHelp }}></span>
        <input placeholder="Search" type="text" />
        <span dangerouslySetInnerHTML={{ __html: svgPin }}></span>
        <span><img src={paintBrush} className="paint-brush-icon" onClick={togglePalette} alt="Click here to toggle the color palette" /></span>
      </div>
      <div className="channel-name">
        <span className="pound-sign">#</span>
        <span className="channel">general</span>
      </div>
    </div>
  )
}


export default TopBar;
