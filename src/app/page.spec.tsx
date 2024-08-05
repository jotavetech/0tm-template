import { render, screen } from "@testing-library/react";

import Home from "./page";

describe("Home page", () => {
  it("shoud salute the developer", () => {
    render(<Home />);
    expect(screen.getByText("Welcome to 0tm setup.")).toBeInTheDocument();
  });
});
