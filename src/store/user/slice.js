import { createSlice } from "@reduxjs/toolkit";
const initialState = { name: "selva", id: 42, favorite: [1, 3] };
export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    toggleFavorites: (state, action) => {
      // console.log(action);
      const id = action.payload;

      // Check first if it's already a favorite or not
      const newFav = state.favorite.includes(id)
        ? state.favorite.filter((nr) => nr !== id) // if it is => remove it
        : [...state.favorite, id]; // if not, add it.

      console.log(newFav);
      state.favorite = newFav;
    },
  },
});
export const { toggleFavorites } = userSlice.actions;
export default userSlice.reducer;
