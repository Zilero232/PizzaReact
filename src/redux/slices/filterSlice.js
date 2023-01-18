import { createSlice } from "@reduxjs/toolkit";

const defaultValue = {
  categoryId: 0,
  pageCount: 1,
  sort: {
    name: "популярности",
    sortProperty: "rating",
  },
  filter: false,
  inputValue: "",
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
    setInputValue(state, action) {
      state.inputValue = action.payload;
    },
    setFilters(state, action) {
      state.pageCount = Number(action.payload.page);
      state.categoryId = Number(action.payload.category);
      state.sort = action.payload.sortBy;
      state.filter = action.payload.order;
    },
  },
});

export const selectFilter = (state) => state.filter;

export const { setCategoryId, setFilter, setSort, setPageCount, setInputValue, setFilters } = filterSlice.actions;
export default filterSlice.reducer;
