import React, { Component } from 'react';
import TodoListItem from './TodoListItem';

class TodoList extends Component {
  render() {
    const { tab, data, handleToggleTodo, handleRemoveTodo, handleEditTodo } = this.props;
    let list = data;
    if (tab === 'completed') {
      list = data.filter(({status}) => !status);
    } else if (tab === 'active') {
      list = data.filter(({status}) => status);
    }
    const items = list.map((item, index) => {
      return (
        <TodoListItem
          key={index}
          data={item}
          handleToggleTodo={() => { handleToggleTodo(index) }}
          handleRemoveTodo={() => { handleRemoveTodo(index) }}
          handleEditTodo={handleEditTodo}
          index={index}
        />
      );
    });
    return (
      <section>
        <ul className="todo-list">
          {items}
        </ul>
      </section>
    );
  }
}

export default TodoList;