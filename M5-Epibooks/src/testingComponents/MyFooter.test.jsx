import { render, screen } from "@testing-library/react";
import MyFooter from "../components/MyFooter";

test("render footer text", () => {
  render(<MyFooter />);
  const footerText = screen.getByText(/Copyright 2024/i);
  expect(footerText).toBeInTheDocument();
});
