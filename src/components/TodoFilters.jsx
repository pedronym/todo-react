/* Imports */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TodoFilters extends Component {

  /*
    @lifecycle method
    CONSTRUCTOR
  */

  constructor(props) {
    super(props);

    this.filterTodos = this.filterTodos.bind(this);

    this.state = {
      filters: ['All', 'Active', 'Completed']
    };
  }

  /*
    @custom method
    FILTER TODOS
  */

  filterTodos(e, filter) {
    e.preventDefault();
    this.props.filterTodos(filter);
  }

  /*
    @custom method
    GET BUTTONS
  */

  getButtons() {
    if (this.props.visible) {
      return this.state.filters.map((filter) => {
        const isActive = filter === this.props.filter ? 'active is-primary' : 'is-white';
        
        return(
          <div key={filter} className='column is-narrow'>
            <button onClick={e => this.filterTodos(e, filter)} className={`button ${isActive}`}>
              {filter}
            </button>
          </div>
        );
      });
    } else {
      return false;
    }
  }

  /*
    @lifecycle method
    RENDER
  */

  render() {
    return (
      <section className="todo-filters columns is-mobile is-centered">
        {this.getButtons()}
      </section>
    );
  }
}

/*
  @proptypes
*/

TodoFilters.propTypes = {
  visible: PropTypes.bool,
  filter: PropTypes.string,
  filterTodos: PropTypes.func.isRequired
};

export default TodoFilters;
