import { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../../redux/store";
import qs from "qs";
import { useNavigate } from "react-router-dom";

import PizzaItem from "./PizzaBlock";
import Skeleton from "./Skeleton";
import { SortNames } from "../Sort";
import { selectFilter } from "../../redux/filter/selectors";
import { selectPizza } from "../../redux/pizza/selectors";
import { setFilters } from "../../redux/filter/slice";
import { fetchPizzas } from "../../redux/pizza/asyncActions";

const PizzaMain = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const { sort, categoryId, filter, pageCount, inputValue } = useSelector(selectFilter);
  const { items, status } = useSelector(selectPizza);

  const isSearch = useRef(false);
  const render = useRef(false);

  const category = categoryId > 0 ? `${categoryId}` : "";
  const sortType = sort.sortProperty;

  const getPizzas = async () => {
    dispatch(fetchPizzas({ category, sortType, pageCount: String(pageCount), filter }));
  };

  useEffect(() => {
    if (window.location.search) {
      const params = qs.parse(window.location.search.substring(1));
      const sortList = SortNames.find((obg) => obg.sortProperty === params.sortType);

      if (sortList)
        dispatch(
          setFilters({
            pageCount: Number(params.pageCount),
            categoryId: Number(params.categoryId),
            sort: sortList,
            filter,
            inputValue,
          })
        );

      isSearch.current = true;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (render.current) {
      const queryString = qs.stringify({
        sortType,
        categoryId,
        pageCount,
        sort,
        filter,
      });

      navigate(`?${queryString}`);
    }
    render.current = true;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sortType, categoryId, filter, sort, pageCount]);

  useEffect(() => {
    if (!isSearch.current) {
      getPizzas();
    }
    isSearch.current = false;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sortType, categoryId, filter, sort, pageCount]);

  const pizzas = items
    .filter((item: { title: string }) => item.title.toLowerCase().includes(inputValue.toLowerCase()))
    .map((obg: any, id: number) => <PizzaItem key={id} {...obg} />);
  const skeletons = [...new Array(4)].map((idx, id) => <Skeleton key={id} />);

  return (
    <div>
      {status === "error" ? (
        <div className="content__error-info">
          <h2>
            Произошла ошбика <span>😕</span>
          </h2>
          <p>К сожалению, не удалось получить питсы. Попробуйте повторить попытку позже.</p>
        </div>
      ) : (
        <div className="content__items">{status === "loading" ? skeletons : pizzas}</div>
      )}
    </div>
  );
};

export default PizzaMain;
