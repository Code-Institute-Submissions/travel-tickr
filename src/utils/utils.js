import jwtDecode from "jwt-decode";
import { axiosReq } from "../api/axiosDefaults";

// Fetch more data for infinitive scrolling
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

// Helper function to update traveler data when following another travler
export const followHelper = (traveler, clickedTraveler, following_id) => {
  return traveler.id === clickedTraveler.id
    ? // If this is the traveler I clicked on, update its followers
      // count and set its following id
      {
        ...traveler,
        followers_count: traveler.followers_count + 1,
        following_id,
      }
    : traveler.is_owner
    ? // If this is logged in user, update it's following count
      { ...traveler, following_count: traveler.following_count + 1 }
    : // if this is not the clicked on traveler or the logged
      // in users own, just return it unchanged
      traveler;
};

// Helper to update traveler data when unfollowing another user
export const unfollowHelper = (traveler, clickedTraveler) => {
  return traveler.id === clickedTraveler.id
    ? {
        ...traveler,
        followers_count: traveler.followers_count - 1,
        following_id: null,
      }
    : traveler.is_owner
    ? { ...traveler, following_count: traveler.following_count - 1 }
    : traveler;
};

// Function to set expiration time stamp fo the refresh token in local storage
export const setTokenTimestamp = (data) => {
  const refreshTokenTimestamp = jwtDecode(data?.refresh_token).exp;
  localStorage.setItem("refreshTokenTimestamp", refreshTokenTimestamp);
};

// Function to check if the refresh token has an expiration timestamp in local storage
export const shouldRefreshToken = () => {
  return !!localStorage.getItem("refreshTokenTimestamp");
};

// Function to remove the expiration timestamp of the refresh token from local storage
export const removeTokenTimestamp = () => {
  localStorage.removeItem("refreshTokenTimestamp");
};
