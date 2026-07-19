import { createSlice } from "@reduxjs/toolkit";

const wishlistSlice = createSlice({
  name: "wishlist",

  initialState: {
    items: [],
  },

  reducers: {

    setWishlist(state, action) {
      state.items = action.payload;
    },

    addWishlist(state, action) {
      state.items.push(action.payload);
    },

    removeWishlist(state, action) {
      state.items = state.items.filter(
        item => item.product._id !== action.payload
      );
    },

  },
});

export const {
  setWishlist,
  addWishlist,
  removeWishlist,
} = wishlistSlice.actions;

export default wishlistSlice.reducer;