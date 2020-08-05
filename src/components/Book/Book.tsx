import React, { memo } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import styles from "./Book.module.css";

export interface BookDetails {
  book_author: string[];
  book_pages: number;
  book_publication_city: string;
  book_publication_country: string;
  book_publication_year: number;
  book_title: string;
  id: number;
}

interface BookProps {
  details: BookDetails;
}

const Book: React.FC<BookProps> = memo((props: BookProps) => {
  const { details } = props;
  return (
    <Row className={styles.Book}>
      <Col>
        {/* <div className={styles.Book}> */}
        {`${details.book_author}, ${details.book_publication_city},
    ${details.book_publication_country}, ${details.book_publication_year},
    ${details.book_publication_city}, ${details.book_pages}, ${details.book_title}`}
        {/* </div> */}
      </Col>
    </Row>
  );
});

export default Book;
