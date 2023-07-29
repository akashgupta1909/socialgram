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

const intialState = {
  loading: false,
  user: null,
  userPhotosLoading: false,
  photos: [],
  currPageNo: 0,
  isMorePhotos: true,
  isFixedUserLoading: false,
  fixedUser: null,
  error: null,
};

const userReducer = (state = intialState, action) => {
  switch (action.type) {
    case FETCH_USER:
      return { ...state, loading: true };
    case FETCH_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        user: action.payload,
        error: null,
      };
    case FETCH_USER_FAILURE:
      return {
        ...state,
        loading: false,
        user: null,
        error: action.payload,
      };
    case FETCH_USER_PHOTOS:
      return { ...state, userPhotosLoading: true };
    case FETCH_USER_PHOTOS_SUCCESS:
      return {
        ...state,
        userPhotosLoading: false,
        photos: action.isNewUser
          ? [...action.payload]
          : [...state.photos, ...action.payload],
        isMorePhotos: action.payload.length > 0 ? true : false,
        currPageNo: action.currPageNo,
        error: null,
      };
    case FETCH_USER_PHOTOS_FAILURE:
      return {
        ...state,
        userPhotosLoading: false,
        photos: [...state.photos],
        error: action.payload,
        currPageNo: action.currPageNo,
      };
    case FETCH_FIXED_USER:
      return { ...state, isFixedUserLoading: true };
    case FETCH_FIXED_USER_SUCCESS:
      return {
        ...state,
        isFixedUserLoading: false,
        fixedUser: action.payload,
        error: null,
      };
    case FETCH_FIXED_USER_FAILURE:
      return {
        ...state,
        isFixedUserLoading: false,
        fixedUser: null,
        error: action.payload,
      };
    default:
      return state;
  }
};

export { userReducer };
