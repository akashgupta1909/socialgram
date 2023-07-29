const BASE_URL = "https://api.unsplash.com";

export const FETCH_PHOTOS_URL = (page = 1, perPage = 10) =>
  `${BASE_URL}/photos?page=${page}&per_page=${perPage}`;
export const FETCH_USER_PROFILE_URL = (username = "akashgupta1909") =>
  `${BASE_URL}/users/${username}`;
export const FETCH_USER_PHOTOS_URL = (
  username = "akashgupta1909",
  page = 1,
  perPage = 10
) => `${BASE_URL}/users/${username}/photos?page=${page}&per_page=${perPage}`;
