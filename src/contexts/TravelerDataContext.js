import { createContext, useContext, useEffect, useState } from "react";
import { axiosReq, axiosRes } from "../api/axiosDefaults";
import { useCurrentUser } from "./CurrentUserContext";

export const TravelerDataContext = createContext();
export const SetTravelerDataContext = createContext();

export const useTravelerData = () => useContext(TravelerDataContext);
export const useSetTravelerData = () =>
  useContext(SetTravelerDataContext);

export const TravelerDataProvider = ({ children }) => {
  const [travelerData, setTravelerData] = useState({
    pageTraveler: { results: [] },
    popularTravelers: { results: [] },
  });
  const { popularTravelers } = travelerData;
  const currentUser = useCurrentUser();

  const handleFollow = async (clickedTraveler) => {
    try {
      const {data} = await axiosRes.post('/followers/', {
        followed: clickedTraveler.id
      })
    } catch (err) {
      console.log(err)
    }
  }

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
      <SetTravelerDataContext.Provider value={{setTravelerData, handleFollow}}>
        {children}
      </SetTravelerDataContext.Provider>
    </TravelerDataContext.Provider>
  );
};
