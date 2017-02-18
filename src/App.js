import React, { Component } from 'react';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import TodoFilters from './components/TodoFilters';
import './App.css';

class App extends Component {
  
  constructor (props) {
    super(props);
    this.state = {
      todos: []
    };
  }

  add (e) {
    this.state.todos.unshift({
      text: e,
      completed: false
    });
    this.forceUpdate();
  }

  render () {
    return (
    <div className="todo-app container">
      <div className="row">
        <TodoInput add={this.add.bind(this)} />
        <TodoList todos={this.state.todos} />
        <TodoFilters />
      </div>
    </div>
    );
  }
}

export default App;
