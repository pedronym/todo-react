/* Imports */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TodoInput extends Component {

  /*
    @lifecycle method
    CONSTRUCTOR
  */

  constructor(props) {
    super(props);

    this.addTodo = this.addTodo.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
    
    this.state = { text: '' };
  }

  /*
    @custom method
    ADD TODO
  */

  addTodo(e) {
    e.preventDefault();
    
    if (this.state.text.length > 0) {
      this.props.addTodo(this.state.text);
      this.setState({
        text: ''
      });
    }
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
      <header className="todo-input container">
        <form onSubmit={this.addTodo} className="columns">
          <div className="field column">
            <div className="control has-icons-right">
              <input 
                value={this.state.text} 
                type="text" 
                onChange={this.onInputChange} 
                className="input is-large" 
                placeholder="Add something to do"
              />
              
              <span className="icon is-small is-right">
                <i className="material-icons">add_circle</i>
              </span>
            </div>
          </div>
        </form>
      </header>
    );
  }
}

/*
  @proptypes
*/

TodoInput.propTypes = {
  addTodo: PropTypes.func.isRequired
};

export default TodoInput;
