import React, { useState } from "react";

import Categories from "../components/Categories";
import PizzaMain from "../components/Pizza/PizzaMain";
import Sort from "../components/Sort";
import Pagination from "../components/Pagination/Pagination";

const Home = ({ valueInput }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [idCategory, setIdCategory] = useState(0);
  const [filter, setFilter] = useState(true);
  const [activeTypeSort, setActiveTypeSort] = useState({
    name: "популярности",
    sortProperty: "rating",
  });

  return (
    <>
      <div className="container">
        <div className="content__top">
          <Categories value={idCategory} onChangeCategory={(id) => setIdCategory(id)} />
          <Sort
            value={activeTypeSort}
            onChangeSort={(id) => setActiveTypeSort(id)}
            filter={filter}
            onChangeFilter={setFilter}
          />
        </div>
        <h2 className="content__title">Все пиццы</h2>
        <PizzaMain
          currentPage={currentPage}
          valueInput={valueInput}
          filter={filter}
          sort={activeTypeSort.sortProperty}
          category={idCategory}
        />
        <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} />
      </div>
    </>
  );
};

export default Home;
