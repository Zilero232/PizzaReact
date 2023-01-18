import React, { useEffect as UseEffect } from "react";
import { useSelector as UseSelector, useDispatch as UseDispatch } from "react-redux";
import { Link, useParams as UseParams } from "react-router-dom";

import { selectPizza, fetchPizza } from "../redux/slices/pizzasSlice";

const pizzaDetail = () => {
  const dispatch = UseDispatch();
  const { pizza } = UseSelector(selectPizza);

  const { id } = UseParams();
  UseEffect(() => {
    dispatch(fetchPizza({ id }));
  }, []);
  
  if (!pizza) {
    return "Loading....";
  }

  return (
    <div className="container">
      <img src={pizza.imageUrl} />
      <h2>{pizza.title}</h2>
      <h4>{pizza.price} ₽</h4>
      <Link to="/">
        <button className="button button--outline button--add">
          <span>Назад</span>
        </button>
      </Link>
    </div>
  );
};

export default pizzaDetail;
