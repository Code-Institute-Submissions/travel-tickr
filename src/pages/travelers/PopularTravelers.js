import React, { useEffect, useState } from "react";
import appStyles from "../../App.module.css";
import Container from "react-bootstrap/Container";
import { axiosReq } from "../../api/axiosDefaults";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import Asset from "../../components/Asset";
import Traveler from "./Traveler";

const PopularTravelers = ({ mobile }) => {
  const [travelerData, setTravelerData] = useState({
    pageTraveler: { results: [] },
    popularTravelers: { results: [] },
  });
  const { popularTravelers } = travelerData;
  const currentUser = useCurrentUser();

  useEffect(() => {
    const handleMount = async () => {
      try {
        const { data } = await axiosReq.get(
          "/travelers/?ordering=-followers_count"
        );
        setTravelerData((prevState) => ({
          ...prevState,
          popularTravelers: data,
        }));
      } catch (err) {
        console.log(err);
      }
    };

    handleMount();
  }, [currentUser]);

  return (
    <Container
      className={`${appStyles.Content} ${
        mobile && "d-lg-none text-center mb-3"
      }`}
    >
      {popularTravelers.results.length ? (
        <>
          <p className="d-flex justify-content-center">
            Most followed travelers
          </p>
          {mobile ? (
            <div className="d-flex justify-content-around">
              {popularTravelers.results.slice(0, 4).map((traveler) => (
                <Traveler key={traveler.id} traveler={traveler} mobile />
              ))}
            </div>
          ) : (
            popularTravelers.results
              .slice(0, 4)
              .map((traveler) => (
                <Traveler key={traveler.id} traveler={traveler} />
              ))
          )}
        </>
      ) : (
        <Asset spinner />
      )}
    </Container>
  );
};

export default PopularTravelers;
