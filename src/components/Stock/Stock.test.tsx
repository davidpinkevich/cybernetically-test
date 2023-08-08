import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../redux/store";
import { Stock } from "./Stock";

const item = {
  index: 1,
  id: "0e096344-f3f3-4e31-a37e-d49284383b6c",
  companyName: "Agilent Technologies Inc.",
  primaryExchange: "NEW YORK STOCK EXCHANGE INC.",
  lastTradeTime: 1691519305529,
  iexCloseTime: 1691519305529,
  latestPrice: 126.95,
  iexClose: 126.95,
  change: 0.44,
  currency: "USD",
  symbol: "A",
};

describe("Stock component", () => {
  test("Draw Stock", () => {
    render(
      <Provider store={store}>
        <Stock {...item} />
      </Provider>
    );

    const companyName = screen.getByText("Agilent Technologies Inc.");
    expect(companyName).toBeInTheDocument();

    const currency = screen.getByText("USD");
    expect(currency).toBeInTheDocument();

    const primary = screen.getByText("NEW YORK STOCK EXCHANGE INC.");
    expect(primary).toBeInTheDocument();
  });
});
