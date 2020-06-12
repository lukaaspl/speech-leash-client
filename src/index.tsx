import { ConnectedRouter } from "connected-react-router";
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store, { history } from "store";
import { ThemeProvider } from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";
import "styles/global.css";
import theme from "theme";
import Root from "./Root";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <ThemeProvider theme={theme}>
          <Root />
        </ThemeProvider>
      </ConnectedRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
