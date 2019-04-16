import React, { Component } from 'react';

class TodoListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditing: false,
    }
    this.editingInput = React.createRef();
  }

  toggleEditing = () => {
    if (this.props.data.text === '') {
      return this.editingInput.current.focus();
    };
    this.setState((prevState) => ({ isEditing: !prevState.isEditing }));
  }

  onTextInputChange = (e) => {
    const { value } = e.target;
    this.props.handleEditTodo(this.props.index, value);
  }

  handleEndEditing = (e) => {
    if (e.keyCode === 13) {
      this.toggleEditing();
    }
  }

  componentDidUpdate() {
    if (this.state.isEditing) {
      this.editingInput.current.focus();
    }
  }

  render() {
    const { isEditing } = this.state;
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
        {isEditing ?
          <input
            type="text"
            className="editing-input"
            onChange={this.onTextInputChange}
            onKeyDown={this.handleEndEditing}
            onBlur={this.toggleEditing}
            value={text}
            ref={this.editingInput}
          /> :
          <label onDoubleClick={this.toggleEditing}>{text}</label>
        }
        <button className="destroy" onClick={handleRemoveTodo}></button>
      </li>
    );
  }
}

export default TodoListItem;