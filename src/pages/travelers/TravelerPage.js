import React, { useEffect, useState } from "react";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

import Asset from "../../components/Asset";

import styles from "../../styles/TravelerPage.module.css";
import appStyles from "../../App.module.css";
import btnStyles from "../../styles/Button.module.css";

import PopularTravelers from "./PopularTravelers";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { axiosReq } from "../../api/axiosDefaults";
import { useSetTravelerData } from "../../contexts/TravelerDataContext";

function TravelerPage() {
  const [hasLoaded, setHasLoaded] = useState(false);
  const currentUser = useCurrentUser();
  const { id } = useParams();
  const setTravelerData = useSetTravelerData();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [{ data: pageTraveler }] = await Promise.all([
          axiosReq.get(`/travelers/${id}/`),
        ]);
        setTravelerData((prevState) => ({
          ...prevState,
          pageTraveler: { results: [pageTraveler] },
        }));
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
          <p>Image</p>
        </Col>
        <Col lg={6}>
          <h3 className="m-2">Traveler username</h3>
          <p>Traveler stats</p>
        </Col>
        <Col lg={3} className="text-lg-right">
          <p>Follow button</p>
        </Col>
        <Col className="p-3">Traveler content</Col>
      </Row>
    </>
  );

  const mainTravelerPosts = (
    <>
      <hr />
      <p className="text-center">Traveler owner's posts</p>
      <hr />
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
