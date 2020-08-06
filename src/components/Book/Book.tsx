import React, { memo } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import styles from "./Book.module.scss";

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
  position: number;
}

const Book: React.FC<BookProps> = memo((props: BookProps) => {
  const { details, position } = props;

  return (
    <Row className={styles.Book}>
      <Col>
        <div className={styles.ResultNumber}>{position}. </div>
        <div className={styles.Title}>{details.book_title}</div>
        <span className={styles.Details}>
          by{" "}
          <span className={styles.Author}>
            {details.book_author.join(", ")}
          </span>
          <span className={styles.HorizSeparator}>|</span>
          <span className={styles.PlaceTime}>
            {details.book_publication_country}, {details.book_publication_city},{" "}
            {details.book_publication_year}
            <span className={styles.HorizSeparator}>|</span>
            <span
              className={styles.Pages}
            >{`${details.book_pages} pages`}</span>
          </span>
        </span>
      </Col>
    </Row>
  );
});

export default Book;
