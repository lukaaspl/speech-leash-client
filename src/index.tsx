import "bootstrap/dist/css/bootstrap.min.css";
import "styles/global.css";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import theme from "theme";
import Root from "./Root";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <ThemeProvider theme={theme}>
        <Root />
      </ThemeProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
