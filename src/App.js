import Header from "./components/Header";
import Categories from "./components/Categories";
import PizzaMain from "./components/Pizza/PizzaMain";
import Sort from "./components/Sort";

import "./assets/scss/app.scss";

function App() {
  return (
    <>
      <Header />
      <div className="wrapper">
        <div className="content">
          <div className="container">
            <div className="content__top">
              <Categories />
              <Sort />
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <PizzaMain />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
