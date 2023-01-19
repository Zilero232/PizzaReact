import ReactPaginate from "react-paginate";
import { useDispatch, useSelector } from "react-redux";
import { selectFilter } from "../../redux/filter/selectors";
import { setPageCount } from "../../redux/filter/slice";

import styles from "./Pagination.module.scss";

const Pagination = () => {
  const dispatch = useDispatch();
  const { pageCount } = useSelector(selectFilter);

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
