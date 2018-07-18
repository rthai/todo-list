import React from 'react';

import Todo from './Todo';

const TodoList = (props) => (
  <ul>
    {props.todos.map( (todo, index) => 
      <Todo 
        todo={todo}
        index={index}
        key={index}
        removeTodo={props.removeTodo}
      />
    )}
  </ul>
);

export default TodoList;