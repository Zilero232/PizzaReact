import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { calcTotalPrice } from "../../utils/CallTotalPrice";
import { getCartFromLC } from "../../utils/getCartFromLC";
import { CartItem, CartSliceState } from "./types";

const defaultValue: CartSliceState = getCartFromLC();

const cartSlice = createSlice({
  name: "cart",
  initialState: defaultValue,
  reducers: {
    addItem(state, action: PayloadAction<CartItem>) {
      const findItem = state.items.find((obg) => obg.id === action.payload.id);

      if (findItem) {
        findItem.count++;
      } else {
        state.items.push({ ...action.payload, count: 1 });
      }

      const { totalPrice, totalCount } = calcTotalPrice(state.items);
      state.totalPrice = totalPrice;
      state.totalCount = totalCount;
    },
    minusItem(state, action: PayloadAction<string>) {
      const findItem = state.items.find((obg) => obg.id === action.payload);
      if (findItem) {
        findItem.count < 2 ? (findItem.count = 1) : findItem.count--;
      }
      state.totalPrice = state.items.reduce((sum, obg) => {
        return obg.price * obg.count + sum;
      }, 0);
    },
    removeItem(state, action: PayloadAction<string>) {
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
