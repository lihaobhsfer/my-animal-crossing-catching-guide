import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

Object.defineProperty(window, "matchMedia", {
  writable: true,
  value: jest.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(), // deprecated
    removeListener: jest.fn(), // deprecated
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
});

test("shows northern hemisphere", () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/northern hemisphere/i);
  expect(linkElement).toBeInTheDocument();
});
