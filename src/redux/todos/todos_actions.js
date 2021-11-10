import types from "./todos_types";
import shortid from "shortid";

const addTodo = (text) => ({
  type: types.ADD,
  payload: {
    id: shortid.generate(),
    text: text,
    completed: false,
  },
});

const deleteTodo = (todoId) => ({
  type: types.DELETE,
  payload: todoId,
});

const filteredTodo = (value) => ({
  type: types.FILTERED,
  payload: value,
});

export default { addTodo, deleteTodo, filteredTodo };
