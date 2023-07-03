import React from "react";
import { useCurrentUser } from "../../contexts/CurrentUserContext";

import styles from "../../styles/Post.module.css";

import Card from "react-bootstrap/Card";
import Media from "react-bootstrap/Media";
import { Link } from "react-router-dom";
import Avatar from "../../components/Avatar";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import { axiosReq, axiosRes } from "../../api/axiosDefaults";
import { MoreDropdown } from "../../components/MoreDropdown";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const Post = (props) => {
  const {
    id,
    owner,
    traveler_id,
    traveler_image,
    comments_count,
    likes_count,
    like_id,
    bucketlists_count,
    bucketlist_id,
    title,
    content,
    truncated,
    image,
    updated_at,
    postPage,
    setPosts,
    location,
    country,
  } = props;

  const currentUser = useCurrentUser();
  const is_owner = currentUser?.username === owner;
  const history = useHistory();

  const handleEdit = () => {
    history.push(`/posts/${id}/edit`);
  };

  const handleDelete = async () => {
    try {
      await axiosRes.delete(`/posts/${id}/`);
      history.goBack();
    } catch (err) {
      console.log(err);
    }
  };

  const handleLike = async () => {
    try {
      const { data } = await axiosReq.post("/likes/", { post: id });
      setPosts((prevPosts) => ({
        ...prevPosts,
        results: prevPosts.results.map((post) => {
          return post.id === id
            ? { ...post, likes_count: post.likes_count + 1, like_id: data.id }
            : post;
        }),
      }));
    } catch (err) {
      console.log(err);
    }
  };

  const handleBucketlist = async () => {
    try {
      const { data } = await axiosReq.post("/bucketlist/", { post: id });
      setPosts((prevPosts) => ({
        ...prevPosts,
        results: prevPosts.results.map((post) => {
          return post.id === id
            ? {
                ...post,
                bucketlists_count: post.bucketlists_count + 1,
                bucketlist_id: data.id,
              }
            : post;
        }),
      }));
    } catch (err) {
      console.log(err);
    }
  };

  const handleUnlike = async () => {
    try {
      await axiosReq.delete(`/likes/${like_id}/`);
      setPosts((prevPosts) => ({
        ...prevPosts,
        results: prevPosts.results.map((post) => {
          return post.id === id
            ? { ...post, likes_count: post.likes_count - 1, like_id: null }
            : post;
        }),
      }));
    } catch (err) {
      console.log(err);
    }
  };

  const handleRemoveFromBucketlist = async () => {
    try {
      await axiosReq.delete(`/bucketlist/${bucketlist_id}/`);
      setPosts((prevPosts) => ({
        ...prevPosts,
        results: prevPosts.results.map((post) => {
          return post.id === id
            ? {
                ...post,
                bucketlists_count: post.bucketlists_count - 1,
                bucketlist_id: null,
              }
            : post;
        }),
      }));
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Card className={styles.Post}>
      <Card.Body>
        <Media className="d-flex align-items-center justify-content-between">
          <Link to={`/travelers/${traveler_id}`}>
            <Avatar src={traveler_image} height={55} />
            {owner}
          </Link>
          <div className="d-flex align-items-center">
            <span className={styles.smallText}>{updated_at}</span>
            {is_owner && postPage && (
              <MoreDropdown
                handleEdit={handleEdit}
                handleDelete={handleDelete}
              />
            )}
          </div>
        </Media>
      </Card.Body>
      <Link to={`/posts/${id}`}>
        <Card.Img src={image} alt={title} />
      </Link>
      <Card.Body>
        {title && <Card.Title className={`text-center ${styles.TitleText}`}>{title}</Card.Title>}
        {truncated && content && (
          <Card.Text>{content.substring(0, 200)} ...</Card.Text>
        )}
        {!truncated && content && <Card.Text>{content}</Card.Text>}

        <div className={styles.PostBar}>
          {is_owner ? (
            <OverlayTrigger
              placement="top"
              overlay={<Tooltip>You can't like your own post!</Tooltip>}
            >
              <i className="far fa-heart" />
            </OverlayTrigger>
          ) : like_id ? (
            <span onClick={handleUnlike}>
              <i className={`fas fa-heart ${styles.Heart}`} />
            </span>
          ) : currentUser ? (
            <span onClick={handleLike}>
              <i className={`far fa-heart ${styles.HeartOutline}`} />
            </span>
          ) : (
            <OverlayTrigger
              placement="top"
              overlay={<Tooltip>Log in to like posts!</Tooltip>}
            >
              <i className="far fa-heart" />
            </OverlayTrigger>
          )}
          {likes_count}
          <Link to={`/posts/${id}`}>
            <i className="far fa-comments" />
          </Link>
          {comments_count}
          {bucketlist_id ? (
            <span onClick={handleRemoveFromBucketlist}>
              <i className={`fa-solid fa-bucket ${styles.Heart}`} />
            </span>
          ) : (
            <span onClick={handleBucketlist}>
              <i className={`fa-solid fa-bucket ${styles.HeartOutline}`} />
            </span>
          )}
          {bucketlists_count}
        </div>
        <hr />
        <div className="d-flex align-items-center justify-content-end">
          <span className={styles.smallText}>
            With love from {location} in {country}
          </span>
        </div>
      </Card.Body>
    </Card>
  );
};

export default Post;
