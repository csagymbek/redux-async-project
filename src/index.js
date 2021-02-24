import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import postsReducer from "./posts";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

ReactDOM.render(
  <React.StrictMode>
    <Provider
      store={createStore(
        postsReducer,
        composeWithDevTools(applyMiddleware(thunk))
      )}
    >
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
