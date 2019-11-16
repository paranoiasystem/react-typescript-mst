import React from 'react';
import './App.css';
import { Store } from '../../stores/store';
import { inject, observer } from 'mobx-react';

import { Button } from "@material-ui/core";

interface InjectProps {
  store: typeof Store.Type;
}

interface AppProps {
  title: string;
}

@inject('store')
@observer
class TodoList extends React.Component {
  get injected(): InjectProps {
    return this.props as InjectProps;
  }

  render() {
    const { todos } = this.injected.store;
    return (
      <ul>
        {
          todos.map(todo => <li>{todo.title}</li>)
        }
      </ul>
    )
  }

}

@inject('store')
@observer
class App extends React.Component<AppProps> {

  get injected(): InjectProps {
    return this.props as AppProps & InjectProps;
  }

  componentDidMount() {
    console.log(this.injected.store.todos[0].title)
  }

  render() {
    const { title } = this.props;
    return (
      <div>
        <Button variant="contained" color="primary">
          {title}
        </Button>
        <TodoList />
      </div>
    );
  }
}

export { App };
