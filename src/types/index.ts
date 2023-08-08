export interface IInitialSymbols {
  amountSymbols: number;
  nameSymbols: Array<string>;
  loadSymbols: string | null;
}

export interface IInitialStocks {
  stocks: Array<IQuotes>;
  loadStocks: string;
  currentPage: number;
  stars: Array<{ symbol: string; value: number }>;
}

export interface IGetData {
  symbols: string;
  types: string;
  uniqueId: Array<string>;
}

export interface IQuotes {
  index: number;
  id: string;
  companyName: string;
  primaryExchange: string;
  lastTradeTime: number;
  iexCloseTime: number;
  latestPrice: number;
  iexClose: number;
  change: number;
  currency: string;
  symbol: string;
}

export interface IItemsStocks {
  items: Array<IQuotes>;
}

export type TStore = {
  symbols: IInitialSymbols;
  stocks: IInitialStocks;
};
