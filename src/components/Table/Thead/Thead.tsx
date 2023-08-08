import { QUOTES_NAMES } from "../../../constants";
import { v4 } from "uuid";

export const Thead = () => {
  return (
    <thead>
      <tr>
        {QUOTES_NAMES.map((item) => (
          <th
            key={v4()}
            style={{
              color: "white",
              backgroundColor: "#7d8788",
              fontSize: 18,
              verticalAlign: "top",
              textAlign: "center",
              textShadow: "0px 2px 2px #000000",
            }}
          >
            {item}
          </th>
        ))}
      </tr>
    </thead>
  );
};
