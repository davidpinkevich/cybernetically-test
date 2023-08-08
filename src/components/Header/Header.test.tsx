import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import { Header } from "./Header";

describe("Header component", () => {
  test("Link in the Header", () => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <Header />
      </MemoryRouter>
    );
    const homeLink = screen.getByText("Home");
    expect(homeLink).toBeInTheDocument();
  });
});
