import PizzaItem from "./PizzaBlock";

import pizzas from "../../assets/pizza.json";

function PizzaMain() {
  return (
    <div className="content__items">
      {pizzas.map((obg, id) => (
        <PizzaItem key={id} {...obg} />
      ))}
    </div>
  );
}

export default PizzaMain;
