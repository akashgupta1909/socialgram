import { FETCH_USER_PHOTOS_URL } from "../utils/constants";
import { unsplashAccessKey } from "../utils/config";

const fetchUserPhotos = async (username, page, perPage) => {
  try {
    const response = await fetch(
      FETCH_USER_PHOTOS_URL(username, page, perPage),
      {
        headers: {
          Authorization: `Client-ID ${unsplashAccessKey}`,
        },
      }
    );
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
};

export default fetchUserPhotos;
