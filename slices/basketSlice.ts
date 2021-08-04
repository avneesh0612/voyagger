import { createSlice } from "@reduxjs/toolkit";
import { itemtype } from "../types/itemTypes";

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
    // Store actions
    addToBasket: (state: any, action) => {
      state.items = [...state.items, action.payload];
    },
    removeFromBasket: (state, action) => {
      let pos = state.items.findIndex(
        (item: itemtype) => item.id === action.payload.id
      );
      let newBasket = [...state.items];

      if (pos > -1) {
        newBasket.splice(pos, 1);
      }

      state.items = newBasket;
    },
    removeGroupedFromBasket: (state, action) => {
      let newBasket = state.items.filter(
        (item: itemtype) => item.id !== action.payload.id
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

// Selectors - This is how we pull information from the Global store slice
export const selectItems = (state: any) => state.basket.items;
export const selectTotal = (state: any) =>
  state.basket.items.reduce(
    (total: number, item: itemtype) => total + item.price,
    0
  );

export default basketSlice.reducer;
