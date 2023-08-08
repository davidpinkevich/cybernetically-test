import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../redux/store";
import App from "./App";

describe("App component", () => {
  test("main in the application", () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    const main = screen.getByRole("main");
    expect(main).toBeInTheDocument();
  });
});
