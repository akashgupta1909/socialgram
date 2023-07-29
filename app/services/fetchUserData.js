import { FETCH_USER_PROFILE_URL } from "../utils/constants";
import { unsplashAccessKey } from "../utils/config";

const fetchUserData = async (username) => {
  try {
    const response = await fetch(FETCH_USER_PROFILE_URL(username), {
      headers: {
        Authorization: `Client-ID ${unsplashAccessKey}`,
      },
    });
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
};

export default fetchUserData;
