import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

import { Page } from "./components";

import "./App.scss";

function App() {
  const [searchPhrase] = useState<string>("");

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Container>
            <h1>Book Registry</h1>
            <Switch>
              <Route path="/pages/:page">
                <Page searchPhrase={searchPhrase} />
              </Route>
              <Route exact path="/">
                <Redirect to="/pages/1" />
              </Route>
              <Route exact path="/pages">
                <Redirect to="/pages/1" />
              </Route>
            </Switch>
          </Container>
        </header>
      </div>
    </Router>
  );
}

export default App;
