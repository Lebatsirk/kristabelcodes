import React from "react";
import ReactDOM from "react-dom/client";

// This is required (in addition to installing npm bootstrap package) for using bootstrap framework
import "bootstrap/dist/css/bootstrap.css";

// import reportWebVitals from "./reportWebVitals";

// Components
import App from "./Components/App.js";

// Styles
// import styles from "./Fonts.module.css";
import "./Components/Styles/Index.module.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
