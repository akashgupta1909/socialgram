import {
  FETCH_RANDOM_PHOTOS,
  FETCH_RANDOM_PHOTOS_SUCCESS,
  FETCH_RANDOM_PHOTOS_FAILURE,
} from "./types";

const intialState = {
  loading: false,
  photos: [],
  currPageNo: 0,
  error: null,
  isMorePhotos: true,
};

const photosReducer = (state = intialState, action) => {
  switch (action.type) {
    case FETCH_RANDOM_PHOTOS:
      return { ...state, loading: true };
    case FETCH_RANDOM_PHOTOS_SUCCESS:
      return {
        ...state,
        loading: false,
        photos: [...state.photos, ...action.payload],
        currPageNo: action.currPageNo,
        isMorePhotos: action.payload.length > 0 ? true : false,
        error: null,
      };
    case FETCH_RANDOM_PHOTOS_FAILURE:
      return {
        ...state,
        loading: false,
        photos: [...state.photos],
        currPageNo: action.currPageNo,
        error: action.payload,
      };
    default:
      return state;
  }
};

export { photosReducer };
