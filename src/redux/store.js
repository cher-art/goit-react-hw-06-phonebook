import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import rootRreducer from "./reducer";

const store = createStore(rootRreducer, composeWithDevTools());

export default store;
