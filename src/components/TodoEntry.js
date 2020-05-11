import React, { Component } from "react";
import todoStore from "../stores/TodoStore";
import {observer} from 'mobx-react'

@observer
class TodoEntry extends Component {
  state = {
    value: "",
  };

  handleKeyDown = (event) => {
    if (event.keyCode !== 13) {
      return;
    }
    event.preventDefault();
    todoStore.addTodo(this.state.value);
    this.setState({
      value: "",
    });
  };
  render() {
    return (
      <header className="header">
        <h1>todos</h1>

        <input
          value={this.state.value}
          onChange={(event) => this.setState({ value: event.target.value })}
          onKeyDown={(event) => this.handleKeyDown(event)}
          class="new-todo"
          placeholder="What needs to be done?"
          autofocus
        />
      </header>
    );
  }
}
export default TodoEntry;
