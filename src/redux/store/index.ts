import { configureStore } from "@reduxjs/toolkit";
import symbols from "../slices/symbolsSlice";
import stocks from "../slices/stocksSlice";

const store = configureStore({
  reducer: { symbols, stocks },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  devTools: process.env.NODE_ENV !== "production",
});

export default store;
export type TAppDispatch = typeof store.dispatch;
