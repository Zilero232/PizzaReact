import { FC, useCallback } from "react";
import { useSelector } from "react-redux";

import { useAppDispatch } from "../redux/store";

import Categories from "../components/Categories";
import PizzaMain from "../components/Pizza/PizzaMain";
import Sort from "../components/Sort";
import Pagination from "../components/Pagination/Pagination";
import { selectFilter } from "../redux/filter/selectors";
import { setCategoryId } from "../redux/filter/slice";

const Home: FC = () => {
  const dispatch = useAppDispatch();
  const { categoryId } = useSelector(selectFilter);
  const { sort, filter } = useSelector(selectFilter);

  const onChangeCategoryId = useCallback((id: number) => {
    dispatch(setCategoryId(id));
  }, []);

  return (
    <>
      <div className="container">
        <div className="content__top">
          <Categories value={categoryId} onChangeCategoryId={onChangeCategoryId} />
          <Sort sort={sort} filter={filter} />
        </div>
        <h2 className="content__title">Все пиццы</h2>
        <PizzaMain />
        <Pagination />
      </div>
    </>
  );
};

export default Home;
