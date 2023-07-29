"use client";
import { useCallback } from "react";
import { useDispatch } from "react-redux";
import fetchRandomPhotos from "../services/fetchRandomPhotos";
import {
  fetchRandomPhotos as fetchRandomPhotosAction,
  fetchRandomPhotosSuccess,
  fetchRandomPhotosFailure,
} from "../redux/photos/actions";

function usePhotos() {
  const dispatch = useDispatch();

  const fetchRandomPhotosHook = useCallback(
    async (page, perPage) => {
      dispatch(fetchRandomPhotosAction());
      try {
        const response = await fetchRandomPhotos(page, perPage);
        dispatch(fetchRandomPhotosSuccess(response, page));
      } catch (error) {
        dispatch(fetchRandomPhotosFailure(error, page));
      }
    },
    [dispatch]
  );

  return {
    fetchRandomPhotosHook,
  };
}

export default usePhotos;
