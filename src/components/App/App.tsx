import React from 'react';
import './App.css';
import { Container } from '@material-ui/core'
import TodoList from '../TodoList'
import TodoInput from '../TodoInput';
import TodoListStatus from '../TodoListStatus';

class App extends React.Component {
  render() {
    return (
      <Container>
        <TodoInput />
        <TodoListStatus />
        <TodoList />
      </Container>
    );
  }
}

export { App };
