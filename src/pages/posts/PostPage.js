import React, { useEffect, useState } from "react";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Alert from "react-bootstrap/Alert";

import appStyles from "../../App.module.css";
import alertStyles from "../../styles/AlertMessages.module.css"
import { useParams } from "react-router-dom";
import { axiosReq } from "../../api/axiosDefaults";
import Post from "./Post";
import PopularTravelers from "../travelers/PopularTravelers";

import CommentCreateForm from "../comments/CommentCreateForm";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import Comment from "../comments/Comment";
import InfiniteScroll from "react-infinite-scroll-component";
import Asset from "../../components/Asset";
import { fetchMoreData } from "../../utils/utils";
import { useLocation } from "react-router-dom";

function PostPage() {
  const { id } = useParams();
  const [post, setPost] = useState({ results: [] });

  const currentUser = useCurrentUser();
  const traveler_image = currentUser?.traveler_image;
  const [comments, setComments] = useState({ results: [] });

  const routeLocation = useLocation();
  const [alertMessage, setAlertMessage] = useState(null);

  useEffect(() => {
    // Fetch the post and comments data from the API
    const handleMount = async () => {
      try {
        const [{ data: post }, { data: comments }] = await Promise.all([
          axiosReq.get(`/posts/${id}`),
          axiosReq.get(`/comments/?post=${id}`),
        ]);
        setPost({ results: [post] });
        setComments(comments);
      } catch (err) {
        console.log(err);
      }
    };

    handleMount();
  }, [id]);

  // This useEffect is used for handling the alert messages. When the component's location state changes,
  // and if it includes a message, we set the alert message and schedule it to be cleared after 5 seconds.
  // When the component unmounts, or if the location state changes again before 5 seconds have passed,
  // the scheduled clearing of the alert message will be cancelled to prevent unnecessary state updates.
  useEffect(() => {
    if (routeLocation.state && routeLocation.state.message) {
      setAlertMessage(routeLocation.state.message);
      const timer = setTimeout(() => {
        setAlertMessage(null);
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [routeLocation]);

  return (
    <>
      {alertMessage && (
        <Alert
          variant="success"
          className={alertStyles["alert-success-custom"]}
        >
          {alertMessage}
        </Alert>
      )}
      <Row className="h-100">
        <Col className="py-2 p-0 p-lg-2" lg={8}>
          <Post {...post.results[0]} setPosts={setPost} postPage />
          <Container className={appStyles.Content}>
            {currentUser ? (
              <CommentCreateForm
                traveler_id={currentUser.traveler_id}
                travelerImage={traveler_image}
                post={id}
                setPost={setPost}
                setComments={setComments}
              />
            ) : comments.results.length ? (
              "Comments"
            ) : null}
            {comments.results.length ? (
              <InfiniteScroll
                children={comments.results.map((comment) => (
                  <Comment
                    key={comment.id}
                    {...comment}
                    setPost={setPost}
                    setComments={setComments}
                  />
                ))}
                dataLength={comments.results.length}
                loader={<Asset spinner />}
                hasMore={!!comments.next}
                next={() => fetchMoreData(comments, setComments)}
              />
            ) : currentUser ? (
              <span>No comments yet, be the first to comment!</span>
            ) : (
              <span>No comments... yet</span>
            )}
          </Container>
        </Col>
        <Col lg={4} className="d-none d-lg-block p-0 p-lg-2">
          <PopularTravelers />
        </Col>
      </Row>
    </>
  );
}

export default PostPage;
