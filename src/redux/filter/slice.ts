import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { FilterSliceState, Sort, SortPropertyEnum } from "./types";

const defaultValue: FilterSliceState = {
  categoryId: 0,
  pageCount: 1,
  sort: {
    name: "популярности",
    sortProperty: SortPropertyEnum.RATING,
  },
  filter: "asc",
  inputValue: "",
};

const filterSlice = createSlice({
  name: "filters",
  initialState: defaultValue,
  reducers: {
    setCategoryId(state, action: PayloadAction<number>) {
      state.categoryId = action.payload;
    },
    setSort(state, action: PayloadAction<Sort>) {
      state.sort = action.payload;
    },
    setFilter(state) {
      console.log(state.filter);
      state.filter = state.filter === "asc" ? "desc" : "asc";
    },
    setPageCount(state, action: PayloadAction<number>) {
      state.pageCount = action.payload;
    },
    setInputValue(state, action: PayloadAction<string>) {
      state.inputValue = action.payload;
    },
    setFilters(state, action: PayloadAction<FilterSliceState>) {
      state.pageCount = Number(action.payload.pageCount);
      state.categoryId = Number(action.payload.categoryId);
      state.sort = action.payload.sort;
      state.filter = action.payload.filter;
    },
  },
});

export const { setCategoryId, setFilter, setSort, setPageCount, setInputValue, setFilters } = filterSlice.actions;
export default filterSlice.reducer;
