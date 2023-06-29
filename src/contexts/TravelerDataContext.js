import { createContext, useContext, useEffect, useState } from "react";
import { axiosReq, axiosRes } from "../api/axiosDefaults";
import { useCurrentUser } from "./CurrentUserContext";

export const TravelerDataContext = createContext();
export const SetTravelerDataContext = createContext();

export const useTravelerData = () => useContext(TravelerDataContext);
export const useSetTravelerData = () => useContext(SetTravelerDataContext);

export const TravelerDataProvider = ({ children }) => {
  const [travelerData, setTravelerData] = useState({
    pageTraveler: { results: [] },
    popularTravelers: { results: [] },
  });
  const { popularTravelers } = travelerData;
  const currentUser = useCurrentUser();

  const handleFollow = async (clickedTraveler) => {
    try {
      const { data } = await axiosRes.post("/followers/", {
        followed: clickedTraveler.id,
      });

      setTravelerData((prevState) => ({
        ...prevState,
        pageTraveler: {
          results: prevState.pageTraveler.results.map((traveler) => {
            return traveler.id === clickedTraveler.id
              ? // If this is the traveler I clicked on, update its followers
                // count and set its following id
                {
                  ...traveler,
                  followers_count: traveler.followers_count + 1,
                  following_id: data.id,
                }
              : traveler.is_owner
              ? // If this is logged in user, update it's following count
                { ...traveler, following_count: traveler.following_count + 1 }
              : // if this is not the clicked on traveler or the logged
                // in users own, just return it unchanged
                traveler;
          }),
        },

        popularTravelers: {
          ...prevState.popularTravelers,
          results: prevState.popularTravelers.results.map((traveler) => {
            return traveler.id === clickedTraveler.id
              ? // If this is the traveler I clicked on, update its followers
                // count and set its following id
                {
                  ...traveler,
                  followers_count: traveler.followers_count + 1,
                  following_id: data.id,
                }
              : traveler.is_owner
              ? // If this is logged in user, update it's following count
                { ...traveler, following_count: traveler.following_count + 1 }
              : // if this is not the clicked on traveler or the logged
                // in users own, just return it unchanged
                traveler;
          }),
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
        value={{ setTravelerData, handleFollow }}
      >
        {children}
      </SetTravelerDataContext.Provider>
    </TravelerDataContext.Provider>
  );
};
