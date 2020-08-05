import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";

import { BookDetails, Paginator, Page } from "./components";

import "./App.css";

function App() {
  const API_BASE_URL = "http://nyx.vima.ekt.gr:3000/api/books";
  const ITEMS_PER_PAGE = 10;
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [resultsCount, setResultsCount] = useState<number>(0);
  const [books, setBooks] = useState<BookDetails[]>([]);
  const [searchPhrase, setSearchPhrase] = useState<string>("");

  useEffect(() => {
    fetch(API_BASE_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        page: currentPage,
        itemsPerPage: ITEMS_PER_PAGE,
        filters: searchPhrase
          ? [{ type: "all", values: [...searchPhrase.split(" ")] }]
          : [],
      }),
    })
      .then((results) => results.json())
      .then((data) => {
        setBooks(data.books);
        setResultsCount(data.count);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, [currentPage, searchPhrase]);

  return (
    <div className="App">
      <header className="App-header">
        <Container>
          <h2>Book Registry</h2>
          <Page books={books} />
          <Paginator
            currentPage={currentPage}
            allResults={resultsCount}
            itemsPerPage={ITEMS_PER_PAGE}
          />
        </Container>
      </header>
    </div>
  );
}

export default App;
