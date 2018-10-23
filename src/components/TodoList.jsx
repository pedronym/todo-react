/* Imports */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Transition, animated } from 'react-spring';

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

  renderTodos() {
    const { todos, editTodo, deleteTodo, toggleTodo } = this.props;

    if (todos.length > 0) {
      return (
        <Transition
          native
          keys={todos.map(todo => todo.id)}
          from={{ opacity:0, height: 0 }}  
          enter={{ opacity: 1, height: 'auto' }}
          leave={{ opacity: 0, height: 0, pointerEvents: 'none' }}>

          {todos.map(todo => styles => {
            
            return (
              <animated.div style={styles}>
                <TodoListItem 
                  key={todo.id} 
                  todo={todo} 
                  editTodo={editTodo} 
                  deleteTodo={deleteTodo} 
                  toggleTodo={toggleTodo} 
                  idx={todo.id} 
                />
              </animated.div>
            );

          })}
        </Transition>
      );
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
    return(
      <div className="box has-text-centered">
        <i className="material-icons is-size-1">insert_emoticon</i>
        <p className="is-size-6">Nothing to do</p>
      </div>
    );
  }

  /*
    @lifecycle method
    RENDER
  */

  render() {
    return (
      <section className="todo-list">
        {this.renderTodos()}
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
