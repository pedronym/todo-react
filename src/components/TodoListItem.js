/* Imports */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TodoListItem extends Component {

  /*
    @lifecycle method
    CONSTRUCTOR
  */

  constructor(props) {
    super(props);

    /* Component Methods */
    this.editTodo = this.editTodo.bind(this);
    this.toggleTodo = this.toggleTodo.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);
    this.onEditFinish = this.onEditFinish.bind(this);
    this.onInputChange = this.onInputChange.bind(this);

    /* Initial State */
    this.state = {
      text: '',
      editing: false
    };
  }

  /*
    @custom method
    EDIT TODO
  */

  editTodo(e) {
    e.preventDefault();
    this.setState({ editing: !this.state.editing });
  }

  /*
    @custom method
    TOGGLE TODO
  */

  toggleTodo(e) {
    e.preventDefault();
    this.props.toggleTodo(this.props.todo);
  }
  
  /*
    @custom method
    DELETE TODO
  */

  deleteTodo(e, idx) {
    e.preventDefault();
    this.props.deleteTodo(idx);
  }

  /*
    @custom method
    ON EDIT FINISH
  */

  onEditFinish(e) {
    e.preventDefault();
    this.props.editTodo(this.props.todo, this.state.text);

    this.setState({
      editing: false
    });
  }

  /*
    @custom method
    ON INPUT CHANGE
  */

  onInputChange(e) {
    this.setState({
      text: e.target.value
    });
  }

  /*
    @lifecycle method
    RENDER
  */

  render() {
    return (
      <div key={this.props.idx} className={`box todo-list-item is-clearfix ${this.props.todo.completed ? 'todo-list-item__completed' : ''}`}>
        <div className="todo-list-item-text">
          <p className={`is-size-5 ${this.state.editing ? 'is-hidden' : ''}`} onClick={this.editTodo}>{this.props.todo.text}</p>
          <form onSubmit={this.onEditFinish}>
            <input 
              type="text" 
              value={this.state.text} 
              placeholder={this.props.todo.text} 
              onChange={this.onInputChange} 
              className={`input ${this.state.editing ? '' : 'is-hidden'}`} />
          </form>
        </div>

        <aside className="todo-list-item__options columns is-mobile is-pulled-right">
          <a className="todo-list-item__toggle column is-narrow" href="" onClick={(e) => this.toggleTodo(e)}>
            <i className="material-icons">check</i>
          </a>

          <a className="todo-list-item__edit column is-narrow" href="" onClick={(e) => this.editTodo(e)}>
            <i className="material-icons">edit</i>
          </a>
          
          <a className="todo-list-item__delete column is-narrow" href="" onClick={(e) => this.deleteTodo(e, this.props.idx)}>
            <i className="material-icons">delete</i>
          </a>
        </aside>      
      </div>
    );
  }
}

/*
  @proptypes
*/

TodoListItem.propTypes = {
  todo: PropTypes.shape({
    text: PropTypes.string,
    completed: PropTypes.bool
  }),
  editTodo: PropTypes.func.isRequired
};

export default TodoListItem;