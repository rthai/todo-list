import React, { Component } from 'react';
import PropTypes from 'prop-types';

import TodoList from './TodoList';

class App extends Component {

  render() {
    return (
      <TodoList todos={[1,2,3]}/>
    );
  }
}

export default App;
