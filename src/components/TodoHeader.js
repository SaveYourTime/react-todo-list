import React, { Component } from 'react';

class TodoHeader extends Component {
  render() {
    const { handleAddTodo } = this.props;
    return (
      <header className="todo-header">
        <input type="text" className="todo-input" placeholder="What needs to be done?" onKeyDown={handleAddTodo} />
      </header>
    );
  }
}

export default TodoHeader;