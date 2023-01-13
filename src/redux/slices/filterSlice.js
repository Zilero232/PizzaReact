import { createSlice } from "@reduxjs/toolkit";

const defaultValue = {
  categoryId: 0,
  sort: {
    name: "популярности",
    sortProperty: "rating",
  },
  filter: false,
};

const filterSlice = createSlice({
  name: "filters",
  initialState: defaultValue,
  reducers: {
    setCategoryId(state, action) {
      state.categoryId = action.payload;
    },
    setSort(state, action) {
      state.sort = action.payload;
    },
    setFilter(state, action) {
      state.filter = !state.filter;
    },
  },
});

export const { setCategoryId, setFilter, setSort } = filterSlice.actions;
export default filterSlice.reducer;
