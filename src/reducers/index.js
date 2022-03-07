import counterReducer from "./counter";
import loggedRedcuer from "./isLogged";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  counter: counterReducer,
  isLogged: loggedRedcuer,
});

export default allReducers;
