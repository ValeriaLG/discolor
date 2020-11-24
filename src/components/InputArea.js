import React from "react";
import "../styles/input-area.scss";

const InputArea = ({ handleInput, submitMessage, input }) => {
  return (
    <div id="input-container">
      <input onChange={handleInput} value={input} name="input" id="messageInput" onKeyDown={submitMessage} placeholder="Message #general"/>
    </div>
  )
}


export default InputArea;
