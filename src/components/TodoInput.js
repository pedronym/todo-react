import React, { Component } from 'react';

class TodoInput extends Component {

  constructor (props) {
    super(props);

    this.addTodo = this.addTodo.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
    
    this.state = { 
      text: '' 
    };
  }

  addTodo (e) {
    e.preventDefault();
    
    if (this.state.text.length > 0) {
      this.props.add(this.state.text);
      this.setState({
        text: ''
      });
    }
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
        <form onSubmit={this.addTodo} className="input-group input-group-lg">
          <input value={this.state.text} type="text" onChange={this.onInputChange} className="form-control" placeholder={fields.placeholder} />
        </form>
      </header>
    );
  }
}

export default TodoInput;
