import * as todoListActionTypes from '../actiontypes/todoList';

const initialState = [
  {
    todo: 'apply for jobs',
    completed: false,
  },
  {
    todo: 'build something with redux',
    completed: false,
  },
  {
    todo: 'update job tracker',
    completed: false,
  },
];

export default function TodoList (state=initialState, action) {
  switch(action.type) {
    case todoListActionTypes.ADD_TODO:
    // copy current state and push new item in
      return [
        ...state, 
        {
          todo: action.todo,
          completed: false,
        }
      ];

    case todoListActionTypes.REMOVE_TODO:
    // get index to remove todo
      return [
        ...state.slice(0, action.index),
        ...state.slice(action.index + 1),
      ];
      
    case todoListActionTypes.UPDATE_TODO:
      const updateTodo = state.map( (todo, index) => {
        if (index === action.index) {
          return {
            ...todo,
            todo: action.todo,
          }
        }
        return todo;
      });
      return updateTodo;

    default:
      return state;
  }
}