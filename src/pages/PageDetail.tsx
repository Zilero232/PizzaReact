import { useEffect as UseEffect, FC } from "react";
import { useSelector as UseSelector } from "react-redux";
import { Link, useParams as UseParams } from "react-router-dom";
import { fetchPizza } from "../redux/pizza/asyncActions";
import { selectPizza } from "../redux/pizza/selectors";

import { useAppDispatch as UseAppDispatch } from "../redux/store";

const pizzaDetail: FC = () => {
  const dispatch = UseAppDispatch();
  const { pizza } = UseSelector(selectPizza);

  const { id } = UseParams();

  if (id) {
    UseEffect(() => {
      dispatch(fetchPizza({ id }));
    }, []);
  }

  if (!pizza) {
    return <>Loading....</>;
  }

  return (
    <div className="container">
      <img src={pizza.imageUrl} alt="pizza" />
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
