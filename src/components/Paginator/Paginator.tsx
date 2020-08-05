import React, { memo } from "react";
import styles from "./Paginator.module.css";
import Pagination from "react-bootstrap/Pagination";

interface PaginatorProps {
  currentPage: number;
  allPages: number;
  itemsPerPage: number;
}

const Paginator: React.FC<PaginatorProps> = memo((props: PaginatorProps) => {
  const { allPages, itemsPerPage, currentPage } = props;
  return (
    <Pagination className={styles.Paginator}>
      <Pagination.First />
      <Pagination.Prev />
      <Pagination.Item>{1}</Pagination.Item>
      <Pagination.Ellipsis />

      <Pagination.Item>{10}</Pagination.Item>
      <Pagination.Item>{11}</Pagination.Item>
      <Pagination.Item active>{currentPage}</Pagination.Item>
      <Pagination.Item>{13}</Pagination.Item>
      <Pagination.Item disabled>{14}</Pagination.Item>

      <Pagination.Ellipsis />
      <Pagination.Item>{allPages / itemsPerPage}</Pagination.Item>
      <Pagination.Next />
      <Pagination.Last />
    </Pagination>
  );
});

export default Paginator;
