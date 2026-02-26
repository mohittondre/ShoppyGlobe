import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../features/cart/CartSlice";
import searchReducer from "../features/Products/SearchSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    search: searchReducer,
  },
});
