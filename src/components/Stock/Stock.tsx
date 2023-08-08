import { useDispatch, useSelector } from "react-redux";
import { addStars } from "../../redux/slices/stocksSlice";
import { IQuotes } from "../../types/index";
import { Rating } from "@mantine/core";
import { TStore } from "../../types/index";

export const Stock = (props: IQuotes) => {
  const dispatch = useDispatch();
  const { stars } = useSelector((state: TStore) => state.stocks);
  const item = stars.filter((item) => item.symbol === props.symbol);
  const value = item.length ? item[0].value : 0;

  return (
    <>
      <td>{props.index}</td>
      <td style={{ fontWeight: 700 }}>{props.companyName}</td>
      <td>{props.primaryExchange}</td>
      <td>{new Date(props.lastTradeTime).toString()}</td>
      <td>{new Date(props.iexCloseTime).toString()}</td>
      <td style={{ fontWeight: 700 }}>{props.latestPrice}</td>
      <td style={{ fontWeight: 700 }}>{props.iexClose}</td>
      <td
        style={{
          fontWeight: 700,
          color:
            props.change > 0 ? "green" : props.change < 0 ? "red" : "inherit",
        }}
      >
        {props.change ? props.change : "0"}
      </td>
      <td style={{ fontWeight: 700 }}>{props.currency}</td>
      <td>
        <Rating
          size="lg"
          value={value}
          onChange={(value) => {
            dispatch(addStars({ symbol: props.symbol, value }));
          }}
        />
      </td>
    </>
  );
};
