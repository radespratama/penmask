import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ThemeProvider } from "styled-components";

import * as serviceWorkerRegistration from "./serviceWorkerRegistration";
import reportWebVitals from "./reportWebVitals";
import { theme } from "styles/theme.config";
import GlobalCSS from "styles/global.style";

const containerApp = ReactDOM.createRoot(document.getElementById("root"));
containerApp.render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalCSS />
      <App />
    </ThemeProvider>
  </StrictMode>
);

serviceWorkerRegistration.unregister();
reportWebVitals();
