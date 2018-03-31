import React, { Component } from 'react';
import TodoListItem from './TodoListItem';

class TodoList extends Component {

  constructor(props) {
    super(props);

    this.renderTodos = this.renderTodos.bind(this);
    this.renderEmpty = this.renderEmpty.bind(this);
  }

  renderTodos () {    
    if (this.props.todos.length > 0) {
      return this.props.todos.map((todo, idx) => {
        return <TodoListItem key={idx} todo={todo} editTodo={this.props.editTodo} deleteTodo={this.props.deleteTodo} toggleTodo={this.props.toggleTodo} idx={idx} />;
      })
    } else {
      this.renderEmpty();
    }
  }

  renderEmpty() {
    return (
      <div className="card">
        <div className="card-block">
          <h4 className="card-title">Nothing to do :(</h4>
        </div>
      </div>
    );
  }

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

export default TodoList;
