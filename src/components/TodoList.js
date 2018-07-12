import React from 'react';

import Todo from './Todo';

const TodoList = (props) => (
  <ol>
    {props.todos.map( (todo, index) => 
      <Todo 
        todo={todo}
        index={index}
        key={index}
      />
    )}
  </ol>
);

export default TodoList;