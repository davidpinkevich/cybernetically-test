import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { v4 } from "uuid";
import { PaginationStocks } from "../../components/PaginationStocks/Pagination";
import { ItemsStocks } from "../../components/Table/Table";
import { getData } from "../../redux/slices/stocksSlice";
import { TStore } from "../../types";
import { TAppDispatch } from "../../redux/store";
import "./StocksPage.scss";

export const StocksPage = () => {
  const dispatch = useDispatch<TAppDispatch>();
  const { currentPage } = useSelector((state: TStore) => state.stocks);
  const { nameSymbols } = useSelector((state: TStore) => state.symbols);

  useEffect(() => {
    const current = currentPage - 1;
    const symbols = nameSymbols.slice(current * 10, currentPage * 10).join(",");
    const uniqueId = new Array(10).fill("").map((x) => (x = v4()));
    dispatch(getData({ symbols, types: "quote", uniqueId }));
  }, [currentPage, dispatch, nameSymbols]);

  return (
    <div className="stocks">
      <ItemsStocks />
      <PaginationStocks />
    </div>
  );
};
