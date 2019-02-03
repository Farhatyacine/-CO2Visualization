import { combineReducers } from "redux";
import carbonReducer from "./carbonReducer";

export default combineReducers({
  carbons: carbonReducer
});
