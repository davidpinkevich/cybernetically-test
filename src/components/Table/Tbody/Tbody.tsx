import { Reorder } from "framer-motion";
import { useEffect, useState } from "react";
import { Stock } from "../../Stock/Stock";
import { IQuotes, IItemsStocks } from "../../../types";
import { styles as animation } from "./styles";

export const Tbody = ({ items }: IItemsStocks) => {
  const [stocks, setStocks] = useState<Array<IQuotes>>([]);

  useEffect(() => {
    setStocks(items);
  }, [items]);
  return (
    <Reorder.Group
      values={stocks}
      onReorder={setStocks}
      axis="y"
      as="tbody"
      whileHover={{
        cursor: "pointer",
      }}
    >
      {stocks.map((item, index) => {
        const obg = { ...item };
        obg.index = ++index;
        return (
          <Reorder.Item
            key={item.id}
            value={item}
            as="tr"
            whileHover={animation.whileHover}
            whileDrag={animation.whileDrag}
            style={{
              textAlign: "center",
            }}
          >
            <Stock {...obg} />
          </Reorder.Item>
        );
      })}
    </Reorder.Group>
  );
};
