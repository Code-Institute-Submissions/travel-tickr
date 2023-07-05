import React, { useState } from "react";

import styles from "../../styles/Comment.module.css";
import btnStyles from "../../styles/Button.module.css";
import CommentEditForm from "./CommentEditForm";

import { Link } from "react-router-dom/";
import Avatar from "../../components/Avatar";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { MoreDropdown } from "../../components/MoreDropdown";
import { axiosRes, axiosReq } from "../../api/axiosDefaults";

import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import Media from "react-bootstrap/Media";

const Comment = (props) => {
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
  } = props;

  const [showEditForm, setShowEditForm] = useState(false);

  const currentUser = useCurrentUser();
  const is_owner = currentUser?.username === owner;

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
    <div>
      <hr />
      <Media className="d-flex">
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
            />
          ) : (
            <div className="d-flex justify-content-between align-items-end">
              <p>{content}</p>
              <div className="d-flex align-items-center">
                {likes_count}
                {is_owner ? (
                  <OverlayTrigger
                    placement="top"
                    overlay={
                      <Tooltip>You can't like your own comment!</Tooltip>
                    }
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
            </div>
          )}
        </Media.Body>
        {is_owner && !showEditForm && (
          <MoreDropdown
            handleEdit={() => setShowEditForm(true)}
            handleDelete={handleDelete}
          />
        )}
      </Media>
    </div>
  );
};

export default Comment;
