import { combineReducers } from "redux";
import { contacts } from "./contactReducer";
import { filter } from "../reducer/filterReducer";
import { isAlert } from "../reducer/alertReducer";
const rootRreducer = combineReducers({
  contacts,
  filter,
  isAlert,
});

export default rootRreducer;
