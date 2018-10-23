/* Imports */
import React, { Component } from 'react';
import { Transition, Spring, animated } from 'react-spring';
/* Data */
import Storage from './components/Storage';

/* Components */
import Info from './components/Info';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import TodoFilters from './components/TodoFilters';
import Footer from './components/Footer';

/* Styles */
import './styles/css/app.css';


const defaultTodo = () => {
  return {
    text: '',
    completed: false,
    id: Date.now()
  };
};

const createTodo = todo => {
  return { ...defaultTodo(), ...todo };
};

class App extends Component {

  /*
    @lifecycle method
    CONSTRUCTOR
  */

  constructor(props) {
    super(props);

    /* Component Methods */
    this.showInfo = this.showInfo.bind(this);
    this.getTodos = this.getTodos.bind(this);
    this.addTodo = this.addTodo.bind(this);
    this.toggleTodo = this.toggleTodo.bind(this);
    this.editTodo = this.editTodo.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);
    this.filterTodos = this.filterTodos.bind(this);

    /* Initial State */
    this.state = {
      all: Storage.getTodos(),
      filter: 'All',
      showInfo: false
    };
  }

  /*
    @lifecycle method
    COMPONENT DID UPDATE
  */

  componentDidUpdate() {
    Storage.saveTodos(this.state.all);
  }

  showInfo() {
    this.setState(prevState => ({ showInfo: !prevState.showInfo }));
  }

  /*
    @custom method
    ADD TODO
    Accepts the text from TodoInput and creates a new todo Object
  */

  addTodo(text) {
    this.setState({
      all: [createTodo({ text })].concat(this.state.all)
    });
  }

  /*
    @custom method
    FILTER TODOS
    Accepts a filter string value and sets the filter state
  */

  filterTodos(filter) {
    this.setState({ filter });
  }

  /*
    @custom method
    EDIT TODO
    Accepts the todo Object and sets the new text on it. We force a rerender after this change.
  */

  editTodo(todoId, text) {
    const todos = [ ...this.state.all ];
    const todo = todos.find(todo => todo.id === todoId);
    const index = todos.indexOf(todo);
    const { id, completed } = todo;

    todos.splice(index, 1);
    todos.splice(index, 0, createTodo({ text, id, completed }));

    this.setState({ all: todos });
  }

  /*
    @custom method
    TOGGLE TODO
    Accepts the todo Object and sets the completed property on it. Also forces a rerender.
  */

  toggleTodo(todoId) {
    const todos = [ ...this.state.all ];
    const todo = todos.find(todo => todo.id === todoId);
    const { id, text, completed } = todo;
    
    todos.splice(todos.indexOf(todo), 1);

    this.setState({
      all: todos.concat(createTodo({ text, id, completed: !completed }))
    });
  }

  /*
    @custom method
    DELETE TODO
    Accepts the todo idx and filters the todos to remove that array element.
  */

  deleteTodo(todoId) {
    this.setState({
      all: this.state.all.filter(todo => todo.id !== todoId)
    });
  }

  /*
    @custom method
    GET TODOS
  */

  getTodos() {
    const { all, filter } = this.state;

    if (filter === 'Active') {
      return all.filter(todo => !todo.completed);
    } else if (this.state.filter === 'Completed') {
      return all.filter(todo => todo.completed);
    } else {
      return all.sort(a => a.completed);
    }
  }

  /*
    @lifecycle method
    RENDER
  */

  render() {
    let todos = this.getTodos();

    return (
      <div className="todo-app">

        {this.props.showInfo && 
          <Info />
        }

        <TodoInput addTodo={this.addTodo} />

        <TodoList 
          editTodo={this.editTodo} 
          deleteTodo={this.deleteTodo} 
          toggleTodo={this.toggleTodo} 
          todos={todos} 
        />

        <TodoFilters 
          visible={true} 
          filterTodos={this.filterTodos} 
          filter={this.state.filter} 
        />

        <Footer showInfo={this.showInfo} />
        
      </div>
    );
  }
}

export default App;
