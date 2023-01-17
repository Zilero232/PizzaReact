import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchPizzas = createAsyncThunk("pizza/fetchPizzasStatus", async (params) => {
  const { category, sortType, pageCount, filter } = params;
  const url = `https://63bc15c8cf99234bfa6e7c6a.mockapi.io/items?page=${pageCount}&limit=${4}&sortBy=${sortType}&order=${filter}&category=${category}`;
  const { data } = await axios.get(url);
  return data;
});

const defaultValue = {
  items: [],
  status: "loading",
};

const pizzaSlice = createSlice({
  name: "pizza",
  initialState: defaultValue,
  reducers: {
    setPizzas(state, action) {
      state.items = action.payload;
    },
  },
  extraReducers: {
    [fetchPizzas.pending]: (state) => {
      state.status = "loading";
      state.items = [];
    },
    [fetchPizzas.fulfilled]: (state, action) => {
      state.items = action.payload;
      state.status = "success";
    },
    [fetchPizzas.rejected]: (state, action) => {
      state.status = "error";
      state.items = [];
    },
  },
});

export const { setPizzas } = pizzaSlice.actions;
export default pizzaSlice.reducer;
