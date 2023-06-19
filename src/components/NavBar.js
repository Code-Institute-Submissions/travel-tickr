import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import logo from "../assets/logo.webp";
import { NavLink } from "react-router-dom";
import styles from "../styles/NavBar.module.css";

const NavBar = () => {
  return (
    <Navbar expand="lg" fixed="top">
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
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
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
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button className={styles.ButtonPrimary}>
              Search
            </Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
