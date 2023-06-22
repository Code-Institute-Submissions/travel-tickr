import React, { useEffect, useRef, useState } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../assets/logo.webp";
import { NavLink } from "react-router-dom";
import styles from "../styles/NavBar.module.css";
import btnStyles from "../styles/Button.module.css";
import {
  useCurrentUser,
  useSetCurrentUser,
} from "../contexts/CurrentUserContext";
import Avatar from "./Avatar";
import axios from "axios";

const NavBar = () => {
  const currentUser = useCurrentUser();
  const setCurrentUser = useSetCurrentUser();

  const [expanded, setExpanded] = useState(false);
  const ref = useRef(null);
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setExpanded(false);
      }
    };

    document.addEventListener('mouseup', handleClickOutside)
    return () => {
      document.removeEventListener('mouseup', handleClickOutside)
    }
  }, [ref]);

  const handleSignOut = async () => {
    try {
      await axios.post("dj-rest-auth/logout/");
      setCurrentUser(null);
    } catch (err) {
      console.log(err);
    }
  };

  const addMemoryIcon = (
    <NavLink
      to="/posts/create"
      className={styles.NavLink}
      activeClassName={styles.Active}
    >
      <i className="fa-solid fa-circle-plus"></i>Memory
    </NavLink>
  );

  const loggedInIcons = (
    <>
      <NavLink
        to="/feed"
        className={styles.NavLink}
        activeClassName={styles.Active}
      >
        <i className="fa-sharp fa-regular fa-images"></i>Feed
      </NavLink>
      <NavLink
        to="/liked"
        className={styles.NavLink}
        activeClassName={styles.Active}
      >
        <i className="fa-solid fa-heart"></i>Liked
      </NavLink>
      <NavLink to="/" onClick={handleSignOut} className={styles.NavLink}>
        <i className="fa-solid fa-door-closed"></i>Logout
      </NavLink>
      <NavLink className={styles.NavLink} to={`/travelers/${currentUser?.pk}`}>
        <Avatar src={currentUser?.traveler_image} height={40} />
        {currentUser?.username}
      </NavLink>
    </>
  );

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
        to="signup"
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
            className={`me-auto my-2 my-lg-0 ${styles.navBarScroll}`}
            style={{ maxHeight: "250px" }}
            navbarScroll
          >
            <NavLink
              exact
              to="/"
              className={styles.NavLink}
              activeClassName={styles.Active}
            >
              <i className="fa-solid fa-house me-1"></i>Home
            </NavLink>

            {currentUser ? loggedInIcons : loggedOutIcons}
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button className={`${btnStyles.Button} ${btnStyles.Bright}`}>
              Search
            </Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
