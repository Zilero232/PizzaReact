import React, { useState } from "react";

function Categories() {
  const categories = ["Все", "Мясные", "Вегетарианская", "Гриль", "Острые", "Закрытые"];

  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="categories">
      <ul>
        {categories.map((item, id) => (
          <li key={id} onClick={() => setActiveIndex(id)} className={activeIndex === id ? "active" : ""}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Categories;
