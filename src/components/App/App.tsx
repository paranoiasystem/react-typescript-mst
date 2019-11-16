import React from 'react';
import './App.css';
import { Grid } from '@material-ui/core'
import TodoList from '../TodoList'
import TodoInput from '../TodoInput';

class App extends React.Component {

  render() {
    return (
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <TodoInput />
        </Grid>
        <Grid item xs={12} md={6}>
          <TodoList />
        </Grid>
      </Grid>
    );
  }
}

export { App };
