import React, { useState, useContext } from "react";

import Categories from "../components/Categories";
import PizzaMain from "../components/Pizza/PizzaMain";
import Sort from "../components/Sort";
import Pagination from "../components/Pagination/Pagination";

import { SearchContext } from "../App";

const Home = () => {
  const { valueInput } = useContext(SearchContext);
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <>
      <div className="container">
        <div className="content__top">
          <Categories />
          <Sort />
        </div>
        <h2 className="content__title">Все пиццы</h2>
        <PizzaMain currentPage={currentPage} valueInput={valueInput} />
        <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} />
      </div>
    </>
  );
};

export default Home;
