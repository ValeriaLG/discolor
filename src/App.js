import React from 'react';
import { Provider } from "react-redux";
import { createStore } from "redux";
import DiscordContainer from "./components/DiscordContainer";
import rootReducer from "./reducers/index";
import './App.css';



function App() {
  const store = createStore(rootReducer);
  return (
    <Provider store={store}>
      <DiscordContainer />
    </Provider>
  );
}

export default App;
