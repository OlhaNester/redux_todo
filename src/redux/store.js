import { createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import counterReducer from "./counter/counter_reducer";

const rootReducer = combineReducers({
  counter: counterReducer,
});
const store = createStore(rootReducer, composeWithDevTools());

export default store;
