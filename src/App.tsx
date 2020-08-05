import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";

import { Book, BookDetails } from "./components";

import "./App.css";

function App() {
  const API_BASE_URL = "http://nyx.vima.ekt.gr:3000/api/books";
  const ITEMS_PER_PAGE = 2;
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [resultsCount, setResultsCount] = useState<number>(0);
  const [books, setBooks] = useState<BookDetails[]>([]);

  useEffect(() => {
    fetch(API_BASE_URL, {
      method: "POST",
      body: JSON.stringify({
        page: currentPage,
        itemsPerPage: ITEMS_PER_PAGE,
        filters: [],
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
  }, [currentPage]);

  return (
    <div className="App">
      <header className="App-header">
        <Container>
          <h2>Book Registry</h2>
          {books.map((book) => (
            <Book key={book.id} details={book} />
          ))}
          <div>All results: {resultsCount}</div>
        </Container>
      </header>
    </div>
  );
}

export default App;
