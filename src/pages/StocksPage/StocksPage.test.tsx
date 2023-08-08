import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../redux/store";
import { MemoryRouter } from "react-router";
import { StocksPage } from "./StocksPage";

describe("StocksPage component", () => {
  test("loading in the stocks page", () => {
    render(
      <MemoryRouter initialEntries={["/quotes"]}>
        <Provider store={store}>
          <StocksPage />
        </Provider>
      </MemoryRouter>
    );
    const loading = screen.getByText("Data loading");
    expect(loading).toBeInTheDocument();
  });
});
