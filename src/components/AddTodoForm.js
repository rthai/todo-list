import React, { Component } from 'react';

export default class AddTodoForm extends Component {
  state = { todo: '' }

  onInputChange = (e) => {
    const todo = e.target.value;
    this.setState({ todo });
  }

  addTodo = (e) => {
    if (e) e.preventDefault();
    this.props.addTodo(this.state.todo);
    this.setState({ todo: '' })
  }

  render() {
    return(
      <div className="add-todo-form">
        <form onSubmit={this.addTodo}>
          <input
            className="form-input" 
            type="text"
            placeholder="What do you need to do?"
            onChange={this.onInputChange}
          />
          <input className="form-submit" type="submit" value="+"/>
        </form>
      </div>
    );
  }
}

