import React, { useEffect, useState } from "react";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";

import Asset from "../../components/Asset";

import styles from "../../styles/TravelerPage.module.css";
import btnStyles from "../../styles/Button.module.css";

import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { axiosReq } from "../../api/axiosDefaults";
import {
  useSetTravelerData,
  useTravelerData,
} from "../../contexts/TravelerDataContext";
import InfiniteScroll from "react-infinite-scroll-component";
import Post from "../posts/Post";
import { fetchMoreData } from "../../utils/utils";
import NoResult from "../../assets/no-results.png";
import { TravelerEditDropdown } from "../../components/MoreDropdown";

function TravelerPage() {
  const [hasLoaded, setHasLoaded] = useState(false);
  const currentUser = useCurrentUser();
  const { id } = useParams();
  const { setTravelerData, handleFollow, handleUnFollow } =
    useSetTravelerData();
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
      {traveler?.is_owner && <TravelerEditDropdown id={traveler?.id} />}
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
              <div className={styles.Text}>{traveler?.posts_count}</div>
              <div className={styles.Text}>posts</div>
            </Col>
            <Col xs={3} className="my-2">
              <div className={styles.Text}>{traveler?.followers_count}</div>
              <div className={styles.Text}>followers</div>
            </Col>
            <Col xs={3} className="my-2">
              <div className={styles.Text}>{traveler?.following_count}</div>
              <div className={styles.Text}>following</div>
            </Col>
          </Row>
        </Col>
        <Col lg={3} className="text-lg-right">
          {currentUser &&
            !is_owner &&
            (traveler?.following_id ? (
              <Button
                className={`${btnStyles.Button} ${btnStyles.Bright}`}
                onClick={() => handleUnFollow(traveler)}
              >
                Unfollow
              </Button>
            ) : (
              <Button
                className={`${btnStyles.Button} ${btnStyles.Blue}`}
                onClick={() => handleFollow(traveler)}
              >
                follow
              </Button>
            ))}
        </Col>
      </Row>
      <hr />
      <Row noGutters className={`px-3 text-center d-flex ${styles.Info}`}>
        {traveler?.content && (
          <Col className="mb-2">
            <i>"{traveler.content}"</i>
          </Col>
        )}
        {traveler?.favorite_place && (
          <Col className="mb-2">
            <i>"My favorite place in the world is {traveler.favorite_place}"</i>
          </Col>
        )}
        {traveler?.one_important_thing && (
          <Col className="mb-2">
            <i>
              "The most important thing in my luggage is{" "}
              {traveler.one_important_thing}"
            </i>
          </Col>
        )}
      </Row>
    </>
  );

  const mainTravelerPosts = (
    <>
      <hr />
      <p className="text-center">
        {traveler?.owner}'s memory lane <i class="fa-solid fa-paper-plane"></i>
      </p>
      {travelerPosts.results.length ? (
        <InfiniteScroll
          children={travelerPosts.results.map((post) => (
            <Post
              key={post.id}
              {...post}
              setPosts={setTravelerPosts}
              truncated={true}
            />
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
      <Col className="py-3 p-0 p-lg-2" lg={12}>
        {/* <PopularTravelers mobile /> */}
        <Container className={styles.Content}>
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
        {/* <PopularTravelers /> */}
      </Col>
    </Row>
  );
}

export default TravelerPage;
