import React from "react";
import {useCurrentUser} from "../../contexts/CurrentUserContext"

import styles from "../../styles/Post.module.css";
import Card from 'react-bootstrap/Card';
import { Media } from "react-bootstrap";
import { Link } from "react-router-dom";
import Avatar from "../../components/Avatar"

const Post = (props) => {
  const {
    id,
    owner,
    traveler_id,
    traveler_image,
    comments_count,
    likes_count,
    like_id,
    title,
    content,
    image,
    updated_at,
    postPage,
  } = props;

  const currentUser = useCurrentUser;
  const is_owner = currentUser?.username === owner;

  return (
    <Card className={styles.Post}>
      <Card.Body>
        <Media className="align-items-center justify-content-between">
          <Link to={`/travelers/${traveler_id}`}>
            <Avatar src={traveler_image} height={55} />
          </Link>
        </Media>
      </Card.Body>
    </Card>
  );
};

export default Post;
