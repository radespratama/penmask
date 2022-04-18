import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import { RDX } from "@devplayhouse/rdx";
import { BrowserRouter } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";

const containerApp = ReactDOM.createRoot(document.getElementById("root"));
containerApp.render(
  <React.StrictMode>
    <BrowserRouter>
      <RDX />
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
