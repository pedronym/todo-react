import React, { Component } from 'react';

class TodoList extends Component {

  componentWillReceiveProps(nextProps) {
    this.setState({ 
      todos: nextProps.todos
    });
  }

  getTodos () {
    if (this.props.todos.length > 0) {
      return this.props.todos.map((todo, idx) => {
        return <li key={idx} className="list-group-item todo-list-item">
          
          <div className="todo-list-item-text col-sm-9">
            <p>{todo.text}</p>
          </div>

          <a className="todo-list-item__toggle">
            <i className="material-icons">delete</i>
          </a>

          <a className="todo-list-item__edit">
            <i className="material-icons">edit</i>
          </a>
        </li>;
      })
    } else {
      return <li className="list-group-item todo-list-item">
        Nothing to do :(
      </li>;
    }
  }

  render() {

    return (
      <section className="todo-list col-sm-12 space-above">
        <ul className="list-group">
          {this.getTodos()}
        </ul>
      </section>
    );
  }
}

export default TodoList;
