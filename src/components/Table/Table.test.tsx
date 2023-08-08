import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../redux/store";
import { ItemsStocks } from "./Table";

describe("ItemsStocks component", () => {
  test("table in the page", () => {
    render(
      <Provider store={store}>
        <ItemsStocks />
      </Provider>
    );
    const table = screen.getByRole("table");
    expect(table).toBeInTheDocument();
  });
});
