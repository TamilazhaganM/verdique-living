import { configureStore } from "@reduxjs/toolkit";
import uiReducer from "./slices/uiSlice";

import cartReducer from "./slices/cartSlice";
import wishlistReducer from "./slices/wishlistSlice";

export const store = configureStore({

  reducer: {

    cart: cartReducer,

    wishlist: wishlistReducer,

    ui: uiReducer,
  },

});