import { createStore, combineReducers } from "redux";
import { userReducer } from "./user/reducer";
import { photosReducer } from "./photos/reducer";

export const ConfigureStore = () => {
  const store = createStore(
    combineReducers({
      user: userReducer,
      photos: photosReducer,
    })
  );
  return store;
};
