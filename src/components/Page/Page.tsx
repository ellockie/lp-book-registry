import React, { memo } from "react";

import { Book, BookDetails } from "..";

import styles from "./Page.module.css";

interface PageProps {
  books: BookDetails[];
}

const Page: React.FC<PageProps> = memo((props: PageProps) => {
  const { books } = props;
  return (
    <div className={styles.Page}>
      {books.map((book) => (
        <Book key={book.id} details={book} />
      ))}
    </div>
  );
});

export default Page;
