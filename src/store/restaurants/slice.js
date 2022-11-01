import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  all: [
    {
      name: "ABC Pizza",
      id: 2,
      pizzas: [1, 2],
    },
    {
      name: "I Pazzi",
      id: 3,
      pizzas: [3],
    },
    {
      name: "Pizza Napoli",
      id: 4,
      pizzas: [3, 2],
    },
    {
      name: "Eatmosfera",
      id: 5,
      pizzas: [1, 3],
    },
  ],
};

export const restaurantSlice = createSlice({
  name: "restaurants",
  initialState,
  reducers: {},
});

export const {} = restaurantSlice.actions;

export default restaurantSlice.reducer;
