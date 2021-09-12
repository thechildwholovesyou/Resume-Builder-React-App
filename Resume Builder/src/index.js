import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "react";

import { Provider } from "react-redux";
import userReduer from "./redux/reducers/userReducer";
import App from "./App";

let myStore = createStore(userReduer);

ReactDOM.render(
  <Provider store={myStore}>
    <App />
  </Provider>,
  document.querySelector("#root")
);

