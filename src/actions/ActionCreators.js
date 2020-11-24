import { getDate } from "../utils/helpers";


export const addMessage = (payload) => {
  const {username, id, color, picture, message} = payload;
  return {
    type: 'ADD_MESSAGE',
    username,
    id,
    color,
    picture,
    message,
    date: getDate()
  }
};


export const changeColor = (payload) => {
  const {username, id, color} = payload;
  return {
    type: 'CHANGE_COLOR',
    username,
    id,
    color
  }
};


export const changeName = (payload) => {
  return {
    type: "CHANGE_NAME",
    username: payload.newName,
    id: payload.id
  }
};
