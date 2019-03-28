import React, { Component } from 'react';

class TodoFooter extends Component {
  render() {
    const { tab, counts, handleToggleTab, handleClearCompleted } = this.props;
    return (
      <footer className="todo-footer">
        <span className="todo-count">{counts} items left</span>
        <ul className="filters">
          <li><a href="#/" className={tab === 'all' ? 'selected' : ''} onClick={() => handleToggleTab('all')}>All</a></li>
          <li><a href="#/active" className={tab === 'active' ? 'selected' : ''} onClick={() => handleToggleTab('active')}>Active</a></li>
          <li><a href="#/completed" className={tab === 'completed' ? 'selected' : ''} onClick={() => handleToggleTab('completed')}>Completed</a></li>
        </ul>
        <button
          className="clear-completed"
          onClick={handleClearCompleted}
        >Clear completed</button>
      </footer>
    );
  }
}

export default TodoFooter;