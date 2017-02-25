import React, { Component } from 'react';

class TodoFilters extends Component {
  
  constructor(props) {
    super(props);

    this.state = {
      filters: ['Active', 'Completed', 'All'],
      activeFilter: 'Active'
    };
    
    this.filterTodos = this.filterTodos.bind(this);
  }

  filterTodos (e, filter) {
    e.preventDefault();
    this.setState({
      activeFilter: filter
    });
  }

  getButtons () {
    return this.state.filters.map((filter) => {
      if (filter === this.state.activeFilter) {
        return <a href="" key={filter} onClick={(e) => this.filterTodos(e, filter)} className="active btn btn-secondary">
            {filter}
          </a>;
      } else {
        return <a href="" key={filter} onClick={(e) => this.filterTodos(e, filter)} className="btn btn-secondary">
            {filter}
          </a>;
      }
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
