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

export default { addTodo };

// const deleteTodo = (todoId) => ({
//     type: types.DELETE,
//         payload: {

//         }
// })
