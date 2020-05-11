import React, { Component } from "react";
import "./App.css";
import TodoEntry from "./components/TodoEntry";
import TodoItems from "./components/TodoItems";
import TodoFooter from "./components/TodoFooter";
import TodoStore from "./stores/TodoStore";
import {observer} from 'mobx-react';
@observer
class App extends Component {
  render() {
    const todo=this.props
    return (
      <div className="todoapp">
        <TodoEntry />
        <TodoItems />
        <TodoFooter  />
      </div>
    );
  }
}
export default App;
