import React from "react";
import { mount, ReactWrapper } from "enzyme";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

import Page from "./Page";

describe("<Page />", () => {
  let component: ReactWrapper;

  beforeEach(() => {
    component = mount(
      <Router>
        <Switch>
          <Route path="/pages/:page">
            <Page searchPhrase="" />
          </Route>
          <Route exact path="/">
            <Redirect to="/pages/1" />
          </Route>
        </Switch>
      </Router>
    );
  });

  test("It should mount", () => {
    expect(component.length).toBe(1);
  });

  test("It should contain 'All results: ' text", () => {
    expect(component.text().includes("All results: ")).toBe(true);
  });
});
