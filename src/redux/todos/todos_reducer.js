import { combineReducers } from "redux";
import types from "./todos_types";

const items = (state = [], { type, payload }) => {
  switch (type) {
    case types.ADD:
      return [...state, payload];

    case types.DELETE:
      return state.filter((todo) => todo.id !== payload);

    default:
      return state;
  }
};

const filter = (state = "", { type, payload }) => {
  switch (type) {
    case types.FILTERED:
      return payload;

    default:
      return state;
  }
};
export default combineReducers({
  items,
  filter,
});
