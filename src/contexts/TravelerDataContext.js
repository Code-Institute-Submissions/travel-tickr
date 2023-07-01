import { createContext, useContext, useEffect, useState } from "react";
import { axiosReq, axiosRes } from "../api/axiosDefaults";
import { useCurrentUser } from "./CurrentUserContext";
import { followHelper, unfollowHelper } from "../utils/utils";

export const TravelerDataContext = createContext();
export const SetTravelerDataContext = createContext();

export const useTravelerData = () => useContext(TravelerDataContext);
export const useSetTravelerData = () => useContext(SetTravelerDataContext);

export const TravelerDataProvider = ({ children }) => {
  const [travelerData, setTravelerData] = useState({
    pageTraveler: { results: [] },
    popularTravelers: { results: [] },
  });
  const currentUser = useCurrentUser();

  const handleFollow = async (clickedTraveler) => {
    try {
      const { data } = await axiosRes.post("/followers/", {
        followed: clickedTraveler.id,
      });

      setTravelerData((prevState) => ({
        ...prevState,
        pageTraveler: {
          results: prevState.pageTraveler.results.map((traveler) =>
            followHelper(traveler, clickedTraveler, data.id)
          ),
        },

        popularTravelers: {
          ...prevState.popularTravelers,
          results: prevState.popularTravelers.results.map((traveler) =>
            followHelper(traveler, clickedTraveler, data.id)
          ),
        },
      }));
    } catch (err) {
      console.log(err);
    }
  };

  const handleUnFollow = async (clickedTraveler) => {
    try {
      await axiosRes.delete(`/followers/${clickedTraveler.following_id}`);
      setTravelerData((prevState) => ({
        ...prevState,
        pageTraveler: {
          results: prevState.pageTraveler.results.map((traveler) =>
            unfollowHelper(traveler, clickedTraveler)
          ),
        },
        popularTravelers: {
          ...prevState.popularTravelers,
          results: prevState.popularTravelers.results.map((traveler) =>
            unfollowHelper(traveler, clickedTraveler)
          ),
        },
      }));
    } catch (err) {
      console.log(err);
    }
  };

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
    <TravelerDataContext.Provider value={travelerData}>
      <SetTravelerDataContext.Provider
        value={{ setTravelerData, handleFollow, handleUnFollow }}
      >
        {children}
      </SetTravelerDataContext.Provider>
    </TravelerDataContext.Provider>
  );
};
