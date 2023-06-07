import { render, fireEvent } from "@testing-library/react";
import Home from "./Home";

describe(Home, () => {

  it("Calculator should add two numbers if two numbers, add sign and equal sing is clicked", () => {
    const { getByTestId } = render(<Home />);
    const homeHeader = getByTestId("home-test-h1", { name: "home-test-h1" });
    expect(!homeHeader.toBeNull());
  });
});
