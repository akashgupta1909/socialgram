import { FETCH_PHOTOS_URL } from "../utils/constants";
import { unsplashAccessKey } from "../utils/config";

const fetchRandomPhotos = async (page, perPage) => {
  try {
    const response = await fetch(FETCH_PHOTOS_URL(page, perPage), {
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

export default fetchRandomPhotos;
