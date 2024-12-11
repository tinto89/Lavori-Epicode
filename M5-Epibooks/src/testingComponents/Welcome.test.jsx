import React from "react";
import { render, screen } from "@testing-library/react";
import Welcome from "../components/Welcome";

test("render Welcome component", () => {
  render(<Welcome category={"horror"} />);
  const welcomeText = screen.getByText(/EpiBooks: our library/i);
  expect(welcomeText).toBeInTheDocument();
});
