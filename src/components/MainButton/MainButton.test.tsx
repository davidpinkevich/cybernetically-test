import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import { MainButton } from "./MainButton";

describe("MainButton component", () => {
  test("Button to stocks page", () => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <MainButton />
      </MemoryRouter>
    );
    const button = screen.getByRole("button");
    expect(button).toHaveTextContent(
      "Get information about all trading stocks"
    );
  });
});
