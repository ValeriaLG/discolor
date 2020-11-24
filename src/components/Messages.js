import React from "react";
import "../styles/messages.scss";

const Messages = ({ messageDetails }) => {
  return (
    <div className="messages-list">
      {(messageDetails) ? messageDetails.map((item, idx) => {
        let { color, message, username, date, picture } = item;
          return (
            <div key={idx} className="a-message">
            <img className="message-pfp" src={ picture } alt="discord-pfp" />
            <div style={{ color }}
                 className="message-username">{ username }</div>
              <div className="message-date">{ date }</div>
            <div>{ message }</div>
          </div>
          );
        })
        : null
      }
    </div>
  );
};


export default Messages;
