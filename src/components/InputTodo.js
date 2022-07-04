import React, { Component } from "react";

class InputTodo extends Component {
  state = {
    title: "",
  };

  taskChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.title.trim()) {
      this.props.addTodoProps(this.state.title);
      this.setState({
        title: "",
      });
    } else {
      alert("Please write a task");
    }
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          placeholder="Add Todo..."
          value={this.state.title}
          name="title"
          onChange={this.taskChange}
        />
        <button>Submit</button>
      </form>
    );
  }
}
export default InputTodo;
