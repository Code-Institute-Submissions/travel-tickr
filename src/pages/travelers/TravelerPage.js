import React, { useEffect, useState } from "react";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";

import Asset from "../../components/Asset";

import styles from "../../styles/TravelerPage.module.css";
import appStyles from "../../App.module.css";
import btnStyles from "../../styles/Button.module.css";

import PopularTravelers from "./PopularTravelers";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { axiosReq } from "../../api/axiosDefaults";
import {
  useSetTravelerData,
  useTravelerData,
} from "../../contexts/TravelerDataContext";
import { Button } from "react-bootstrap";
import InfiniteScroll from "react-infinite-scroll-component";
import Post from "../posts/Post";
import { fetchMoreData } from "../../utils/utils";
import NoResult from "../../assets/no-results.png";

function TravelerPage() {
  const [hasLoaded, setHasLoaded] = useState(false);
  const currentUser = useCurrentUser();
  const { id } = useParams();
  const { setTravelerData, handleFollow } = useSetTravelerData();
  const { pageTraveler } = useTravelerData();
  const [traveler] = pageTraveler.results;
  const is_owner = currentUser?.username === traveler?.owner;

  const [travelerPosts, setTravelerPosts] = useState({ results: [] });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [{ data: pageTraveler }, { data: travelerPosts }] =
          await Promise.all([
            axiosReq.get(`/travelers/${id}/`),
            axiosReq.get(`/posts/?owner__traveler=${id}`),
          ]);
        setTravelerData((prevState) => ({
          ...prevState,
          pageTraveler: { results: [pageTraveler] },
        }));
        setTravelerPosts(travelerPosts);
        setHasLoaded(true);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [id, setTravelerData]);

  const mainTraveler = (
    <>
      <Row noGutters className="px-3 text-center">
        <Col lg={3} className="text-lg-left">
          <Image
            className={styles.TravelerImage}
            roundedCircle
            src={traveler?.image}
          />
        </Col>
        <Col lg={6}>
          <h3 className="m-2">{traveler?.owner}</h3>
          <Row className="justify-content-center no-gutters">
            <Col xs={3} className="my-2">
              <div>{traveler?.posts_count}</div>
              <div>posts</div>
            </Col>
            <Col xs={3} className="my-2">
              <div>{traveler?.followers_count}</div>
              <div>followers</div>
            </Col>
            <Col xs={3} className="my-2">
              <div>{traveler?.following_count}</div>
              <div>following</div>
            </Col>
          </Row>
        </Col>
        <Col lg={3} className="text-lg-right">
          {currentUser &&
            !is_owner &&
            (traveler?.following_id ? (
              <Button
                className={`${btnStyles.Button} ${btnStyles.Pink}`}
                onClick={() => {}}
              >
                Unfollow
              </Button>
            ) : (
              <Button
                className={`${btnStyles.Button} ${btnStyles.PinkOutline}`}
                onClick={() => handleFollow(traveler)}
              >
                follow
              </Button>
            ))}
        </Col>
        {traveler?.content && <Col className="p-3">{traveler.content}</Col>}
        {traveler?.favorite_place && (
          <Col className="p-3">{traveler.favorite_place}</Col>
        )}
        {traveler?.one_important_thing && (
          <Col className="p-3">{traveler.one_important_thing}</Col>
        )}
      </Row>
    </>
  );

  const mainTravelerPosts = (
    <>
      <hr />
      <p className="text-center">{traveler?.owner}'s posts</p>
      <hr />
      {travelerPosts.results.length ? (
        <InfiniteScroll
          children={travelerPosts.results.map((post) => (
            <Post key={post.id} {...post} setPosts={setTravelerPosts} />
          ))}
          dataLength={travelerPosts.results.length}
          loader={<Asset spinner />}
          hasMore={!!travelerPosts.next}
          next={() => fetchMoreData(travelerPosts, setTravelerPosts)}
        />
      ) : (
        <Asset
          src={NoResult}
          message={`No results found, ${traveler?.owner} hasn't posted anything yet.`}
        />
      )}
    </>
  );

  return (
    <Row>
      <Col className="py-2 p-0 p-lg-2" lg={8}>
        <PopularTravelers mobile />
        <Container className={appStyles.Content}>
          {hasLoaded ? (
            <>
              {mainTraveler}
              {mainTravelerPosts}
            </>
          ) : (
            <Asset spinner />
          )}
        </Container>
      </Col>
      <Col lg={4} className="d-none d-lg-block p-0 p-lg-2">
        <PopularTravelers />
      </Col>
    </Row>
  );
}

export default TravelerPage;
