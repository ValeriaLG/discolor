import React from "react";
import {svgs} from "../assets/svgs";
import "../styles/top-bar.scss";

const TopBar = () => {
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
      </div>
      <div className="channel-name">
        <span className="pound-sign">#</span>
        <span className="channel">general</span>
      </div>
    </div>
  )
}


export default TopBar;
