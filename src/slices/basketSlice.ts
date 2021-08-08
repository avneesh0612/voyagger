import { createSlice } from "@reduxjs/toolkit";
import { Salad } from "../types/itemTypes";

const initialState = {
  items: [],
};

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    hydrate: (state, action) => {
      return action.payload;
    },
    addToBasket: (state: any, action) => {
      state.items = [...state.items, action.payload];
    },
    removeFromBasket: (state, action) => {
      let pos = state.items.findIndex(
        (item: Salad) => item.id === action.payload.id
      );
      let newBasket = [...state.items];

      if (pos > -1) {
        newBasket.splice(pos, 1);
      }

      state.items = newBasket;
    },
    removeGroupedFromBasket: (state, action) => {
      let newBasket = state.items.filter(
        (item: Salad) => item.id !== action.payload.id
      );

      state.items = newBasket;
    },
    clearBasket: (state, action) => {
      state.items = [];
    },
  },
});

export const {
  addToBasket,
  removeFromBasket,
  removeGroupedFromBasket,
  hydrate,
  clearBasket,
} = basketSlice.actions;

export const selectItems = (state: any) => state.basket.items;
export const selectTotal = (state: any) =>
  state.basket.items.reduce(
    (total: number, item: Salad) => total + item.price,
    0
  );

export default basketSlice.reducer;
