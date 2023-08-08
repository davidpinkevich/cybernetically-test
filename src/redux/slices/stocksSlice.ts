import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { URL } from "../../constants";
import { IInitialStocks, IGetData } from "../../types";

const initialState: IInitialStocks = {
  stocks: [],
  loadStocks: "start",
  currentPage: 1,
  stars: [],
};

export const getData = createAsyncThunk(
  "stocks/getData",
  async (get: IGetData) => {
    const response = await fetch(
      `${URL.BASE_URL}stable/stock/market/batch?symbols=${get.symbols}&types=${get.types}&token=${URL.API_KEY}&range=1`
    );
    const data = await response.json();
    return { data, uniqueId: get.uniqueId };
  }
);

const sliceStocks = createSlice({
  name: "stocks",
  initialState: initialState,
  reducers: {
    changePage: (state, action) => {
      state.currentPage = action.payload;
    },
    changeStocks: (state, action) => {
      state.stocks = action.payload;
    },
    addStars: (state, action) => {
      if (
        state.stars.filter((item) => item.symbol === action.payload.symbol)
          .length === 0
      ) {
        state.stars.push(action.payload);
      } else {
        const indexMain = state.stars.findIndex(
          (item) => item.symbol === action.payload.symbol
        );
        const newArr = state.stars.map((item, index) => {
          if (index === indexMain)
            return { ...item, value: action.payload.value };
          return item;
        });
        state.stars = newArr;
      }
    },
  },
  extraReducers(builder) {
    builder
      .addCase(getData.pending, (state) => {
        state.loadStocks = "loading";
      })
      .addCase(getData.fulfilled, (state, action) => {
        state.loadStocks = "start";
        let arr = [];
        for (let key in action.payload.data) {
          arr.push(action.payload.data[key].quote);
        }
        state.stocks = arr.map((item, index) => ({
          ...item,
          id: action.payload.uniqueId[index],
        }));
      });
  },
});

const { actions, reducer } = sliceStocks;

export default reducer;

export const { changePage, changeStocks, addStars } = actions;
