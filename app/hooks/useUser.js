"use client";
import { useCallback } from "react";
import { useDispatch } from "react-redux";
import fetchUserData from "../services/fetchUserData";
import fetchUserPhotos from "../services/fetchUserPhotos";
import {
  fetchUser,
  fetchUserSuccess,
  fetchUserFailure,
  fetchFixedUser,
  fetchFixedUserSuccess,
  fetchFixedUserFailure,
  fetchUserPhotos as fetchUserPhotosAction,
  fetchUserPhotosSuccess,
  fetchUserPhotosFailure,
} from "../redux/user/actions";

function useUser() {
  const dispatch = useDispatch();

  const fetchUserHook = useCallback(
    async (username, isFixedUser = false) => {
      isFixedUser ? dispatch(fetchFixedUser()) : dispatch(fetchUser());
      try {
        const response = await fetchUserData(username);
        isFixedUser
          ? dispatch(fetchFixedUserSuccess(response))
          : dispatch(fetchUserSuccess(response));
      } catch (error) {
        isFixedUser
          ? dispatch(fetchFixedUserFailure(error))
          : dispatch(fetchUserFailure(error));
      }
    },
    [dispatch]
  );

  const fetchUserPhotosHook = useCallback(
    async (username, page, perPage, isNewUser) => {
      dispatch(fetchUserPhotosAction());
      try {
        const response = await fetchUserPhotos(username, page, perPage);
        dispatch(fetchUserPhotosSuccess(response, page, isNewUser));
      } catch (error) {
        dispatch(fetchUserPhotosFailure(error, page));
      }
    },

    [dispatch]
  );

  return {
    fetchUserHook,
    fetchUserPhotosHook,
  };
}

export default useUser;
