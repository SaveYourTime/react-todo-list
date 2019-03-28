import React, { Component } from 'react';
import TodoHeader from './components/TodoHeader';
import TodoList from './components/TodoList';
import TodoFooter from './components/TodoFooter';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tab: 'all',
      items: []
    }
  }

  handleAddTodo = (e) => {
    const { value } = e.target;
    if (e.keyCode !== 13 || value === '') return;
    let { items } = this.state;
    const item = { text: value, status: 1 };
    items.push(item);
    this.setState({ items });
    e.target.value = '';
  }
  handleToggleTodo = (index) => {
    const { items } = this.state;
    items[index].status = items[index].status ? 0 : 1;
    this.setState({ items });
  }
  handleRemoveTodo = (index) => {
    const { items } = this.state;
    items.splice(index, 1);
    this.setState({ items });
  }
  handleToggleTab = (tab) => {
    this.setState({ tab });
  }
  handleClearCompleted = () => {
    const items = this.state.items.filter(({ status }) => status);
    this.setState({ items });
  }

  render() {
    const { tab, items } = this.state;
    return (
      <div>
        <h1 className="title">Todos</h1>
        <main className="todo-wrapper">
          <TodoHeader handleAddTodo={this.handleAddTodo} />
          <TodoList
            tab={tab}
            data={items}
            handleToggleTodo={this.handleToggleTodo}
            handleRemoveTodo={this.handleRemoveTodo}
          />
          <TodoFooter
            tab={tab}
            counts={items.filter(({ status }) => status).length}
            handleToggleTab={this.handleToggleTab}
            handleClearCompleted={this.handleClearCompleted}
          />
        </main>
      </div>
    );
  }
}

export default App;