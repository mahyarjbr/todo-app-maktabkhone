import React, { Component } from "react";
import { observer } from "mobx-react";
import { action } from "mobx";

@observer
export default class TodoItem extends Component {
  onToggle = () => {
    this.props.todo.toggle();
  };
  @action
  onDestroy = () => {
    this.props.todo.destroy();
  };
  
  render() {
    const { todo } = this.props;
    return (
      <li class={todo.completed ? "completed" : ""}>
        <div class="view">
          <input
            onChange={this.onToggle}
            class="toggle"
            type="checkbox"
            checked={todo.completed}
          />
          <label>{todo.title}</label>
          <button onClick={this.onDestroy} class="destroy"></button>
        </div>
        <input class="edit" value="Create a TodoMVC template" />
      </li>
    );
  }
}


 
