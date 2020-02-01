import React from "react";
import { createGlobalStyle } from "styled-components";
import { Reset } from "styled-reset";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "./pages/Login";
import Timeline from "./pages/Timeline";

const GlobalStyle = createGlobalStyle`
  ${Reset}
  body {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
      "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  html,
  body,
  #root {
    height: 100%;
  }

`;

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/timeline" component={Timeline} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
