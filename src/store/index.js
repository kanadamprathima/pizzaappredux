import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./user/slice";
import pizzasReducer from "./pizzas/slice";
import restaurantReducer from "./restaurants/slice";

const store = configureStore({
  reducer: {
    pizzas: pizzasReducer,
    user: userReducer,
    restaurants: restaurantReducer,
  },
});

export default store;
