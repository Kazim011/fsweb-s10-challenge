import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import myReducers from "./reducers";
import thunk from "redux-thunk";
import "react-toastify/dist/ReactToastify.css";

const depo = createStore(myReducers, applyMiddleware(thunk));

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <Provider store={depo}>
      <App />
    </Provider>
  </BrowserRouter>
);
