import { QUOTES_NAMES } from "../../../constants";
import { v4 } from "uuid";
import { styles } from "./styles";

export const Thead = () => {
  return (
    <thead>
      <tr>
        {QUOTES_NAMES.map((item) => (
          <th key={v4()} style={{ ...styles }}>
            {item}
          </th>
        ))}
      </tr>
    </thead>
  );
};
