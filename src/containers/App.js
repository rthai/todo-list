// bind actioncreators
// connect
// map state to props

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as TodoListActionCreators from '../actions/todoList';
import TodoList from '../components/TodoList';

class App extends Component {

  render() {
    // pull out from this.props
    const { dispatch, todos } = this.props;

    // bind action creaters here
    const addTodo = bindActionCreators(TodoListActionCreators.addTodo, dispatch);
    const removeTodo = bindActionCreators(TodoListActionCreators.removeTodo, dispatch);
    const updateTodo = bindActionCreators(TodoListActionCreators.updateTodo, dispatch);

    return (
      <TodoList todos={todos}/>
    );
  }
}

const mapStateToProps = (state) => (
  {
    todos: state,
  }
)

App.propTypes = {
  todos: PropTypes.array.isRequired,
}
export default connect(mapStateToProps)(App);

