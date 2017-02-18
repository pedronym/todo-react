import React, { Component } from 'react';

class TodoList extends Component {

  componentWillReceiveProps(nextProps) {
    this.setState({ 
      todos: nextProps.todos
    });
  }

  getTodos () {
    if(this.props.todos.length > 0) {
      return this.props.todos.map((todo, idx) => {
        return <li key={idx} className="list-group-item todo-list-item">
          {todo.text}
        </li>;
      })
    } else {
      return <p>Nothing to do</p>;
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
