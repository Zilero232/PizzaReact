import React, { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import qs from "qs";
import { useNavigate } from "react-router-dom";

import { setFilters } from "../../redux/slices/filterSlice";
import { setPizzas, fetchPizzas } from "../../redux/slices/pizzasSlice";

import PizzaItem from "./PizzaBlock";
import Skeleton from "./Skeleton";
import { SortNames } from "../Sort";

const PizzaMain = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { sort, categoryId, filter, pageCount, inputValue } = useSelector((state) => state.filter);
  const { items, status } = useSelector((state) => state.pizza);
  const isSearch = useRef(false);
  const render = useRef(false);

  const category = categoryId > 0 ? categoryId : "";
  const sortType = sort.sortProperty;

  const getPizzas = async () => {
    dispatch(fetchPizzas({ category, sortType, pageCount, filter }));
  };

  useEffect(() => {
    if (window.location.search) {
      const params = qs.parse(window.location.search.substring(1));
      const sortList = SortNames.find((obg) => obg.sortProperty === params.sortBy);

      dispatch(setFilters({ ...params, sortBy: sortList }));
      isSearch.current = true;
    }
  }, []);

  useEffect(() => {
    if (render.current) {
      const queryString = qs.stringify({
        sortBy: sortType,
        category: categoryId,
        page: pageCount,
        order: filter,
      });

      navigate(`?${queryString}`);
    }
    render.current = true;
  }, [sortType, categoryId, filter, pageCount]);

  useEffect(() => {
    if (!isSearch.current) {
      getPizzas();
    }
    isSearch.current = false;
  }, [sortType, categoryId, filter, pageCount]);

  const pizzas = items
    .filter((item) => item.title.toLowerCase().includes(inputValue.toLowerCase()))
    .map((obg, id) => <PizzaItem key={id} {...obg} />);
  const skeletons = [...new Array(6)].map((idx, id) => <Skeleton key={id} />);

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
