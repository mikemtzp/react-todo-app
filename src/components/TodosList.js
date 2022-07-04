import React from "react";
import TodoItem from "./TodoItem";

class TodosList extends React.Component {
  render() {
    return (
      <ul>
        {this.props.todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            toggleCheckboxProps={this.props.toggleCheckboxProps}
            deleteTodoProps={this.props.deleteTodoProps}
            setUpdateProps={this.props.setUpdateProps}
          />
        ))}
      </ul>
    );
  }
}

export default TodosList;
