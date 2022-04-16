import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ThemeProvider } from "styled-components";

import reportWebVitals from "./reportWebVitals";
import { theme } from "styles/theme.config";
import GlobalCSS from "styles/global.style";

const containerApp = ReactDOM.createRoot(document.getElementById("root"));
containerApp.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalCSS />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
);

reportWebVitals();
