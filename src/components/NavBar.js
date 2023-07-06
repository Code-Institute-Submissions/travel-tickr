import React, { useRef } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../assets/logo.webp";
import { NavLink } from "react-router-dom";
import styles from "../styles/NavBar.module.css";
import {
  useCurrentUser,
  useSetCurrentUser,
} from "../contexts/CurrentUserContext";
import Avatar from "./Avatar";
import axios from "axios";
import useClickOutsideToggle from "../hooks/useClickOutsideToggle";
import { removeTokenTimestamp } from "../utils/utils";

// The navigation bar component for the application
const NavBar = () => {
  const currentUser = useCurrentUser();
  const setCurrentUser = useSetCurrentUser();
  const searchRef = useRef(null);

  const { expanded, setExpanded, ref } = useClickOutsideToggle({
    ignoreRefs: [searchRef],
  });

  const handleSignOut = async () => {
    try {
      await axios.post("dj-rest-auth/logout/");
      setCurrentUser(null);
      removeTokenTimestamp();
    } catch (err) {
      console.log(err);
    }
  };

  // Icon for adding a memory
  const addMemoryIcon = (
    <NavLink
      to="/posts/create"
      className={styles.NavLink}
      activeClassName={styles.Active}
    >
      <i className="fa-solid fa-circle-plus"></i>Memory
    </NavLink>
  );

  // Icons shown when user is logged in
  const loggedInIcons = (
    <>
      <NavLink
        to="/feed"
        className={styles.NavLink}
        activeClassName={styles.Active}
      >
        <i className={`fa-solid fa-shoe-prints ${styles.RotatedIcon}`}></i>
        Following
      </NavLink>
      <NavLink
        to="/bucketlist"
        className={styles.NavLink}
        activeClassName={styles.Active}
      >
        <i className="fa-solid fa-bucket"></i>Bucketlist
      </NavLink>
      <NavLink to="/" onClick={handleSignOut} className={styles.NavLink}>
        <i className="fa-solid fa-door-closed"></i>Logout
      </NavLink>
      <NavLink className={styles.NavLink} to={`/travelers/${currentUser?.pk}`}>
        <Avatar src={currentUser?.traveler_image} height={40} alt="traveler" />
        {currentUser?.username}
      </NavLink>
    </>
  );

  // Icons shown when user is logged out
  const loggedOutIcons = (
    <>
      <NavLink
        to="/login"
        className={styles.NavLink}
        activeClassName={styles.Active}
      >
        <i className="fa-solid fa-door-open me-1"></i>Login
      </NavLink>
      <NavLink
        to="/signup"
        className={styles.NavLink}
        activeClassName={styles.Active}
      >
        <i className="fa-solid fa-user-plus me-1"></i>Sign up
      </NavLink>
    </>
  );

  return (
    <Navbar
      expanded={expanded}
      expand="lg"
      fixed="top"
      className={styles.NavBar}
    >
      <Container fluid>
        <NavLink to="/" className={styles.NavLink}>
          <Navbar.Brand>
            <img
              src={logo}
              width="auto"
              height="60"
              className="d-inline-block align-top"
              alt="Travel Tickr logo"
            />
          </Navbar.Brand>
        </NavLink>
        {currentUser && addMemoryIcon}
        <Navbar.Toggle
          ref={ref}
          onClick={() => setExpanded(!expanded)}
          aria-controls="navbarScroll"
        />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className={`ms-auto my-2 my-lg-0 ${styles.navBarScroll} justify-content-end`}
            style={{ maxHeight: "250px" }}
            navbarScroll
          >
            <NavLink
              exact
              to="/"
              className={styles.NavLink}
              activeClassName={styles.Active}
            >
              <i className="fa-solid fa-house me-2"></i>Home
            </NavLink>
            <NavLink
              exact
              to="/about"
              className={styles.NavLink}
              activeClassName={styles.Active}
            >
              <i className="fa-solid fa-circle-info"></i>About
            </NavLink>
            {currentUser ? loggedInIcons : loggedOutIcons}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
