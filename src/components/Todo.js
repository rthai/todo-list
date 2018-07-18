import React, { Component } from 'react';

// when pencil is clicked, change li class name to editing
export default class Todo extends Component {
  state = {
    editing: false,
  }



  render() {
    return (
      <li className="">
      <input type="checkbox"/>
      <label>{this.props.todo.todo}</label>
      <a className="update-todo"
        /** onClick={() => this.props.updateTodo(this.props.index, todo)}**/>
        ✎
      </a>
      <a 
        className="remove-todo"
        onClick={() => this.props.removeTodo(this.props.index)}>
        ✕
      </a> 
      {/* <input className="edit"/> */}
    </li>
    )
  }
}


// const Todo = (props) => (
//   <li className="">
//     <input type="checkbox"/>
//     <label>{props.todo.todo}</label>
//     <a className="update-todo"
//       onClick={() => props.updateTodo(props.index, todo)}>
//       ✎
//     </a>
//     <a 
//       className="remove-todo"
//       onClick={() => props.removeTodo(props.index)}>
//       x
//     </a> 
//     <input className="edit"/>
//   </li>
// )

// export default Todo;
