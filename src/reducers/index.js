import {combineReducers} from "redux";
import auth from "./auth";
import message from "./message";
import team from "./team";

export default combineReducers({
  auth,
  message,
  team,
});