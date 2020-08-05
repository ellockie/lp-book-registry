import React, { memo, useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { Book, BookDetails, Paginator } from "..";

import styles from "./Page.module.css";

interface PageProps {
  searchPhrase: string;
}

const API_BASE_URL = "http://nyx.vima.ekt.gr:3000/api/books";
const ITEMS_PER_PAGE = 5;

const Page: React.FC<PageProps> = memo((props: PageProps) => {
  const { searchPhrase } = props;
  // get current page from the router hook:
  const { page: currentPage } = useParams();
  const [resultsCount, setResultsCount] = useState<number>(0);
  const [books, setBooks] = useState<BookDetails[]>([]);

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
    <div className={styles.Page}>
      {books.map((book) => (
        <Book key={book.id} details={book} />
      ))}
      <Paginator
        currentPage={currentPage}
        allResults={resultsCount}
        itemsPerPage={ITEMS_PER_PAGE}
      />
    </div>
  );
});

export default Page;
