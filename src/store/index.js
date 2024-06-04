import { configureStore } from "@reduxjs/toolkit";
import { productsApi } from "../features/apiSlice";
import { setupListeners } from "@reduxjs/toolkit/query";
import wishlistReducer from "../context/wishlistSlice";

export const store = configureStore({
  reducer: {
    [productsApi.reducerPath]: productsApi.reducer,
    wishlist: wishlistReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsApi.middleware),
});

setupListeners(store.dispatch);
