import React from "react";
import { render } from "@testing-library/react";
import App from "./App";
import userEvent from "@testing-library/user-event";

test("should show 4 initial 0s", () => {
  const { getAllByText } = render(<App />);
  const linkElement = getAllByText("0");
  expect(linkElement.length).toEqual(4);
});

test("should increase value by 1 when clicking button", () => {
  const { getAllByTestId } = render(<App />);
  const increaseButtons = getAllByTestId("increase");
  const values = getAllByTestId("value");
  expect(increaseButtons.length).toEqual(4);
  expect(values.length).toEqual(4);
  values.map(item => expect(+item.innerHTML).toEqual(0))
  increaseButtons.map(item => userEvent.click(item));
  values.map(item => expect(+item.innerHTML).toEqual(1))
});

test("should decrease value by 1 when clicking button", () => {
  const { getAllByTestId } = render(<App />);
  const decreaseButtons = getAllByTestId("decrease");
  const values = getAllByTestId("value");
  expect(decreaseButtons.length).toEqual(4);
  expect(values.length).toEqual(4);
  values.map(item => expect(+item.innerHTML).toEqual(0))
  decreaseButtons.map(item => userEvent.click(item));
  decreaseButtons.map(item => userEvent.click(item));
  values.map(item => expect(+item.innerHTML).toEqual(-2))
});