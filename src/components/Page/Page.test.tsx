import React from "react";
import { shallow, ShallowWrapper } from "enzyme";
import Page from "./Page";
import { BookDetails } from "..";

describe("<Page />", () => {
  let component: ShallowWrapper;

  const mockBookDetails: BookDetails = {
    book_author: ["abc", "Second author's name"],
    book_pages: 23,
    book_publication_city: "cde",
    book_publication_country: "def",
    book_publication_year: 1977,
    book_title: "book_title",
    id: 1,
  };
  const books = [mockBookDetails, mockBookDetails];

  beforeEach(() => {
    component = shallow(<Page books={books} />);
  });

  test("It should mount", () => {
    expect(component.length).toBe(1);
  });
});
