import React, { Component } from "react";
import Filter from "./TodoEditor/Filter";
// import axios from 'axios';
// import ColorPicker from "./ColorPicker";

import TodoList from "./TodoList";
import Form from "./Form";
import TodoEditor from "./TodoEditor";
import shortid from "shortid";
import Modal from "./Modal";
import Counter from "./Counter";
// import Clock from "./Clock";

//import { findRenderedDOMComponentWithClass } from "react-dom/test-utils";

const colorPickerOpt = [
  { label: "red", color: "#F44336" },
  { label: "green", color: "#4CAF50" },
  { label: "blue", color: "#2196F3" },
  { label: "grey", color: "#607D8B" },
  { label: "pink", color: "#E91E63" },
  { label: "indigo", color: "#3F51B5" },
];

class App extends Component {
  state = {
    showModal: false,
  };
  // componentDidMount() {
  //   // axios.get('http://localhost:4040/todos')
  //   //   .then(response => {
  //   //     console.log(response);
  //   //   });

  //   const todos = localStorage.getItem("todos");
  //   const parseTodos = JSON.parse(todos);
  //   if (parseTodos) {
  //     this.setState({ todos: parseTodos });
  //   }
  // }

  // componentDidApdate(prevProps, prevState) {
  //   if (this.state.todos !== prevState.todos) {
  //     console.log("Обновилось поле");
  //     localStorage.setItem("todos", JSON.stringify(this.state.todos));
  //   }
  // }

  // addTodo = (text) => {
  //   const todo = {
  //     id: shortid.generate(),
  //     text: text,
  //     completed: false,
  //   };
  //   this.setState((prevState) => ({
  //     todos: [todo, ...prevState.todos],
  //   }));
  // };

  // deleteTodo = (todoId) => {
  //   this.setState((prevState) => ({
  //     todos: prevState.todos.filter((todo) => todo.id !== todoId),
  //   }));
  // };

  toggleCompleted = (todoId) => {
    console.log(todoId);

    this.setState((prevState) => ({
      // можно переписать в виде тернарника:
      todos: prevState.todos.map((todo) => {
        // this.setState(prevState =>
        if (todo.id === todoId) {
          // todos: prevState.todos.map(todo => {
          return {
            // todo.id === todoId ?
            ...todo,
            completed: !todo.completed, // {  ...todo, completed: !todo.completed,} : todo
          };
        }
        return todo; //если id не равен, мы возвращаем старый todo
      }),
    }));
  };
  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  handleChange = (event) => {
    const { name, value } = event.currentTarget;
    this.setState({ [name]: value });
  };

  // changeFilter = (event) => {
  //   this.setState({
  //     filter: event.currentTarget.value,
  //   });
  // };
  // getVisibleTodos = (params) => {
  //   const normalizedFiltered = this.state.filter.toLowerCase();
  //   return this.state.todos.filter(({ text }) =>
  //     text.toLowerCase().includes(normalizedFiltered)
  //   );
  // };

  // handleNameChange = (event) => {
  //   this.setState({ name: event.currentTarget.value });
  // }

  // handleTagChange = (event) => {
  //   this.setState({ tag: event.currentTarget.value });
  // }

  render() {
    const { showModal } = this.state;
    // const totalTodo = todos.length;
    // const complitedTodo = todos.reduce(
    //   (acc, todo) => (todo.completed ? acc + 1 : acc),
    //   0
    // );
    return (
      <div className="App">
        <Counter />
        <Filter />
        <button type="button" onClick={this.toggleModal}>
          Открыть модалку
        </button>
        {/* <Clock /> */}
        {showModal && (
          <Modal onClose={this.toggleModal}>
            {/* <h1>Это модальное окно</h1>
            <p>Lorem Ipsum";</p> */}
            <TodoEditor />
            <button type="button" onClick={this.toggleModal}>
              Закрыть модалку
            </button>
          </Modal>
        )}
        <Form />

        {/* <form>
          <label>
            {" "}
            Имя
            <input
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
              id={this.nameImputId}
            />
          </label>
          <label>
            {" "}
            Ник{" "}
            <input
              type="text"
              name="tag"
              value={this.state.tag}
              onChange={this.handleChange}
              id={this.nameImputId}
            />
          </label>
        </form> */}

        {/* <div>
          <p>Общее кол-во {totalTodo}</p>
          <p> Кол-во выполненных {complitedTodo}</p>
        </div> */}

        <TodoList />
        {/* <ColorPicker options={colorPickerOpt} /> */}
      </div>
    );
  }
}

export default App;
