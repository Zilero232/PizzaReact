import { useSelector, useDispatch } from "react-redux";

import { setCategoryId, selectFilter } from "../redux/slices/filterSlice";

function Categories() {
  const dispatch = useDispatch();
  const { categoryId } = useSelector(selectFilter);

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
