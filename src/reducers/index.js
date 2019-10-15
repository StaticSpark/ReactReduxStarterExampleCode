import { combineReducers } from "redux";
import simpleReducer from "./simpleReducer";

export default combineReducers({
  first: simpleReducer
});
