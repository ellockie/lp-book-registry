import React from "react";
import { mount, ReactWrapper } from "enzyme";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

import Paginator from "./Paginator";

describe("<Paginator />", () => {
  let component: ReactWrapper;

  beforeEach(() => {
    component = mount(
      <Router>
        <Switch>
          <Route path="/pages/:page">
            <Paginator currentPage={23} allResults={88} itemsPerPage={20} />
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

  test("It should contain 'All results: 88 items' text", () => {
    expect(component.text().includes("88 results")).toBe(true);
  });
});
