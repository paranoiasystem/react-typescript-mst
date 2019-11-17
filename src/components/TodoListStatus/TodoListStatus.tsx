import React from 'react'
import { inject, observer } from 'mobx-react'
import { InjectProps } from '../../common/PropsInterface'
import { Grid, Button } from '@material-ui/core'

const TodoListStatus: React.FC = inject('store')(observer((props) => {
    const { store } = props as InjectProps
    return (
        <Grid container spacing={2}>
            <Grid item xs={4} md={4}>
                <Button onClick={() => store.filterBy('all')}>
                    All Todos ({store.todos.length})
                </Button>
            </Grid>
            <Grid item xs={4} md={4}>
                <Button onClick={() => store.filterBy('complete')}>
                    Completed Todos ({store.completedTodos})
                </Button>
            </Grid>
            <Grid item xs={4} md={4}>
                <Button onClick={() => store.filterBy('uncomplete')}>
                    Uncompleted Todos ({store.uncompletedTodos})
                </Button>
            </Grid>
        </Grid>
    )
}))

export { TodoListStatus }
