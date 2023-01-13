import React from "react";
import ReactPaginate from "react-paginate";
import { useDispatch } from "react-redux";
import { setPageCount } from "../../redux/slices/filterSlice";

import styles from "./Pagination.module.scss";

const Pagination = () => {
  const dispatch = useDispatch();

  return (
    <ReactPaginate
      className={styles.root}
      breakLabel="..."
      nextLabel=">"
      previousLabel="<"
      onPageChange={(e) => dispatch(setPageCount(e.selected + 1))}
      pageCount={3}
    />
  );
};

export default Pagination;
