import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

import styles from "../../styles/CommentCreateEditForm.module.css";
import alertStyles from "../../styles/AlertMessages.module.css";
import Avatar from "../../components/Avatar";
import { axiosRes } from "../../api/axiosDefaults";
import Alert from "react-bootstrap/Alert";

function CommentCreateForm(props) {
  // Props destructuring
  const { post, setPost, setComments, travelerImage, traveler_id } = props;

  // State initialization
  const [content, setContent] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  // Event handlers
  const handleChange = (event) => {
    setContent(event.target.value);
  };

  useEffect(() => {
    if (successMessage) {
      const timer = setTimeout(() => {
        setSuccessMessage("");
      }, 5000); // 5000 ms = 5 seconds

      return () => clearTimeout(timer);
    }
  }, [successMessage]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data } = await axiosRes.post("/comments/", {
        content,
        post,
      });
      setComments((prevComments) => ({
        ...prevComments,
        results: [data, ...prevComments.results],
      }));
      setPost((prevPost) => ({
        results: [
          {
            ...prevPost.results[0],
            comments_count: prevPost.results[0].comments_count + 1,
          },
        ],
      }));
      setContent("");
      setSuccessMessage("Your comment was successfully posted.");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div>
        {successMessage && (
          <Alert
            variant="success"
            className={alertStyles["alert-success-custom"]}
          >
            {successMessage}
          </Alert>
        )}
      </div>
      <Form className="mt-2" onSubmit={handleSubmit}>
        <Form.Group>
          <InputGroup>
            <Link to={`/travelers/${traveler_id}`}>
              <Avatar src={travelerImage} />
            </Link>
            <Form.Control
              className={styles.Form}
              placeholder="my comment..."
              as="textarea"
              value={content}
              onChange={handleChange}
              rows={2}
            />
          </InputGroup>
        </Form.Group>
        <button
          className={`${styles.Button} d-block ms-auto`}
          disabled={!content.trim()}
          type="submit"
        >
          post
        </button>
      </Form>
    </>
  );
}

export default CommentCreateForm;
