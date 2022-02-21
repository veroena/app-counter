import React from "react";
import { render } from "@testing-library/react";
import App from "./App";
import userEvent from "@testing-library/user-event";

test("should show 5 initial 0s", () => {
  const { getAllByText } = render(<App />);
  const linkElement = getAllByText("0");
  expect(linkElement.length).toEqual(5);
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

test("should show total value", () => {
  const { getAllByTestId, getByTestId } = render(<App />);
  const increaseButtons = getAllByTestId("increase");
  const decreaseButtons = getAllByTestId("decrease");
  const total = getByTestId("total");
  increaseButtons.map(item => userEvent.click(item));
  expect(+total.innerHTML).toEqual(4);
  decreaseButtons.map(item => userEvent.click(item));
  expect(+total.innerHTML).toEqual(0);
  increaseButtons.map(item => userEvent.click(item));
  increaseButtons.map(item => userEvent.click(item));
  expect(+total.innerHTML).toEqual(8);
  userEvent.click(decreaseButtons[0]);
  expect(+total.innerHTML).toEqual(7);
});
