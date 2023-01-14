import React, { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import qs from "qs";
import { useNavigate } from "react-router-dom";

import { setFilters } from "../../redux/slices/filterSlice";

import PizzaItem from "./PizzaBlock";
import Skeleton from "./Skeleton";
import { SortNames } from "../Sort";

function PizzaMain() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { sort, categoryId, filter, pageCount, inputValue } = useSelector((state) => state.filter);
  const [isLoading, setLoading] = useState(true);
  const [pizzas, setPizzas] = useState([]);
  const isSearch = useRef(false);
  const render = useRef(false);

  const sortType = sort.sortProperty;
  const category = categoryId > 0 ? categoryId : "";

  const pizzasEnd = pizzas
    .filter((item) => item.title.toLowerCase().includes(inputValue.toLowerCase()))
    .map((obg, id) => <PizzaItem key={id} {...obg} />);

  const url = `https://63bc15c8cf99234bfa6e7c6a.mockapi.io/items?page=${pageCount}&limit=${4}&sortBy=${sortType}&order=${filter}&category=${category}`;

  const fetchPizzas = () => {
    setLoading(true);
    axios.get(url).then((res) => {
      setPizzas(res.data);
      setLoading(false);
    });
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
      fetchPizzas();
    }
    isSearch.current = false;
  }, [sortType, categoryId, filter, pageCount]);

  return (
    <div className="content__items">
      {isLoading ? [...new Array(6)].map((idx, id) => <Skeleton key={id} />) : pizzasEnd}
    </div>
  );
}

export default PizzaMain;
