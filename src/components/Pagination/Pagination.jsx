import React from "react";
import ReactPaginate from "react-paginate";
import { useDispatch, useSelector } from "react-redux";
import { setPageCount } from "../../redux/slices/filterSlice";

import styles from "./Pagination.module.scss";

const Pagination = () => {
  const dispatch = useDispatch();
  const { pageCount } = useSelector((state) => state.filter);

  return (
    <ReactPaginate
      className={styles.root}
      breakLabel="..."
      nextLabel=">"
      previousLabel="<"
      onPageChange={(e) => dispatch(setPageCount(e.selected + 1))}
      pageCount={3}
      forcePage={pageCount - 1}
    />
  );
};

export default Pagination;
