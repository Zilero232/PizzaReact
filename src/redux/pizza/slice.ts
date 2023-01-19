import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchPizza, fetchPizzas } from "./asyncActions";
import { Pizza, PizzaSliceState, Status } from "./types";

const defaultValue: PizzaSliceState = {
  items: [],
  pizza: {} as Pizza,
  status: Status.LOADING,
};

const pizzaSlice = createSlice({
  name: "pizza",
  initialState: defaultValue,
  reducers: {
    setPizzas(state, action: PayloadAction<Pizza[]>) {
      state.items = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPizza.pending, (state) => {
      state.pizza = {} as Pizza;
    });
    builder.addCase(fetchPizza.fulfilled, (state, action) => {
      state.pizza = action.payload;
    });
    builder.addCase(fetchPizza.rejected, (state) => {
      alert("Ошибка при получении пиццы!");
      state.pizza = {} as Pizza;

      window.location.href = "/";
    });

    builder.addCase(fetchPizzas.pending, (state) => {
      state.status = Status.LOADING;
      state.items = [];
    });
    builder.addCase(fetchPizzas.fulfilled, (state, action) => {
      state.items = action.payload;
      state.status = Status.SUCCESS;
    });
    builder.addCase(fetchPizzas.rejected, (state) => {
      state.status = Status.ERROR;
      state.items = [];
    });
  },
});

export const { setPizzas } = pizzaSlice.actions;
export default pizzaSlice.reducer;
