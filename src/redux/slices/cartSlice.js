import { createSlice } from "@reduxjs/toolkit";

const defaultValue = {
  totalPrice: 0,
  totalCount: 0,
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState: defaultValue,
  reducers: {
    addItem(state, action) {
      const findItem = state.items.find((obg) => obg.id === action.payload.id);
      if (findItem) {
        findItem.count++;
      } else {
        state.items.push({ ...action.payload, count: 1 });
      }

      state.totalPrice = state.items.reduce((sum, obg) => {
        return obg.price * obg.count + sum;
      }, 0);
      state.totalCount = state.items.reduce((sum, item) => sum + item.count, 0);
    },
    minusItem(state, action) {
      const findItem = state.items.find((obg) => obg.id === action.payload);
      if (findItem) {
        findItem.count < 2 ? (findItem.count = 1) : findItem.count--;
      }
      state.totalPrice = state.items.reduce((sum, obg) => {
        return obg.price * obg.count + sum;
      }, 0);
    },
    removeItem(state, action) {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    clearCart(state) {
      state.items = [];
      state.totalCount = 0;
      state.totalPrice = 0;
    },
  },
});

export const { addItem, minusItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
