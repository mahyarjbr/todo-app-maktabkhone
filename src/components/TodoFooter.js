import React, { Component } from "react";
import { observer } from "mobx-react";
import TodoStore from "../stores/TodoStore";
import { action } from "mobx";

@observer
class TodoFooter extends Component {
  all = () => {
    TodoStore.filter = TodoStore.todos;
  };

  active = () => {
    TodoStore.filter = TodoStore.todos.filter(
      (todo) => todo.completed === false
    );
  };

  completed = () => {
    TodoStore.filter = TodoStore.todos.filter(
      (todo) => todo.completed === true
    );
  };

  @action
  onClearCompleted() {
    TodoStore.clearCompleted();
  }
  render() {
    const todo = this.props.todo;
    return (
      <footer class="footer">
        <span class="todo-count">
          <strong>{TodoStore.activeTodoCount}</strong> item left
        </span>

        <ul className="filters" >
          <li>
            <a onClick={this.all} className="selected">
              All
            </a>
          </li>
          <li>
            <a onClick={this.active}>Active </a>
          </li>
          <li>
            <a onClick={this.completed}>Completed</a>
          </li>
        </ul>
        {TodoStore.completedCount === 0 ? null : (
          <button className="clear-completed" onClick={this.onClearCompleted}>
            Clear completed
          </button>
        )}
      </footer>
    );
  }
}
export default TodoFooter;
