import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./pages/home";
import "./assets/styles/reset.scss";
import "./assets/styles/global.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
