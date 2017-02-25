import React, { Component } from 'react';

class TodoInput extends Component {

  constructor (props) {
    super(props);
    this.state = { 
      text: '' 
    };

    this.addTodo = this.addTodo.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
  }

  addTodo (e) {
    e.preventDefault();
    this.props.add(this.state.text);
    this.setState({
      text: ''
    });
  }

  onInputChange (e) {
    this.setState({ 
      text: e.target.value 
    });
  }

  render () {
    const fields = {
      placeholder: 'Add something to do'
    };

    return (
      <header className="todo-input col-sm-12">
          <form onSubmit={this.addTodo} className="input-group">
            <input value={this.state.text} type="text" onChange={this.onInputChange} className="form-control" placeholder={fields.placeholder} aria-describedby="basic-addon1" />
            <span className="input-group-addon" id="basic-addon1">+</span>
          </form>
      </header>
    );
  }
}

export default TodoInput;
