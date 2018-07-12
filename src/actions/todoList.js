// import actiontypes
// export metadata

import * as TodoListActionCreators from '../actiontypes/todoList';

export const addTodo = (todo) => (
  {
    type: TodoListActionCreators.ADD_TODO,
    todo,
  }
);

export const removeTodo = (index) => (
  {
    type: TodoListActionCreators.REMOVE_TODO,
    index,
  }
);

export const updateTodo = (index, todo) => (
  {
    type: TodoListActionCreators.UPDATE_TODO,
    todo,
    index,
  }
);
