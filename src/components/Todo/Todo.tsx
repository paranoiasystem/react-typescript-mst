import React from 'react'
import './Todo.css'
import { TodoProps } from '../../common/PropsInterface';
import { inject, observer } from 'mobx-react';
import { ListItem, ListItemText, ListItemSecondaryAction, IconButton, Divider } from "@material-ui/core";
import { Done } from '@material-ui/icons';

@inject('store')
@observer
class Todo extends React.Component<TodoProps> {
    render() {
        const { todo } = this.props; 
        return (
            <div>
                <ListItem>
                    <ListItemText className={(todo.done ? 'complete' : '')} primary={todo.title} />
                    <ListItemSecondaryAction>
                        <IconButton aria-label="make done" onClick={() =>{ todo.complete() }}>
                            <Done />
                        </IconButton>
                    </ListItemSecondaryAction>
                </ListItem>
                <Divider variant="middle" />
            </div>
        )
    }
}

export { Todo }
