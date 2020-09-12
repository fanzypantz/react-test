import posts from "./posts";
import { combineReducers } from "redux";

// Combine the reducers into one for ease of use and expandability
const rootReducer = combineReducers({
  posts,
});

export default rootReducer;
