import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import { MainPage } from "./MainPage";

describe("MainPage component", () => {
  test("link in the main page", () => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <MainPage />
      </MemoryRouter>
    );
    const link = screen.getByText("Get information about all trading stocks");
    expect(link).toBeInTheDocument();
  });
});
