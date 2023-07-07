import React, { useState, useEffect } from "react";

import styles from "../../styles/Comment.module.css";
import counterStyles from "../../styles/Counter.module.css";
import CommentEditForm from "./CommentEditForm";
import alertStyles from "../../styles/AlertMessages.module.css";

import { Link } from "react-router-dom/";
import Avatar from "../../components/Avatar";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { MoreDropdown } from "../../components/MoreDropdown";
import { axiosRes, axiosReq } from "../../api/axiosDefaults";

import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import Media from "react-bootstrap/Media";
import Alert from "react-bootstrap/Alert";

const Comment = (props) => {
  // Props destructuring
  const {
    traveler_id,
    traveler_image,
    owner,
    updated_at,
    content,
    id,
    setPost,
    setComments,
    likes_count,
    like_id,
    setCommentSuccessMessage
  } = props;

  // State and hooks initialization
  const [showEditForm, setShowEditForm] = useState(false);
  const currentUser = useCurrentUser();
  const is_owner = currentUser?.username === owner;
  const [successMessage, setSuccessMessage] = useState(null);


  useEffect(() => {
    if (successMessage) {
      const timer = setTimeout(() => {
        setSuccessMessage(null);
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [successMessage]);

  // Event handlers
  const handleDelete = async () => {
    try {
      await axiosRes.delete(`/comments/${id}/`);
      setPost((prevPost) => ({
        results: [
          {
            ...prevPost.results[0],
            comments_count: prevPost.results[0].comments_count - 1,
          },
        ],
      }));

      setComments((prevComments) => ({
        ...prevComments,
        results: prevComments.results.filter((comment) => comment.id !== id),
      }));

      setCommentSuccessMessage("Comment deleted successfully!");
    } catch (err) {}
  };

  const handleLike = async () => {
    try {
      const { data } = await axiosReq.post("/likes/", { comment: id });
      setComments((prevComments) => ({
        ...prevComments,
        results: prevComments.results.map((comment) => {
          return comment.id === id
            ? {
                ...comment,
                likes_count: comment.likes_count + 1,
                like_id: data.id,
              }
            : comment;
        }),
      }));
    } catch (err) {
      console.log(err);
    }
  };

  const handleUnlike = async () => {
    try {
      await axiosReq.delete(`/likes/${like_id}/`);
      setComments((prevComments) => ({
        ...prevComments,
        results: prevComments.results.map((comment) => {
          return comment.id === id
            ? {
                ...comment,
                likes_count: comment.likes_count - 1,
                like_id: null,
              }
            : comment;
        }),
      }));
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      {successMessage && (
        <Alert
          variant="success"
          className={alertStyles["alert-success-custom"]}
        >
          {successMessage}
        </Alert>
      )}
      <div>
        <hr />
        <Media className={styles.mediaGroup}>
          <Link to={`/travelers/${traveler_id}`}>
            <Avatar src={traveler_image} />
          </Link>
          <Media.Body className={styles.Body}>
            <div className="d-flex">
              <span className={styles.Owner}>{owner}</span>
              <span className={styles.Date}>{updated_at}</span>
            </div>
            {showEditForm ? (
              <CommentEditForm
                id={id}
                traveler_id={traveler_id}
                content={content}
                traveler_image={traveler_image}
                setComments={setComments}
                setShowEditForm={setShowEditForm}
                setSuccessMessage={setSuccessMessage}
              />
            ) : (
              <div className="d-flex justify-content-between align-items-end">
                <p className={styles.commentText}>{content}</p>
              </div>
            )}
          </Media.Body>
          <div className={styles.iconsRight}>
            <div className="d-flex align-items-end">
              <span className={counterStyles.counter}>{likes_count}</span>
              {is_owner ? (
                <OverlayTrigger
                  placement="top"
                  overlay={<Tooltip>You can't like your own comment!</Tooltip>}
                >
                  <i className="fa-solid fa-thumbs-up"></i>
                </OverlayTrigger>
              ) : like_id ? (
                <span onClick={handleUnlike}>
                  <i className={`fa-solid fa-thumbs-up ${styles.Heart}`} />
                </span>
              ) : currentUser ? (
                <span onClick={handleLike}>
                  <i
                    className={`fa-solid fa-thumbs-up ${styles.HeartOutline}`}
                  />
                </span>
              ) : (
                <OverlayTrigger
                  placement="top"
                  overlay={<Tooltip>Log in to like comments!</Tooltip>}
                >
                  <i className="fa-solid fa-thumbs-up" />
                </OverlayTrigger>
              )}
            </div>
            {is_owner && !showEditForm && (
              <MoreDropdown
                handleEdit={() => setShowEditForm(true)}
                handleDelete={handleDelete}
              />
            )}
          </div>
        </Media>
      </div>
    </>
  );
};

export default Comment;
