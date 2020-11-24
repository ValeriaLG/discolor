import React from "react";
import {svgs} from "../assets/svgs";
import discordLogo from "../assets/images/discord-color-icon_lighter_version.png";
import "../styles/side-bar.scss";

const SideBar = ( ) => {
  const {
    svgDiscord
  } = svgs;
  return (
  <div>
      <div id="servers-wrapper">
        <div id="servers-icons">
          <div className="server-icon" id="discord-logo">
            <span className="svg-discord" dangerouslySetInnerHTML={{ __html: svgDiscord }}></span>
          </div>
          <div className="server-icon school-bus">
            <img src={discordLogo} alt="server icon"/>
          </div>
        </div>
      </div>
    <div id="channel-wrapper">
      <div id="server-section">
        <div className="server-name">Discord Color</div>
        <i className="arrow-down"/>
      </div>
      <div className="channel-listings">
        <div className="channel-title"><i className="arrow-down"/> text channels</div>
        <div className="channel"><span><span className="pound-sign">#</span> general</span></div>
      </div>
    </div>
  </div>
  )
}


export default SideBar;
