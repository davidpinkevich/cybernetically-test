import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { URL } from "../../constants";
import { IInitialStocks, IGetData } from "../../types";

const initialState: IInitialStocks = {
  stocks: [],
  loadStocks: "start",
  currentPage: 1,
};

export const getData = createAsyncThunk(
  "stocks/getData",
  async (get: IGetData) => {
    const response = await fetch(
      `${URL.BASE_URL}stable/stock/market/batch?symbols=${get.symbols}&types=${get.types}&token=${URL.API_KEY}&range=1`
    );
    return await response.json();
  }
);

const sliceStocks = createSlice({
  name: "stocks",
  initialState: initialState,
  reducers: {
    changePage: (state, action) => {
      state.currentPage = action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(getData.pending, (state) => {
        state.loadStocks = "loading";
      })
      .addCase(getData.fulfilled, (state, action) => {
        state.loadStocks = "start";
        state.stocks = action.payload;
      });
  },
});

const { actions, reducer } = sliceStocks;

export default reducer;

export const { changePage } = actions;
