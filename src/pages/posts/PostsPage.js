import React, { useEffect, useState } from "react";

import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Post from "./Post";
import Asset from "../../components/Asset";
import Alert from "react-bootstrap/Alert";

import styles from "../../styles/PostsPage.module.css";
import alertStyles from "../../styles/AlertMessages.module.css";
import { useLocation } from "react-router-dom";
import { axiosReq } from "../../api/axiosDefaults";

import NoResults from "../../assets/no-results.png";
import InfiniteScroll from "react-infinite-scroll-component";
import { fetchMoreData } from "../../utils/utils";
import PopularTravelers from "../travelers/PopularTravelers";
import { useCurrentUser } from "../../contexts/CurrentUserContext";

function PostsPage({ message, filter = "" }) {
  const [posts, setPosts] = useState({ results: [] });
  const [hasLoaded, setHasLoaded] = useState(false);
  const { pathname } = useLocation();

  const [query, setQuery] = useState("");
  const currentUser = useCurrentUser();
  const routeLocation = useLocation();
  const [alertMessage, setAlertMessage] = useState(null);

  useEffect(() => {
    // Fetch posts based on filter and search query
    const fetchPosts = async () => {
      try {
        const { data } = await axiosReq.get(`/posts/?${filter}search=${query}`);
        setPosts(data);
        setHasLoaded(true);
      } catch (err) {
        console.log(err);
      }
    };
    // Delay fetching posts after a query change to improve user experience
    setHasLoaded(false);
    const timer = setTimeout(() => {
      fetchPosts();
    }, 1000);
    // Clean up function to clear the time
    return () => {
      clearTimeout(timer);
    };
  }, [filter, query, pathname, currentUser]);

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
          <PopularTravelers mobile />
          <Form
            className={`d-flex ${styles.SearchBar}`}
            onSubmit={(event) => event.preventDefault()}
          >
            <i className={`fas fa-search ${styles.SearchIcon}`} />
            <Form.Control
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              type="text"
              className="mr-sm-2"
              placeholder="Search posts"
            />
          </Form>
          {hasLoaded ? (
            <>
              {posts.results.length ? (
                <InfiniteScroll
                  children={posts.results.map((post) => (
                    <Post
                      key={post.id}
                      {...post}
                      setPosts={setPosts}
                      truncated={true}
                    />
                  ))}
                  dataLength={posts.results.length}
                  loader={<Asset spinner />}
                  hasMore={!!posts.next}
                  next={() => fetchMoreData(posts, setPosts)}
                />
              ) : (
                <Container className="appStyles.Content">
                  <Asset src={NoResults} message={message} />
                </Container>
              )}
            </>
          ) : (
            <Container className="appStyles.Content">
              <Asset spinner />
            </Container>
          )}
        </Col>
        <Col md={4} className="d-none d-lg-block p-0 p-lg-2">
          <PopularTravelers />
        </Col>
      </Row>
    </>
  );
}

export default PostsPage;
