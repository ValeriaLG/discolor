import React, { Component } from "react";
import { connect } from "react-redux";
import { SketchPicker } from 'react-color';
import pfpRed from "../assets/images/avatar.png";
import pfpYellow from "../assets/images/discord_pfp_yellow.png";
import {
  addMessage,
  changeColor,
  changeName
} from "../actions/ActionCreators";
import { randomString } from "../utils/helpers";
import Messages from "./Messages";
import SideBar from "./SideBar";
import RightSideBar from "./RightSideBar";
import "../styles/discord-container.scss";
import TopBar from "./TopBar";
import InputArea from "./InputArea";

export class DiscordContainer extends Component {
    constructor(props){
      super(props);
      this.state = {
        input: "",
        background: "#fff",
        username: "Username"
      };

      this.handleInput = this.handleInput.bind(this);
      this.submitMessage = this.submitMessage.bind(this);
    }

    componentDidMount() {
      this.postRandomMsg();
    }

    componentWillUnmount() {
      clearTimeout(this.postRandomMsg);
    }

    postRandomMsg = () => {
      if (this.props.messages.length >= 40) {
        clearTimeout(this.postRandomMsg);
        return;
      }

      const payload = {
        username: "user34",
        id: 2,
        picture: pfpYellow,
        message: randomString()
      };
      this.props.submitMessage(payload);
      setTimeout(this.postRandomMsg, 10000);
    }

    handleInput = ({ target: { name, value }}) => {
        this.setState({ [name]: value });
      }

    submitMessage = (event) => {
      if (event.keyCode !== 13 && (event.target.value)) return;

      const { input, background, username } = this.state;
      const payload = {
        username,
        id: 1,
        picture: pfpRed,
        message: input,
        color: background
      }
      //TODO: change user1 to be dynamic
      if ( input ) {
        this.props.submitMessage(payload);
      }
      this.setState({ input: "" });
    }


    changeColor = (color) => {
      const { username } = this.state;
      const payload = {
        username,
        id: 1,
        color: color.hex
      }
      this.props.changeColor(payload);
      this.setState({ background: color.hex });
    }

    changeName = (e) => {
      const payload = {
        id: 1,
        newName: e.target.value
      }
      this.props.changeName(payload);
      this.setState({username: e.target.value});
    }


    render() {
      const { messages } = this.props;
      return (
        <div className="discord-container">


          <div id="sketch-picker">
            <SketchPicker color={ this.state.background } onChangeComplete={ this.changeColor } />
          </div>


          <div className="side-bar">
            <SideBar />
          </div>

          <div className="middle-area">

            <div className="top-bar-area">
              <TopBar />
            </div>

            <div className="message-list">
              <Messages messageDetails={ messages } />
            </div>

            <div className="message-input-area">
              <InputArea handleInput={this.handleInput} submitMessage={this.submitMessage} input={this.state.input} />
            </div>

            <div className="right-side-bar">
              <RightSideBar changeName={this.changeName} username={this.state.username}/>
            </div>

          </div>


        </div>
      );
    }
}


const mapStateToProps = state => ({
    messages: state.addMessageReducer
});

const mapDispatchToProps = dispatch => ({
    submitMessage: (payload) => dispatch( addMessage(payload) ),
    changeColor: (payload) => dispatch( changeColor(payload) ),
    changeName: (payload) => dispatch( changeName(payload) )
});


export default connect(mapStateToProps, mapDispatchToProps)(DiscordContainer);
