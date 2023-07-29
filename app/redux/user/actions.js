import {
  FETCH_USER,
  FETCH_USER_SUCCESS,
  FETCH_USER_FAILURE,
  FETCH_USER_PHOTOS,
  FETCH_USER_PHOTOS_SUCCESS,
  FETCH_USER_PHOTOS_FAILURE,
  FETCH_FIXED_USER,
  FETCH_FIXED_USER_SUCCESS,
  FETCH_FIXED_USER_FAILURE,
} from "./types";

export const fetchUser = () => ({
  type: FETCH_USER,
});

export const fetchUserSuccess = (user) => ({
  type: FETCH_USER_SUCCESS,
  payload: user,
});

export const fetchUserFailure = (error) => ({
  type: FETCH_USER_FAILURE,
  payload: error,
});

export const fetchUserPhotos = () => ({
  type: FETCH_USER_PHOTOS,
});

export const fetchUserPhotosSuccess = (photos, currPageNo, isNewUser) => ({
  type: FETCH_USER_PHOTOS_SUCCESS,
  payload: photos,
  currPageNo,
  isNewUser,
});

export const fetchUserPhotosFailure = (error, currPageNo) => ({
  type: FETCH_USER_PHOTOS_FAILURE,
  payload: error,
  currPageNo,
});

export const fetchFixedUser = () => ({
  type: FETCH_FIXED_USER,
});

export const fetchFixedUserSuccess = (user) => ({
  type: FETCH_FIXED_USER_SUCCESS,
  payload: user,
});

export const fetchFixedUserFailure = (error) => ({
  type: FETCH_FIXED_USER_FAILURE,
  payload: error,
});
