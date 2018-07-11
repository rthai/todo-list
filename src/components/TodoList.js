import React from 'react';

import Todo from './Todo';

const TodoList = (props) => (
  <ol>
    {props.todos.map( (todo, index) => <Todo/>
    )}
  </ol>
);

export default TodoList;