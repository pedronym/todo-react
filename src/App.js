import React, { Component } from 'react';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import TodoFilters from './components/TodoFilters';
import './App.css';

class App extends Component {
  
  constructor (props) {
    super(props);

    this.addTodo = this.addTodo.bind(this);
    this.toggleTodo = this.toggleTodo.bind(this);
    this.editTodo = this.editTodo.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);
    this.filterTodos = this.filterTodos.bind(this);
    this.getTodos = this.getTodos.bind(this);

    this.state = {
      all: [],
      filter: 'All'
    };
  }

  /*
    @method
    ADD TODO
  */

  addTodo (text) {
    this.setState({
      all: this.state.all.concat([{
        text: text,
        completed: false
      }])
    });
  }

  /*
    @method
    FILTER TODOS
  */

  filterTodos (filter) {
    this.setState({
      filter
    });
  }

  /*
    @method
    EDIT TODO
  */

  editTodo (todo, newText) {
    todo.text = newText;
    this.forceUpdate();
  }

  /*
    @method
    TOGGLE TODO
  */

  toggleTodo (todo) {
    todo.completed = !todo.completed;
    this.forceUpdate();
  }

  /*
    @method
    DELETE TODO
  */

  deleteTodo (todoIdx) {
    this.setState({
      all: this.state.all.filter((todo, idx) => idx !== todoIdx)
    })
  }

  getTodos() {
    if (this.state.filter === 'Active') {
      return this.state.all.filter((todo) => !todo.completed);
    } else if (this.state.filter === 'Completed') {
      return this.state.all.filter((todo) => todo.completed)
    } else {
      return this.state.all.sort((a, b) => a.completed);
    }
  }

  /*
    @method
    RENDER
  */

  render () {
    let todos = this.getTodos();

    return (
      <div className="todo-app container">
        <div className="row">
          <TodoInput add={this.addTodo} />
          <TodoList editTodo={this.editTodo} deleteTodo={this.deleteTodo} toggleTodo={this.toggleTodo} todos={todos} />
          <TodoFilters filterTodos={this.filterTodos} filter={this.state.filter} />
        </div>
      </div>
    );
  }
}

export default App;
