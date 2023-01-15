import React from "react";
import ReactDOM from "react-dom";
import { createRoot } from "react-dom/client";
// import "./index.css";
import App from "./src/App";
// import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
// import { Provider } from "react-redux";
// import store from "./store/store";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
