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

  addTodo (text) {
    this.state.todos.unshift({
      text: text,
      completed: false
    });
    this.forceUpdate();
  }

  filterTodos (filter) {
    let filtered = [];

    switch (filter) {
      case 'All':
        console.log('Showing -', filter);
        filtered = this.state.todos;
      break;
      
      case 'Active':
        console.log('Showing -', filter);
        filtered = this.state.todos.filter((todo) => !filter.completed);
      break;
      
      case 'Completed':
        console.log('Showing -', filter);
        filtered = this.state.todos.filter((todo) => filter.completed);
      break;

      default:
        console.log('No filter');
      break;
    }

    this.setState({
      todos: filtered
    })
  }

  toggleTodo (completed) {
    console.log('Toggling Todo');
  }

  deleteTodo (e) {
    console.log('Deleting Todo', this.state.todos.indexOf(e.currentTarget));
  }

  render () {
    return (
    <div className="todo-app container">
      <div className="row">
        <TodoInput add={this.addTodo.bind(this)} />
        <TodoList deleteTodo={this.deleteTodo.bind(this)} toggleTodo={this.toggleTodo.bind(this)} todos={this.state.todos} />
        <TodoFilters filter={this.filterTodos.bind(this)} />
      </div>
    </div>
    );
  }
}

export default App;
