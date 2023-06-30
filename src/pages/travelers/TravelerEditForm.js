import React, { useState, useEffect, useRef } from "react";
import { useHistory, useParams } from "react-router-dom";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Alert from "react-bootstrap/Alert";

import { axiosReq } from "../../api/axiosDefaults";
import {
  useCurrentUser,
  useSetCurrentUser,
} from "../../contexts/CurrentUserContext";

import btnStyles from "../../styles/Button.module.css";
import appStyles from "../../App.module.css";

const TravelerEditForm = () => {
  const currentUser = useCurrentUser();
  const setCurrentUser = useSetCurrentUser();
  const { id } = useParams();
  const history = useHistory();
  const imageFile = useRef();

  const [travelerData, setTravelerData] = useState({
    name: "",
    content: "",
    image: "",
    favorite_place: "",
    one_important_thing: "",
  });

  const { name, content, image, favorite_place, one_important_thing } =
    travelerData;

  const [errors, setErrors] = useState({});

  useEffect(() => {
    const handleMount = async () => {
      if (currentUser?.traveler_id?.toString() === id) {
        try {
          const { data } = await axiosReq.get(`/travelers/${id}/`);
          const { name, content, image, favorite_place, one_important_thing } =
            data;
          setTravelerData({
            name,
            content,
            image,
            favorite_place,
            one_important_thing,
          });
        } catch (err) {
          console.log(err);
          history.push("/");
        }
      } else {
        history.push("/");
      }
    };

    handleMount();
  }, [currentUser, history, id]);

  const handleChange = (event) => {
    setTravelerData({
      ...travelerData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("name", name);
    formData.append("content", content);
    formData.append("favorite_place", favorite_place);
    formData.append("one_important_thing", one_important_thing);

    if (imageFile?.current?.files[0]) {
      formData.append("image", imageFile?.current?.files[0]);
    }

    try {
      const { data } = await axiosReq.put(`/travelers/${id}/`, formData);
      setCurrentUser((currentUser) => ({
        ...currentUser,
        traveler_image: data.image,
      }));
      history.goBack();
    } catch (err) {
      console.log(err);
      setErrors(err.response?.data);
    }
  };

  const textFields = (
    <>
      <Form.Group>
        <Form.Label>Bio</Form.Label>
        <Form.Control
          as="textarea"
          value={content}
          onChange={handleChange}
          name="content"
          rows={7}
        />
      </Form.Group>

      {errors?.content?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
          {message}
        </Alert>
      ))}
      <Form.Group>
        <Form.Label className="mt-3">
          What is your favorite place on earth?
        </Form.Label>
        <Form.Control
          type="text"
          value={favorite_place}
          onChange={handleChange}
          name="favorite_place"
        />
        <Form.Label className="mt-3">
          If you could only pack one thing on your next trip, what would it be?
        </Form.Label>
        <Form.Control
          type="text"
          value={one_important_thing}
          onChange={handleChange}
          name="one_important_thing"
        />
      </Form.Group>
      <Button
        className={`mt-3 me-1 ${btnStyles.Button} ${btnStyles.Bright}`}
        onClick={() => history.goBack()}
      >
        cancel
      </Button>
      <Button
        className={`mt-3 ms-1  ${btnStyles.Button} ${btnStyles.Blue}`}
        type="submit"
      >
        save
      </Button>
    </>
  );

  return (
    <Form onSubmit={handleSubmit}>
      <Row>
        <Col className="py-2 p-0 p-md-2 text-center" md={7} lg={6}>
          <Container className={appStyles.Content}>
            <Form.Group>
              {image && (
                <figure>
                  <Image src={image} fluid />
                </figure>
              )}
              {errors?.image?.map((message, idx) => (
                <Alert variant="warning" key={idx}>
                  {message}
                </Alert>
              ))}
              <div>
                <Form.Label
                  className={`${btnStyles.Button} ${btnStyles.Blue} btn my-auto`}
                  htmlFor="image-upload"
                >
                  Change the image
                </Form.Label>
              </div>
              <Form.File
                id="image-upload"
                ref={imageFile}
                accept="image/*"
                onChange={(e) => {
                  if (e.target.files.length) {
                    setTravelerData({
                      ...travelerData,
                      image: URL.createObjectURL(e.target.files[0]),
                    });
                  }
                }}
              />
            </Form.Group>

            <div className="d-md-none">{textFields}</div>
          </Container>
        </Col>
        <Col md={5} lg={6} className="d-none d-md-block p-0 p-md-2 text-center">
          <Container className={appStyles.Content}>{textFields}</Container>
        </Col>
      </Row>
    </Form>
  );
};

export default TravelerEditForm;
