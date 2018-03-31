import React, { Component } from 'react';

class TodoListItem extends Component {

  constructor (props) {
    super(props);

    this.state = {
      text: '',
      editing: false,
      completed: this.props.todo.completed
    };

    this.onEditFinish = this.onEditFinish.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
    this.editTodo = this.editTodo.bind(this);
    this.toggleTodo = this.toggleTodo.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);
  }

  editTodo(e, idx) {
    e.preventDefault();
    this.setState({ editing: !this.state.editing });
  }

  toggleTodo(e, idx) {
    e.preventDefault();
    this.props.toggleTodo(this.props.todo);
  }

  deleteTodo(e, idx) {
    e.preventDefault();
    this.props.deleteTodo(idx);
  }

  onEditFinish(e) {
    e.preventDefault();
    this.props.editTodo(this.props.todo, this.state.text);

    this.setState({
      editing: false
    });
  }

  onInputChange (e) {
    this.setState({
      text: e.target.value
    });
  }

  render () {
    return (
    <li key={this.props.idx} className={`list-group-item todo-list-item ${this.props.todo.completed ? 'todo-list-item__completed' : ''}`}>
      <div className="todo-list-item-text col-sm-9">
        <p className={`${this.state.editing ? 'hidden' : ''}`} onClick={this.editTodo}>{this.props.todo.text}</p>
        <form onSubmit={this.onEditFinish}>
          <input 
            type="text" 
            value={this.state.text} 
            placeholder={this.props.todo.text} 
            onChange={this.onInputChange} 
            className={`form-control ${this.state.editing ? '' : 'hidden'}`} />
        </form>
      </div>

      <aside className="todo-list-item__options col-sm-3">
        <a className="todo-list-item__toggle" href="" onClick={(e) => this.toggleTodo(e, this.props.idx)}>
          <i className="material-icons">check</i>
        </a>

        <a className="todo-list-item__edit" href="" onClick={(e) => this.editTodo(e, this.props.idx)}>
          <i className="material-icons">edit</i>
        </a>
        
        <a className="todo-list-item__delete" href="" onClick={(e) => this.deleteTodo(e, this.props.idx)}>
          <i className="material-icons">delete</i>
        </a>
      </aside>      
    </li>)
  }
}

export default TodoListItem;