import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
// import ModeProvider from "./context/ModeProvider";
import { Provider } from "react-redux";
import store from "./store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <ModeProvider> */}
    <HashRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </HashRouter>
    {/* </ModeProvider> */}
  </React.StrictMode>
);

reportWebVitals();
