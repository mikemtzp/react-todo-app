import React from "react";
import "../App.css";
import TodosList from "./TodosList";
import Header from "./Header";
import InputTodo from "./InputTodo";
import { v4 as uuidv4 } from "uuid";
class TodoContainer extends React.Component {
  state = {
    todos: [],
  };

  toggleCheckbox = (id) => {
    this.setState((prevState) => ({
      todos: prevState.todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      }),
    }));
  };

  deleteTodo = (id) => {
    this.setState({
      todos: [
        ...this.state.todos.filter((todo) => {
          return todo.id !== id;
        }),
      ],
    });
  };

  addTodoItem = (title) => {
    const newTodo = {
      id: uuidv4(),
      title: title,
      completed: false,
    };
    this.setState({
      todos: [...this.state.todos, newTodo],
    });
  };

  setUpdate = (updatedTitle, id) => {
    this.setState({
      todos: this.state.todos.map((todo) => {
        if (todo.id === id) {
          todo.title = updatedTitle;
        }
        return todo;
      }),
    });
  };

  componentDidUpdate(prevState) {
    if(prevState.todos !== this.state.todos) {
      const temp = JSON.stringify(this.state.todos)
      localStorage.setItem('todos', temp)
    }
  }

  componentDidMount() {
    const loadedTodos = JSON.parse(localStorage.getItem('todos'))
    if (loadedTodos) {
      this.setState({
        todos: loadedTodos
      })
    }
  }

  render() {
    return (
      <div className="container">
        <div className="inner">
          <Header />
          <InputTodo addTodoProps={this.addTodoItem} />
          <TodosList
            todos={this.state.todos}
            toggleCheckboxProps={this.toggleCheckbox}
            deleteTodoProps={this.deleteTodo}
            setUpdateProps={this.setUpdate}
          />
        </div>
      </div>
    );
  }
}
export default TodoContainer;
