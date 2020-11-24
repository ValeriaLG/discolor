import initialState from "../app/initialState";



export const addMessageReducer = (state = initialState.messages, action) => {
  switch(action.type){
    case 'ADD_MESSAGE':
      state = [
        ...state,
        {
          username: action.username,
          id: action.id,
          picture: action.picture,
          message: action.message,
          color: action.color,
          date: action.date
        }
      ];
      return state;
    case 'CHANGE_COLOR':
      return state.map(message =>
        message.id === action.id ? { ...message, color: action.color } : message
      );
    case "CHANGE_NAME":
      return state.map(message =>
        message.id === action.id ? { ...message, username: action.username } : message
      );
    default:
      return state;
  }
};

