import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { URL } from "../../constants";
import { IInitialSymbols } from "../../types";

const initialState: IInitialSymbols = {
  nameSymbols: [],
  amountSymbols: 0,
  loadSymbols: "start",
};

export const getNameSymbols = createAsyncThunk("symbols/getData", async () => {
  const response = await fetch(
    `${URL.BASE_URL}stable/ref-data/symbols?token=${URL.API_KEY}`
  );
  const data: Array<{ symbol: string }> = await response.json();
  return data.map((item) => item.symbol);
});

const stockSlice = createSlice({
  name: "symbols",
  initialState: initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getNameSymbols.pending, (state) => {
        state.loadSymbols = "loading";
      })
      .addCase(getNameSymbols.fulfilled, (state, action) => {
        state.loadSymbols = "start";
        state.nameSymbols = [...action.payload];
        state.amountSymbols = action.payload.length;
      });
  },
});

const { actions, reducer } = stockSlice;

export default reducer;
