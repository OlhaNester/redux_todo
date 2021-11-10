import { createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import counterReducer from "./counter/counter_reducer";
import todosReducer from "./todos/todos_reducer";

const rootReducer = combineReducers({
  counter: counterReducer,
  todos: todosReducer,
});
const store = createStore(rootReducer, composeWithDevTools());

export default store;
