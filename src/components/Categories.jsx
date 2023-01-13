import { useSelector, useDispatch } from "react-redux";

import { setCategoryId } from "../redux/slices/filterSlice";

function Categories() {
  const dispatch = useDispatch();
  const categoryId = useSelector((state) => state.filter.categoryId);

  const categories = ["Все", "Мясные", "Вегетарианская", "Гриль", "Острые", "Закрытые"];

  return (
    <div className="categories">
      <ul>
        {categories.map((item, i) => (
          <li key={i} onClick={() => dispatch(setCategoryId(i))} className={categoryId === i ? "active" : ""}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Categories;
