import React, { memo, useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { Book, BookDetails, Paginator } from "..";

const API_BASE_URL = "http://nyx.vima.ekt.gr:3000/api/books";
const ITEMS_PER_PAGE = 5;

interface PageProps {
  searchPhrase: string;
}

const Page: React.FC<PageProps> = memo((props: PageProps) => {
  const { searchPhrase } = props;
  // Get current page from the router hook:
  const { page } = useParams();
  const currentPage: number = +page;
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

  const getPosition = (index: number) =>
    (currentPage - 1) * ITEMS_PER_PAGE + index + 1;

  return (
    <div>
      {books.map((book, index) => (
        <Book key={book.id} details={book} position={getPosition(index)} />
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
