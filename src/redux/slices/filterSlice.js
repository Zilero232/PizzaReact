import { createSlice } from "@reduxjs/toolkit";

const defaultValue = {
  categoryId: 0,
  pageCount: 1,
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
    setFilter(state) {
      state.filter = state.filter === "asc" ? "desc" : "asc";
    },
    setPageCount(state, action) {
      state.pageCount = action.payload;
    },
  },
});

export const { setCategoryId, setFilter, setSort, setPageCount } = filterSlice.actions;
export default filterSlice.reducer;
