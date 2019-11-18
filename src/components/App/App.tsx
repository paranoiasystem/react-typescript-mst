import React from 'react';
import { Container, Box } from '@material-ui/core'
import TodoList from '../TodoList'
import TodoInput from '../TodoInput';
import TodoListStatus from '../TodoListStatus';
import AppBar from '../AppBar';

class App extends React.Component {
  render() {
    return (
      <div>
        <AppBar />
        <Container>
          <Box p={2}>
            <TodoInput />
          </Box>
          <Box p={2}>
            <TodoListStatus />
          </Box>
          <Box p={2}>
            <TodoList />
          </Box>
        </Container>
      </div>
    );
  }
}

export { App };
