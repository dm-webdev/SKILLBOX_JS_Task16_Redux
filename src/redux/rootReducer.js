import { combineReducers } from "redux";
import { commentReducer } from "./reducers/commentReducer";
import { appReducer } from "./reducers/appReducer";

export const rootReducer = combineReducers({
  comments: commentReducer,
  app: appReducer,
});
