import { axiosReq } from "../api/axiosDefaults";

export const fetchMoreData = async (resource, setResource) => {
  try {
    const { data } = await axiosReq.get(resource.next);
    setResource((prevResource) => ({
      ...prevResource,
      next: data.next,
      results: data.results.reduce((acc, cur) => {
        return acc.some((accResult) => accResult.id === cur.id)
          ? acc
          : [...acc, cur];
      }, prevResource.results),
    }));
  } catch (err) {}
};

export const followHelper = (traveler, clickedTraveler, following_id) => {
  return traveler.id === clickedTraveler.id
    ? // If this is the traveler I clicked on, update its followers
      // count and set its following id
      {
        ...traveler,
        followers_count: traveler.followers_count + 1,
        following_id
      }
    : traveler.is_owner
    ? // If this is logged in user, update it's following count
      { ...traveler, following_count: traveler.following_count + 1 }
    : // if this is not the clicked on traveler or the logged
      // in users own, just return it unchanged
      traveler;
};
