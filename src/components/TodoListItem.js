import React, { Component } from 'react';

class TodoListItem extends Component {
  render() {
    const { data, handleToggleTodo, handleRemoveTodo } = this.props;
    const { text, status } = data;
    return (
      <li className={`todo-list-item ${status === 0 && 'completed'}`}>
        <input
          type="checkbox"
          className="toggle"
          onChange={handleToggleTodo}
          checked={status === 0 && 'checked'}
        />
        <label>{text}</label>
        <button className="destroy" onClick={handleRemoveTodo}></button>
      </li>
    );
  }
}

export default TodoListItem;