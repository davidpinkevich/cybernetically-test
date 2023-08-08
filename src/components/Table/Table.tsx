import { Table } from "@mantine/core";
import { useSelector } from "react-redux";
import Loading from "../Loading/Loading";
import { Thead } from "./Thead/Thead";
import { Tbody } from "./Tbody/Tbody";
import { TStore } from "../../types";

export const ItemsStocks = () => {
  const { loadStocks, stocks } = useSelector((state: TStore) => state.stocks);

  return (
    <div className="stocks__body" style={{ padding: 20 }}>
      {loadStocks === "loading" && <Loading type={false} />}
      {loadStocks === "start" && (
        <Table
          captionSide="top"
          fontSize="lg"
          verticalSpacing="lg"
          withColumnBorders
          withBorder
          style={{
            backgroundColor: "white",
            fontFamily: '"Roboto", sans-serif',
          }}
        >
          <caption style={{ fontSize: 20 }}>Table of trading stocks</caption>
          <Thead />
          <Tbody items={stocks} />
        </Table>
      )}
    </div>
  );
};
