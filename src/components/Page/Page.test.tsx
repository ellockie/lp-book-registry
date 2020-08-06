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
    console.log("component.text()", component.text());
    expect(component.length).toBe(1);
  });

  test("It shouldn't render any text (sync mode)", () => {
    expect(component.text().length).toBe(0);
  });
});
