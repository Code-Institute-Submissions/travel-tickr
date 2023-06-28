import React, { useState } from "react";

import styles from "../../styles/Comment.module.css";
import CommentEditForm from "./CommentEditForm";

import { Link } from "react-router-dom/";
import { Media } from "react-bootstrap";
import Avatar from "../../components/Avatar";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { MoreDropdown } from "../../components/MoreDropdown";
import { axiosRes } from "../../api/axiosDefaults";

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
  } = props;

  const [setShowEditForm, setShowEditForm] = useState(false);

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
          {showEditForm ? <CommentEditForm /> : <p>{content}</p>}
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
