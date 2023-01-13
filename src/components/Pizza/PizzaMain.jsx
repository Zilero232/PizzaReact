import React, { useState, useEffect, useContext } from "react";
import { useSelector } from "react-redux";
import axios from "axios";

import PizzaItem from "./PizzaBlock";
import Skeleton from "./Skeleton";

import { SearchContext } from "../../App";

function PizzaMain() {
  const { sort, categoryId, filter, pageCount } = useSelector((state) => state.filter);
  const sortType = sort.sortProperty;

  const { valueInput } = useContext(SearchContext);

  const [isLoading, setLoading] = useState(true);
  const [pizzas, setPizzas] = useState([]);

  const pizzasEnd = pizzas
    .filter((item) => item.title.toLowerCase().includes(valueInput.toLowerCase()))
    .map((obg, id) => <PizzaItem key={id} {...obg} />);

  const url = `https://63bc15c8cf99234bfa6e7c6a.mockapi.io/items?page=${pageCount}
  &limit=${4}
  &sortBy=${sortType}
  &order=${filter}
  &category=${categoryId > 0 ? categoryId : ""}`;

  useEffect(() => {
    setLoading(true);
    axios.get(url).then((res) => {
      setPizzas(res.data);
      setLoading(false);
    });
  }, [sortType, categoryId, filter, pageCount]);

  return (
    <div className="content__items">
      {isLoading ? [...new Array(6)].map((idx, id) => <Skeleton key={id} />) : pizzasEnd}
    </div>
  );
}

export default PizzaMain;
