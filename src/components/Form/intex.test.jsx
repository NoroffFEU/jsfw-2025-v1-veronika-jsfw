import { render, screen, fireEvent } from "@testing-library/react";
import Form from "./index";

test("shows validation error for empty form", async () => {
  render(<Form />);

  fireEvent.click(screen.getByRole("button", { name: /submit/i }));

  expect(await screen.findByText(/full name/i)).toBeInTheDocument();
  expect(await screen.findByText(/your email/i)).toBeInTheDocument();
});
