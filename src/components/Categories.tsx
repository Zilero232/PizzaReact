import { FC, memo } from "react";

type CategoriesItem = {
  value: number;
  onChangeCategoryId: (idx: number) => void;
};

const Categories: FC<CategoriesItem> = memo(({ value, onChangeCategoryId }) => {
  const categories = ["Все", "Мясные", "Вегетарианская", "Гриль", "Острые", "Закрытые"];

  return (
    <div className="categories">
      <ul>
        {categories.map((item, i) => (
          <li key={i} onClick={() => onChangeCategoryId(i)} className={value === i ? "active" : ""}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
});

export default Categories;
