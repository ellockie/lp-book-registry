import React from "react";
import { shallow, ShallowWrapper } from "enzyme";
import Paginator from "./Paginator";

describe("<Paginator />", () => {
  let component: ShallowWrapper;

  beforeEach(() => {
    component = shallow(
      <Paginator currentPage={23} allResults={88} itemsPerPage={20} />
    );
  });

  test("It should mount", () => {
    expect(component.length).toBe(1);
  });

  test("It should contain 'All results:' text", () => {
    expect(component.text().includes("All results: 88 items")).toBe(true);
  });
});
