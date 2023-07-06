import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";

import styles from "../../styles/SignInUpForm.module.css";
import btnStyles from "../../styles/Button.module.css";
import appStyles from "../../App.module.css";
import alertStyles from "../../styles/AlertMessages.module.css";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Alert from "react-bootstrap/Alert";

import axios from "axios";
import { useRedirect } from "../../hooks/useRedirect";

const SignUpForm = () => {
  useRedirect("loggedIn");
  const [signUpData, setSignUpData] = useState({
    username: "",
    password1: "",
    password2: "",
  });
  const { username, password1, password2 } = signUpData;

  const [errors, setErrors] = useState({});

  const history = useHistory();

  const handleChange = (event) => {
    setSignUpData({
      ...signUpData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post("/dj-rest-auth/registration/", signUpData);
      history.push("/login");
    } catch (err) {
      setErrors(err.response?.data);
    }
  };

  return (
    <Row className={styles.Row}>
      <Col
        md={6}
        className={`my-auto d-none d-md-block p-2 ${styles.SignUpCol}`}
      >
        <Image
          className={`${appStyles.FillerImage}`}
          src={
            "https://res.cloudinary.com/sandrabergstrom/image/upload/v1687254447/blog_lwavan.png"
          }
        />
      </Col>
      <Col className="my-auto py-2 p-md-2" md={6}>
        <Container className={`${styles.Content} p-4 `}>
          <h1 className={styles.Header}>sign up</h1>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="username">
              <Form.Label className="d-none">Username</Form.Label>
              <Form.Control
                className={styles.Input}
                type="text"
                placeholder="Username"
                name="username"
                I
                value={username}
                onChange={handleChange}
              />
            </Form.Group>
            {errors.username?.map((message, idx) => (
              <Alert
                variant="warning"
                key={idx}
                className={alertStyles["alert-warning-custom"]}
              >
                {message}
              </Alert>
            ))}

            <Form.Group className="mb-3" controlId="password1">
              <Form.Label className="d-none">Password</Form.Label>
              <Form.Control
                className={styles.Input}
                type="password"
                placeholder="Password"
                name="password1"
                value={password1}
                onChange={handleChange}
              />
            </Form.Group>
            {errors.password1?.map((message, idx) => (
              <Alert
                variant="warning"
                className={alertStyles["alert-warning-custom"]}
                key={idx}
              >
                {message}
              </Alert>
            ))}

            <Form.Group className="mb-3" controlId="password2">
              <Form.Label className="d-none">Confirm password</Form.Label>
              <Form.Control
                className={styles.Input}
                type="password"
                placeholder="Confirm password"
                name="password2"
                value={password2}
                onChange={handleChange}
              />
            </Form.Group>
            {errors.password2?.map((message, idx) => (
              <Alert
                variant="warning"
                className={alertStyles["alert-warning-custom"]}
                key={idx}
              >
                {message}
              </Alert>
            ))}

            <Button
              className={`${btnStyles.Button} ${btnStyles.Wide} ${btnStyles.Blue}`}
              type="submit"
            >
              Sign up!
            </Button>
            {errors.non_field_errors?.map((message, idx) => (
              <Alert
                variant="warning"
                key={idx}
                className={alertStyles["alert-warning-custom"]}
              >
                {message}
              </Alert>
            ))}
          </Form>
        </Container>
        <Container className={`mt-3 ${styles.Content}`}>
          <Link className={styles.Link} to="/login">
            Already have an account? <span>Sign in</span>
          </Link>
        </Container>
      </Col>
    </Row>
  );
};

export default SignUpForm;
