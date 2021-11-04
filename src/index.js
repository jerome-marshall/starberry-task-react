import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import GlobalStyles from "./GlobalStyles";

ReactDOM.render(
  <React.StrictMode>
    {/* Apply CSS Global Variables */}
    <GlobalStyles />
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
