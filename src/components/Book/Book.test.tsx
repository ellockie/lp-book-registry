import React from "react";
import { shallow, ShallowWrapper } from "enzyme";
import Book, { BookDetails } from "./Book";

describe("<Book />", () => {
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

  beforeEach(() => {
    component = shallow(<Book details={mockBookDetails} />);
  });

  test("It should mount", () => {
    expect(component.length).toBe(1);
  });

  test("It should contain the book's title", () => {
    expect(component.text().includes("book_title")).toBe(true);
  });

  test("It should contain the second author's name", () => {
    expect(component.text().includes("Second author's name")).toBe(true);
  });

  test("It should contain publication year", () => {
    expect(component.text().includes("1977")).toBe(true);
  });
});
