import React, { Component } from 'react';

class TodoList extends Component {

  constructor (props) {
    super(props);
    this.state = {
      todos: this.props.todos || []
    }

    this.toggleTodo = this.toggleTodo.bind(this);
    this.editTodo = this.editTodo.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);
  }

  componentWillReceiveProps (nextProps) {
    this.setState({ 
      todos: nextProps.todos
    });
  }

  editTodo (e, todo) {
    e.preventDefault();
  }

  toggleTodo (e, todo) {
    e.preventDefault();
    this.props.toggleTodo(todo);
  }

  deleteTodo(e, todo) {
    e.preventDefault();
    this.props.deleteTodo(e);
  }

  getTodos () {
    if (this.props.todos.length > 0) {
      return this.props.todos.map((todo, idx) => {
        return <li key={idx} className="list-group-item todo-list-item">
          
          <div className="todo-list-item-text col-sm-9">
            <p>{todo.text}</p>
          </div>
          
          <aside className="todo-list-item__options col-sm-3">
            <a className="todo-list-item__toggle" href="" onClick={(e) => this.toggleTodo(e, this)}>
              <i className="material-icons">check</i>
            </a>

            <a className="todo-list-item__delete" href="" onClick={(e) => this.deleteTodo(e, this)}>
              <i className="material-icons">delete</i>
            </a>

            <a className="todo-list-item__edit" href="" onClick={(e) => this.editTodo(e, this)}>
              <i className="material-icons">edit</i>
            </a>
          </aside>
          
        </li>;
      })
    } else {
      return <li className="list-group-item todo-list-item">
        <div className="todo-list-item-text col-sm-9">
          <p>Nothing to do :(</p>
        </div>
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
