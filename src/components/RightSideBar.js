import React from "react";
import avatar from "../assets/images/avatar.png";
import pfpYellow from "../assets/images/discord_pfp_yellow.png";
import "../styles/right-side-bar.scss";

const RightSideBar = ({ username, changeName }) => {
  return (
    <div>
      <div id="friends-wrapper">
        <div id="friends-list">
          <h1>Online—2</h1>
          <div className="friend own-name">
            <img src={avatar} alt="Avatar" id="avatar" className="avatar"/>
            <input value={username} type="text" id="username" placeholder="Username" onChange={changeName} maxLength="20"/>
          </div>
          <div className="friend other-name">
            <img src={ pfpYellow } alt="Avatar" className="avatar"/>
            <span className="other-user">user34</span>
          </div>
        </div>
      </div>
    </div>
  )
}


export default RightSideBar;
