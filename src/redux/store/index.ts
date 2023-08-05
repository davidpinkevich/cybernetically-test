import { configureStore } from "@reduxjs/toolkit";
import stocks from "../slices/stocks";

const store = configureStore({
  reducer: { stocks },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  devTools: process.env.NODE_ENV !== "production",
});

export default store;
export type TAppDispatch = typeof store.dispatch;
