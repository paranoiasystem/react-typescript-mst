import React from 'react'
import { inject, observer } from 'mobx-react'
import { InjectProps } from '../../common/PropsInterface'
import { Grid, Button, ButtonGroup } from '@material-ui/core'

const TodoListStatus: React.FC = inject('store')(observer((props) => {
    const { store } = props as InjectProps
    return (
        <Grid container spacing={2}>
            <Grid item xs={12} md={12}>
                <ButtonGroup fullWidth aria-label="full width outlined button group">
                    <Button onClick={() => store.filterBy('all')}>
                        All Todos ({store.todos.length})
                    </Button>
                    <Button onClick={() => store.filterBy('complete')}>
                        Completed Todos ({store.completedTodos})
                    </Button>
                    <Button onClick={() => store.filterBy('uncomplete')}>
                        Uncompleted Todos ({store.uncompletedTodos})
                    </Button>
                </ButtonGroup>
            </Grid>
        </Grid>
    )
}))

export { TodoListStatus }
