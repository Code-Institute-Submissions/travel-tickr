import React, { useEffect, useState } from "react";
import appStyles from "../../App.module.css";
import Container from "react-bootstrap/Container";
import { axiosReq } from "../../api/axiosDefaults";
import { useCurrentUser } from "../../contexts/CurrentUserContext";

const PopularTravelers = () => {
  const [travelerData, setTravelerData] = useState({
    pageTraveler: { results: [] },
    popularTravelers: { results: [] },
  });
  const { popularTravelers } = travelerData;
  const currentUser = useCurrentUser()

  useEffect(() => {
    const handleMount = async () => {
      try {
        const { data } = await axiosReq.get(
          "/travelers/?ordering=-followers_count"
        );
        setTravelerData((prevState) => ({
            ...prevState,
            popularTravelers: data,
        }))
      } catch (err) {
        console.log(err)
      }
    };

    handleMount()
  }, [currentUser]);

  return (
    <Container className={appStyles.Container}>
      <p>Most followed travelers</p>
      {popularTravelers.results.map(traveler => (
        <p key={traveler.id}>{traveler.owner}</p>
      ))}
    </Container>
  );
};

export default PopularTravelers;
