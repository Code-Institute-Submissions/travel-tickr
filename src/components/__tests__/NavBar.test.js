import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import NavBar from "../NavBar";
import { CurrentUserProvider } from "../../contexts/CurrentUserContext";
import { act } from "react-dom/test-utils";

test("renders NavBar links to not logged in users", () => {
  render(
    <Router>
      <NavBar />
    </Router>
  );

  //   screen.debug();

  // Check to see if login link is rendered to the user
  const logInLink = screen.getByRole("link", { name: "Login" });
  expect(logInLink).toBeInTheDocument();

  // Check to see if signup link is rendered to the user
  const signUpLink = screen.getByRole("link", { name: "Sign up" });
  expect(signUpLink).toBeInTheDocument();

  // Check to see if home link is rendered to the user
  const homeLink = screen.getByRole("link", { name: "Home" });
  expect(homeLink).toBeInTheDocument();
});

// test to see if links render for logged in users
test("renders link and avatar in navbar to the logged in user", async () => {
  render(
    <Router>
      <CurrentUserProvider>
        <NavBar />
      </CurrentUserProvider>
    </Router>
  );

  // Check to see if avatar is rendered in the navbar
  const avatar = await screen.findByAltText("avatar");
  expect(avatar).toBeInTheDocument();

  // Check to see if add Memory link is rendered to the logged in user
  const addMemoryLink = screen.getByRole("link", { name: "Memory" });
  expect(addMemoryLink).toBeInTheDocument();

  // Check to see if the link for sorting by following is rendered to the logged in user
  const followingLink = screen.getByRole("link", { name: "Following" });
  expect(followingLink).toBeInTheDocument();

  // Check to see if bucketlist link is rendered to the logged in user
  const bucketlistLink = screen.getByRole("link", { name: "Bucketlist" });
  expect(bucketlistLink).toBeInTheDocument();
});

test("renders Sign in and Sign up buttons again on log out", async () => {
  render(
    <Router>
      <CurrentUserProvider>
        <NavBar />
      </CurrentUserProvider>
    </Router>
  );

  const logOutLink = await screen.findByRole("link", { name: "Log out" });
  act(() => {
    fireEvent.click(logOutLink);
  })

  const logInLink = await screen.findByRole("link", { name: "Login" });
  const signUpLink = await screen.findByRole("link", { name: "Sign up" });

  expect(logInLink).toBeInTheDocument();
  expect(signUpLink).toBeInTheDocument();
});
