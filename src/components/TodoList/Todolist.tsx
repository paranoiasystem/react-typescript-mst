import React from 'react';
import { inject, observer } from 'mobx-react';
import { List } from '@material-ui/core'
import { InjectProps } from '../../common/PropsInterface'
import Todo from '../Todo';

@inject('store')
@observer
class TodoList extends React.Component {
  get injected(): InjectProps {
    return this.props as InjectProps;
  }

  render() {
    const { todos } = this.injected.store;
    return (
      <List>
        {
          todos.map(todo => <Todo key={todo.id} todo={todo}/>)
        }
      </List>
    )
  }

}

export { TodoList }
