import React, { memo } from "react";
import Pagination from "react-bootstrap/Pagination";

import styles from "./Paginator.module.scss";

interface PaginatorProps {
  currentPage: number;
  allResults: number;
  itemsPerPage: number;
}

function getPaginatorFront(items: JSX.Element[], currentPage: number) {
  if (currentPage < 4) return;
  items.push(
    <Pagination.Item key={1} href={`/pages/${1}`}>
      {1}
    </Pagination.Item>
  );
  items.push(
    <Pagination.Ellipsis className={styles.Ellipsis} disabled key="...1" />
  );
}

function getPaginatorCore(
  items: JSX.Element[],
  currentPage: number,
  maxPages: number
) {
  for (
    let index = Math.max(currentPage - 2, 1);
    index <= Math.min(currentPage + 2, maxPages);
    index++
  ) {
    items.push(
      <Pagination.Item
        key={index}
        active={index === currentPage}
        href={`/pages/${index}`}
      >
        {index}
      </Pagination.Item>
    );
  }
}

function getPaginatorEnd(
  items: JSX.Element[],
  currentPage: number,
  maxPages: number
) {
  if (currentPage >= maxPages - 2) return;
  items.push(
    <Pagination.Ellipsis className={styles.Ellipsis} disabled key="...2" />
  );
  items.push(
    <Pagination.Item key={maxPages} href={`/pages/${maxPages}`}>
      {maxPages}
    </Pagination.Item>
  );
}

function buildPaginator(
  items: JSX.Element[],
  currentPage: number,
  maxPages: number
) {
  getPaginatorFront(items, currentPage);
  getPaginatorCore(items, currentPage, maxPages);
  getPaginatorEnd(items, currentPage, maxPages);
}

const Paginator: React.FC<PaginatorProps> = memo((props: PaginatorProps) => {
  const { currentPage, allResults, itemsPerPage } = props;
  if (!allResults) return null;
  const maxPages: number = Math.ceil(allResults / itemsPerPage);
  const items: JSX.Element[] = [];
  buildPaginator(items, currentPage, maxPages);

  return (
    <div className={styles.PaginatorContainer}>
      <div className={styles.AllResults}>{allResults} results</div>
      <Pagination className={styles.Paginator}>{items}</Pagination>
    </div>
  );
});

export default Paginator;
