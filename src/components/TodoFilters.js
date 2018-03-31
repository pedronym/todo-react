import React, { Component } from 'react';

class TodoFilters extends Component {
  
  constructor(props) {
    super(props);

    this.state = {
      filters: ['All', 'Active', 'Completed']
    };
    
    this.filterTodos = this.filterTodos.bind(this);
  }

  filterTodos (e, filter) {
    e.preventDefault();
    this.props.filterTodos(filter);
  }

  getButtons () {
    return this.state.filters.map((filter) => {
      const isActive = filter === this.props.filter ? 'active btn-light' : 'btn-secondary';
      
      return (
        <a href="" key={filter} onClick={(e) => this.filterTodos(e, filter)} className={`btn ${isActive}`}>
            {filter}
        </a>
      )
    });
  }

  render () {
    return (
      <section className="todo-filters col-sm-12 space-above">
        <div className="btn-group">
          {this.getButtons()}
        </div>
      </section>
    );
  }
}

export default TodoFilters;
