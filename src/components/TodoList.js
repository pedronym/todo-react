/* Imports */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

/* Components */
import TodoListItem from './TodoListItem';

class TodoList extends Component {

  /*
    @lifecycle method
    CONSTRUCTOR
  */

  constructor(props) {
    super(props);

    /* Component Methods */
    this.renderTodos = this.renderTodos.bind(this);
    this.renderEmpty = this.renderEmpty.bind(this);
  }

  /*
    @custom method
    RENDER TODOS
    Iterates through the todos array or returns another function if empty
  */

  renderTodos () {    
    if (this.props.todos.length > 0) {
      return this.props.todos.map((todo, idx) => {
        return <TodoListItem key={idx} todo={todo} editTodo={this.props.editTodo} deleteTodo={this.props.deleteTodo} toggleTodo={this.props.toggleTodo} idx={idx} />;
      })
    } else {
      return this.renderEmpty();
    }
  }

  /*
    @custom method
    RENDER EMPTY
    Renders a 'no todos available' layout when the todos are empty
  */

  renderEmpty() {
    return (
      <div className="card">
        <div className="card-block">
          <h4 className="card-title">Nothing to do :(</h4>
        </div>
      </div>
    );
  }

  /*
    @lifecycle method
    RENDER
  */

  render() {
    return (
      <section className="todo-list col-sm-12 space-above">
        <ul className="list-group">
          {this.renderTodos()}
        </ul>
      </section>
    );
  }
}

/*
  @proptypes
*/

TodoList.propTypes = {
  todos: PropTypes.array,
  editTodo: PropTypes.func.isRequired,
  deleteTodo : PropTypes.func.isRequired,
  toggleTodo : PropTypes.func.isRequired
};

export default TodoList;
