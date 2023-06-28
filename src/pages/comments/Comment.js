import React from "react";
import styles from "../../styles/Comment.module.css";
import { Link } from "react-router-dom/";
import { Media } from "react-bootstrap";
import Avatar from "../../components/Avatar";

const Comment = (props) => {
  const { traveler_id, traveler_image, owner, updated_at, content } = props;

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
          <p>{content}</p>
        </Media.Body>
      </Media>
    </div>
  );
};

export default Comment;
