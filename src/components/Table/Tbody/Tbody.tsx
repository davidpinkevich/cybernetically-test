import { Reorder } from "framer-motion";
import { useEffect, useState } from "react";
import { Stock } from "../../Stock/Stock";
import { IQuotes, IItemsStocks } from "../../../types";

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
            whileHover={{
              boxShadow: "inset 0px 0px 3px 3px rgb(88, 79, 79)",
              backgroundColor: "rgb(201, 214, 215)",
            }}
            whileDrag={{
              scaleY: 1.15,
              backgroundColor: "rgb(147, 163, 164)",
              boxShadow: "inset 0px 0px 10px 5px rgb(88, 79, 79)",
            }}
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
