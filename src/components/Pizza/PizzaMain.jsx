import React, { useState, useEffect, useContext } from "react";
import { useSelector } from "react-redux";

import PizzaItem from "./PizzaBlock";
import Skeleton from "./Skeleton";

import { SearchContext } from "../../App";

function PizzaMain({ currentPage }) {
  const sort = useSelector((state) => state.filter.sort.sortProperty);
  const category = useSelector((state) => state.filter.categoryId);
  const filter = useSelector((state) => state.filter.filter);

  const { valueInput } = useContext(SearchContext);

  const [isLoading, setLoading] = useState(true);
  const [pizzas, setPizzas] = useState([]);

  const fetchCategory = category > 0 ? `category=${category}` : "";
  const fetchSort = `sortBy=${sort}`;
  const fetchFilter = filter ? "asc" : "desc";
  const pizzasEnd = pizzas
    .filter((item) => item.title.toLowerCase().includes(valueInput.toLowerCase()))
    .map((obg, id) => <PizzaItem key={id} {...obg} />);

  useEffect(() => {
    setLoading(true);
    fetch(
      `https://63bc15c8cf99234bfa6e7c6a.mockapi.io/items?page=${currentPage}&limit=${4}&${fetchCategory}&${fetchSort}&order=${fetchFilter}`
    )
      .then((res) => res.json())
      .then((json) => {
        setPizzas(json);
        setLoading(false);
      });
  }, [sort, category, filter, currentPage]);

  return (
    <div className="content__items">
      {isLoading ? [...new Array(6)].map((idx, id) => <Skeleton key={id} />) : pizzasEnd}
    </div>
  );
}

export default PizzaMain;
