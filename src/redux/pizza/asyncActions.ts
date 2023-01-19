import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { Pizza } from "./types";

export const fetchPizzas = createAsyncThunk<Pizza[], Record<string, string>>(
  "pizza/fetchPizzasStatus",
  async (params) => {
    const { category, sortType, pageCount, filter } = params;
    const url = `https://63bc15c8cf99234bfa6e7c6a.mockapi.io/items?page=${pageCount}&limit=${4}&sortBy=${sortType}&order=${filter}&category=${category}`;
    const { data } = await axios.get<Pizza[]>(url);
    return data;
  }
);

export const fetchPizza = createAsyncThunk("pizza/fetchPizzaStatus", async (params: { id: string }) => {
  const { id } = params;
  const { data } = await axios.get<Pizza>(`https://63bc15c8cf99234bfa6e7c6a.mockapi.io/items/${id}`);
  return data;
});
