import {
  FETCH_RANDOM_PHOTOS,
  FETCH_RANDOM_PHOTOS_SUCCESS,
  FETCH_RANDOM_PHOTOS_FAILURE,
} from "./types";

export const fetchRandomPhotos = () => ({
  type: FETCH_RANDOM_PHOTOS,
});

export const fetchRandomPhotosSuccess = (photos, currPageNo) => ({
  type: FETCH_RANDOM_PHOTOS_SUCCESS,
  payload: photos,
  currPageNo,
});

export const fetchRandomPhotosFailure = (error, currPageNo) => ({
  type: FETCH_RANDOM_PHOTOS_FAILURE,
  payload: error,
  currPageNo,
});
