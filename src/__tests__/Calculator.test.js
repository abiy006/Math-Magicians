import { render, fireEvent } from "@testing-library/react";
import Calculator from "../components/Calculator";

describe(Calculator, () => {

  it("Calculator should add two numbers if two numbers, add sign and equal sing is clicked", () => {
    const { getByTestId, getByRole } = render(<Calculator />);
    const btn1 = getByRole("button", { name: "8" });
    const btnOperator = getByRole("button", { name: "+" });
    const btn2 = getByRole("button", { name: "2" });
    const equalBttn = getByRole("button", { name: "=" });
    fireEvent.click(btn1);
    fireEvent.click(btnOperator);
    fireEvent.click(btn2);
    fireEvent.click(equalBttn);
    expect(Number(getByTestId("output-test").textContent)).toEqual(10);
  });


  it("Calculator should subtract two numbers if two numbers, minus sign and equal sing is clicked", () => {
    const { getByTestId, getByRole } = render(<Calculator />);
    const btn1 = getByRole("button", { name: "8" });
    const btnOperator = getByRole("button", { name: "-" });
    const btn2 = getByRole("button", { name: "2" });
    const equalBttn = getByRole("button", { name: "=" });
    fireEvent.click(btn1);
    fireEvent.click(btnOperator);
    fireEvent.click(btn2);
    fireEvent.click(equalBttn);
    expect(Number(getByTestId("output-test").textContent)).toEqual(6);
  });

  it("Calculator should divide two numbers if two numbers, ÷ sign and equal sing is clicked", () => {
    const { getByTestId, getByRole } = render(<Calculator />);
    const btn1 = getByRole("button", { name: "8" });
    const btnOperator = getByRole("button", { name: "÷" });
    const btn2 = getByRole("button", { name: "2" });
    const equalBttn = getByRole("button", { name: "=" });
    fireEvent.click(btn1);
    fireEvent.click(btnOperator);
    fireEvent.click(btn2);
    fireEvent.click(equalBttn);
    expect(Number(getByTestId("output-test").textContent)).toEqual(4);
  });

  it("Calculator should multiply two numbers if two numbers, x sign and equal sing is clicked", () => {
    const { getByTestId, getByRole } = render(<Calculator />);
    const btn1 = getByRole("button", { name: "8" });
    const btnOperator = getByRole("button", { name: "x" });
    const btn2 = getByRole("button", { name: "2" });
    const equalBttn = getByRole("button", { name: "=" });
    fireEvent.click(btn1);
    fireEvent.click(btnOperator);
    fireEvent.click(btn2);
    fireEvent.click(equalBttn);
    expect(Number(getByTestId("output-test").textContent)).toEqual(16);
  });

  it("Calculator should return the remainder of two numbers if two numbers, % sign and equal sing is clicked", () => {
    const { getByTestId, getByRole } = render(<Calculator />);
    const btn1 = getByRole("button", { name: "8" });
    const btnOperator = getByRole("button", { name: "%" });
    const btn2 = getByRole("button", { name: "3" });
    const equalBttn = getByRole("button", { name: "=" });
    fireEvent.click(btn1);
    fireEvent.click(btnOperator);
    fireEvent.click(btn2);
    fireEvent.click(equalBttn);
    expect(Number(getByTestId("output-test").textContent)).toEqual(2);
  });

  it("Calculator should clear every thing when AC button is clicked", () => {
    const { getByTestId, getByRole } = render(<Calculator />);
    const btnOperator = getByRole("button", { name: "AC" });
    fireEvent.click(btnOperator);
    expect(Number(getByTestId("output-test").textContent)).toEqual(0);
  });

});
