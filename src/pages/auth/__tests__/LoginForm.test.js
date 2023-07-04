import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import LogInForm from "../LoginForm";

test("renders Login page ", () => {
  render(
    <Router>
      <LogInForm />
    </Router>
  );

  //   screen.debug();

  // Check to see if username field is rendered to the user
  const usernameField = screen.getByPlaceholderText('Enter username');
  expect(usernameField).toBeInTheDocument();

  const passwordField = screen.getByPlaceholderText('Password');
  expect(passwordField).toBeInTheDocument();

  const submitButton = screen.getByRole("button", { name: "Login" });
  expect(submitButton).toBeInTheDocument();

});
