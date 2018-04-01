/* Imports */
import React, { Component } from 'react';

/* Data */
import Storage from './components/Storage';

/* Components */
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import TodoFilters from './components/TodoFilters';
import Footer from './components/Footer';

/* Styles */
import './App.css';

class App extends Component {

  /*
    @lifecycle method
    CONSTRUCTOR
  */

  constructor (props) {
    super(props);

    /* Component Methods */
    this.getTodos = this.getTodos.bind(this);
    this.addTodo = this.addTodo.bind(this);
    this.toggleTodo = this.toggleTodo.bind(this);
    this.editTodo = this.editTodo.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);
    this.filterTodos = this.filterTodos.bind(this);

    /* Initial State */
    this.state = {
      all: Storage.getTodos(),
      filter: 'All'
    };
  }

  /*
    @lifecycle method
    COMPONENT DID UPDATE
  */

  componentDidUpdate() {
    Storage.saveTodos(this.state.all);
  }

  /*
    @custom method
    ADD TODO
    Accepts the text from TodoInput and creates a new todo Object
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
    @custom method
    FILTER TODOS
    Accepts a filter string value and sets the filter state
  */

  filterTodos (filter) {
    this.setState({
      filter
    });
  }

  /*
    @custom method
    EDIT TODO
    Accepts the todo Object and sets the new text on it. We force a rerender after this change.
  */

  editTodo (todo, newText) {
    todo.text = newText;
    this.forceUpdate();
  }

  /*
    @custom method
    TOGGLE TODO
    Accepts the todo Object and sets the completed property on it. Also forces a rerender.
  */

  toggleTodo (todo) {
    todo.completed = !todo.completed;
    this.forceUpdate();
  }

  /*
    @custom method
    DELETE TODO
    Accepts the todo idx and filters the todos to remove that array element.
  */

  deleteTodo (todoIdx) {
    this.setState({
      all: this.state.all.filter((todo, idx) => idx !== todoIdx)
    })
  }

  /*
    @custom method
    GET TODOS
  */

  getTodos() {
    const { all, filter } = this.state;

    if (filter === 'Active') {
      return all.filter((todo) => !todo.completed);
    } else if (this.state.filter === 'Completed') {
      return all.filter((todo) => todo.completed)
    } else {
      return all.sort((a, b) => a.completed);
    }
  }

  /*
    @lifecycle method
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

        <Footer />
      </div>
    );
  }
}

export default App;
