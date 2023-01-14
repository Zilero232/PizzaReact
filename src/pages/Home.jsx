import React from "react";

import Categories from "../components/Categories";
import PizzaMain from "../components/Pizza/PizzaMain";
import Sort from "../components/Sort";
import Pagination from "../components/Pagination/Pagination";

const Home = () => {
  return (
    <>
      <div className="container">
        <div className="content__top">
          <Categories />
          <Sort />
        </div>
        <h2 className="content__title">Все пиццы</h2>
        <PizzaMain />
        <Pagination />
      </div>
    </>
  );
};

export default Home;
