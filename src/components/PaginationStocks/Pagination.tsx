import { Pagination } from "@mantine/core";
import { useDispatch, useSelector } from "react-redux";
import { changePage } from "../../redux/slices/stocksSlice";
import { TStore } from "../../types";

export const PaginationStocks = () => {
  const dispatch = useDispatch();
  const { amountSymbols } = useSelector((state: TStore) => state.symbols);
  const { currentPage, loadStocks } = useSelector(
    (state: TStore) => state.stocks
  );
  return (
    <Pagination
      disabled={loadStocks === "loading"}
      size="xl"
      color="gray"
      total={Math.ceil(amountSymbols / 10)}
      value={currentPage}
      onChange={(value) => dispatch(changePage(value))}
    />
  );
};
